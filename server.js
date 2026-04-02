require('dotenv').config();
const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// GNews API - free tier (100 req/day). Get your key at https://gnews.io
const GNEWS_API_KEY = process.env.GNEWS_API_KEY || '';

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Simple in-memory cache (15 min TTL) to avoid burning API quota
const cache = {};
const CACHE_TTL = 15 * 60 * 1000;

function getCached(key) {
  const entry = cache[key];
  if (entry && Date.now() - entry.time < CACHE_TTL) return entry.data;
  return null;
}

function setCache(key, data) {
  cache[key] = { data, time: Date.now() };
}

// Proxy endpoint for news
app.get('/api/news', async (req, res) => {
  const { topic, q } = req.query;

  if (!GNEWS_API_KEY) {
    return res.json({ useMock: true });
  }

  const cacheKey = `${topic || ''}|${q || ''}`;
  const cached = getCached(cacheKey);
  if (cached) return res.json(cached);

  try {
    let url;
    if (q) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=en&max=10&apikey=${GNEWS_API_KEY}`;
    } else if (topic) {
      url = `https://gnews.io/api/v4/top-headlines?topic=${encodeURIComponent(topic)}&lang=en&max=10&apikey=${GNEWS_API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${GNEWS_API_KEY}`;
    }

    const data = await fetchJSON(url);

    if (data.errors || !data.articles) {
      console.error('GNews API error:', data.errors || 'no articles returned');
      return res.json({ useMock: true });
    }

    console.log(`  API: ${q || topic || 'headlines'} → ${data.articles.length} articles`);
    setCache(cacheKey, data);
    res.json(data);
  } catch (err) {
    console.error('API error:', err.message);
    res.json({ useMock: true });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  🗞️  NewsPulse running at http://localhost:${PORT}\n`);
  if (!GNEWS_API_KEY) {
    console.log('  ⚠️  No GNEWS_API_KEY set — using demo data.');
    console.log('  Get a free key at https://gnews.io and run:');
    console.log('  GNEWS_API_KEY=your_key npm start\n');
  }
});
