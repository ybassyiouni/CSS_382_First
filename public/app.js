// ========== INTEREST TOPICS ==========
const TOPICS = [
  { id: 'world',         label: 'World',          icon: '🌍', query: 'world' },
  { id: 'politics',      label: 'Politics',       icon: '🏛️', query: 'politics' },
  { id: 'business',      label: 'Business',       icon: '💼', query: 'business' },
  { id: 'technology',    label: 'Technology',      icon: '💻', query: 'technology' },
  { id: 'science',       label: 'Science',         icon: '🔬', query: 'science' },
  { id: 'health',        label: 'Health',           icon: '🏥', query: 'health' },
  { id: 'sports',        label: 'Sports',           icon: '⚽', query: 'sports' },
  { id: 'entertainment', label: 'Entertainment',   icon: '🎬', query: 'entertainment' },
  { id: 'climate',       label: 'Climate',          icon: '🌱', query: 'climate change' },
  { id: 'ai',            label: 'AI & ML',          icon: '🤖', query: 'artificial intelligence' },
  { id: 'crypto',        label: 'Crypto',           icon: '₿',  query: 'cryptocurrency' },
  { id: 'space',         label: 'Space',            icon: '🚀', query: 'space exploration' },
  { id: 'finance',       label: 'Finance',          icon: '📈', query: 'stock market finance' },
  { id: 'education',     label: 'Education',        icon: '📚', query: 'education' },
  { id: 'travel',        label: 'Travel',           icon: '✈️', query: 'travel tourism' },
  { id: 'food',          label: 'Food',             icon: '🍽️', query: 'food culinary' },
  { id: 'gaming',        label: 'Gaming',           icon: '🎮', query: 'video games gaming' },
  { id: 'auto',          label: 'Automotive',       icon: '🚗', query: 'automotive electric vehicles' },
  { id: 'culture',       label: 'Culture',          icon: '🎨', query: 'culture arts' },
  { id: 'energy',        label: 'Energy',           icon: '⚡', query: 'energy renewable' },
];

// ========== MOCK DATA ==========
const MOCK_ARTICLES = {
  world: [
    { title: 'G20 Summit Reaches Historic Agreement on Global Trade Reform', description: 'World leaders have agreed to a landmark package of trade reforms aimed at reducing barriers and promoting sustainable economic growth across developing nations. The agreement includes provisions for digital trade, climate-aligned tariffs, and supply chain transparency.', source: { name: 'Reuters' }, publishedAt: '2026-04-02T08:30:00Z', image: null, url: '#' },
    { title: 'UN General Assembly Votes on Expanded Security Council', description: 'The United Nations General Assembly has moved forward with a historic vote to expand the Security Council, with proposals to add permanent seats for African and South American nations.', source: { name: 'BBC News' }, publishedAt: '2026-04-02T06:15:00Z', image: null, url: '#' },
    { title: 'Peace Talks Resume Between Major Regional Powers', description: 'Diplomatic negotiations have resumed after a six-month hiatus, with both sides expressing cautious optimism about reaching a framework agreement by summer.', source: { name: 'Al Jazeera' }, publishedAt: '2026-04-01T22:00:00Z', image: null, url: '#' },
  ],
  politics: [
    { title: 'Bipartisan Infrastructure Bill Clears Key Committee Vote', description: 'A sweeping infrastructure modernization bill has passed through committee with rare bipartisan support, allocating $800B for roads, bridges, broadband, and clean energy grid upgrades over the next decade.', source: { name: 'The Washington Post' }, publishedAt: '2026-04-02T09:00:00Z', image: null, url: '#' },
    { title: 'Supreme Court to Hear Landmark Digital Privacy Case', description: 'The highest court will consider whether law enforcement agencies need warrants to access cloud-stored personal data, in a case that could redefine digital privacy rights for millions.', source: { name: 'NPR' }, publishedAt: '2026-04-02T07:45:00Z', image: null, url: '#' },
    { title: 'Midterm Election Polling Shows Tight Races in Key States', description: 'New polling data reveals razor-thin margins in several swing states, with economic policy and healthcare emerging as the top issues for likely voters.', source: { name: 'FiveThirtyEight' }, publishedAt: '2026-04-01T20:30:00Z', image: null, url: '#' },
  ],
  business: [
    { title: 'Tech Giants Report Record Q1 Earnings Amid AI Boom', description: 'Major technology companies have reported better-than-expected first quarter results, driven largely by enterprise AI adoption and cloud computing demand that continues to accelerate.', source: { name: 'Bloomberg' }, publishedAt: '2026-04-02T10:00:00Z', image: null, url: '#' },
    { title: 'Global Supply Chain Recovery Drives Manufacturing Surge', description: 'Manufacturing output has reached its highest level in three years as supply chain disruptions continue to ease and consumer demand remains robust across major economies.', source: { name: 'Financial Times' }, publishedAt: '2026-04-02T08:00:00Z', image: null, url: '#' },
    { title: 'Startup Funding Rebounds with $45B in Q1 Venture Deals', description: 'Venture capital investment has bounced back strongly, with AI, climate tech, and biotech startups attracting the lion\'s share of a $45 billion first quarter.', source: { name: 'TechCrunch' }, publishedAt: '2026-04-01T18:00:00Z', image: null, url: '#' },
  ],
  technology: [
    { title: 'Next-Generation Chip Architecture Promises 10x Efficiency Gains', description: 'A breakthrough in semiconductor design could dramatically reduce power consumption in data centers and mobile devices, with major manufacturers already licensing the new architecture.', source: { name: 'Ars Technica' }, publishedAt: '2026-04-02T11:00:00Z', image: null, url: '#' },
    { title: 'Open Source AI Model Matches Commercial Rivals in Benchmarks', description: 'A community-developed open-source large language model has achieved performance on par with leading commercial alternatives, sparking debate about the future of AI development.', source: { name: 'The Verge' }, publishedAt: '2026-04-02T09:30:00Z', image: null, url: '#' },
    { title: 'Quantum Computing Startup Demonstrates Error Correction Milestone', description: 'Researchers have achieved a critical threshold in quantum error correction, bringing fault-tolerant quantum computing closer to practical reality.', source: { name: 'MIT Technology Review' }, publishedAt: '2026-04-01T16:00:00Z', image: null, url: '#' },
  ],
  science: [
    { title: 'James Webb Telescope Discovers New Class of Exoplanets', description: 'NASA\'s space telescope has identified a previously unknown category of rocky exoplanets with atmospheric compositions that challenge existing models of planetary formation.', source: { name: 'Nature' }, publishedAt: '2026-04-02T07:00:00Z', image: null, url: '#' },
    { title: 'CRISPR Gene Therapy Shows Promise in Rare Disease Trial', description: 'A Phase 2 clinical trial using CRISPR-based gene editing has shown significant improvement in patients with a rare genetic condition, with minimal side effects reported.', source: { name: 'Science Magazine' }, publishedAt: '2026-04-02T05:30:00Z', image: null, url: '#' },
    { title: 'Deep Ocean Expedition Discovers New Species Near Hydrothermal Vents', description: 'Marine biologists have cataloged over a dozen previously unknown species living near deep-sea vents, expanding our understanding of extremophile life.', source: { name: 'National Geographic' }, publishedAt: '2026-04-01T14:00:00Z', image: null, url: '#' },
  ],
  health: [
    { title: 'WHO Approves Universal Flu Vaccine for Global Distribution', description: 'The World Health Organization has given emergency approval to a next-generation influenza vaccine that provides broad protection against multiple strains, potentially ending seasonal flu pandemics.', source: { name: 'WHO News' }, publishedAt: '2026-04-02T06:00:00Z', image: null, url: '#' },
    { title: 'Study Links Gut Microbiome Diversity to Mental Health Outcomes', description: 'A large-scale longitudinal study has established strong correlations between gut bacteria diversity and reduced rates of depression and anxiety.', source: { name: 'The Lancet' }, publishedAt: '2026-04-01T19:00:00Z', image: null, url: '#' },
    { title: 'AI Diagnostic Tool Detects Early-Stage Cancer with 95% Accuracy', description: 'A new machine learning system trained on millions of medical images can identify early cancer markers with unprecedented precision across multiple cancer types.', source: { name: 'STAT News' }, publishedAt: '2026-04-01T15:00:00Z', image: null, url: '#' },
  ],
  sports: [
    { title: 'Champions League Quarter-Finals Deliver Stunning Upsets', description: 'Two underdogs have advanced to the semi-finals in dramatic fashion, with last-minute goals and penalty shootouts captivating millions of viewers worldwide.', source: { name: 'ESPN' }, publishedAt: '2026-04-02T10:30:00Z', image: null, url: '#' },
    { title: 'NBA Playoff Race Heats Up with Historic Triple-Double Performance', description: 'An extraordinary triple-double performance has shaken up the playoff standings, as teams jockey for position in the final weeks of the regular season.', source: { name: 'The Athletic' }, publishedAt: '2026-04-02T08:00:00Z', image: null, url: '#' },
    { title: 'Olympic Committee Announces New Sports for 2028 Games', description: 'The International Olympic Committee has confirmed the addition of three new sports to the 2028 Summer Olympics program, reflecting evolving global athletic interests.', source: { name: 'Olympic.org' }, publishedAt: '2026-04-01T12:00:00Z', image: null, url: '#' },
  ],
  entertainment: [
    { title: 'Award-Winning Director Announces Ambitious Sci-Fi Trilogy', description: 'The acclaimed filmmaker has revealed plans for a sprawling science fiction trilogy exploring themes of artificial consciousness and human identity, with production starting this fall.', source: { name: 'Variety' }, publishedAt: '2026-04-02T09:00:00Z', image: null, url: '#' },
    { title: 'Streaming Wars Intensify as Platforms Invest in Live Content', description: 'Major streaming services are pivoting toward live events, sports, and interactive content as subscriber growth slows in traditional on-demand programming.', source: { name: 'The Hollywood Reporter' }, publishedAt: '2026-04-02T07:00:00Z', image: null, url: '#' },
    { title: 'Viral Indie Game Breaks Download Records on Launch Day', description: 'A small indie studio\'s debut title has become the fastest-selling game of the year, fueled by social media buzz and innovative gameplay mechanics.', source: { name: 'IGN' }, publishedAt: '2026-04-01T21:00:00Z', image: null, url: '#' },
  ],
  climate: [
    { title: 'Record Investment Pours Into Carbon Capture Technology', description: 'Global investment in carbon capture and storage has reached $25B this quarter, with new projects spanning industrial hubs across three continents.', source: { name: 'Carbon Brief' }, publishedAt: '2026-04-02T08:00:00Z', image: null, url: '#' },
    { title: 'Arctic Ice Sheet Monitoring Reveals Accelerating Melt Patterns', description: 'New satellite data shows Arctic ice loss is proceeding 20% faster than previous models predicted, prompting calls for urgent reassessment of climate timelines.', source: { name: 'NASA Climate' }, publishedAt: '2026-04-01T17:00:00Z', image: null, url: '#' },
    { title: 'Island Nations Form Coalition to Demand Climate Reparations', description: 'A coalition of 40 island nations has united to demand compensation from major industrial economies for climate-related damages already affecting their communities.', source: { name: 'The Guardian' }, publishedAt: '2026-04-01T10:00:00Z', image: null, url: '#' },
  ],
  ai: [
    { title: 'AI Agents Now Handle 30% of Enterprise Customer Service', description: 'A new industry report reveals that AI-powered agents are now resolving nearly a third of all enterprise customer service interactions without human intervention.', source: { name: 'Wired' }, publishedAt: '2026-04-02T10:00:00Z', image: null, url: '#' },
    { title: 'Researchers Develop AI That Can Write and Debug Its Own Code', description: 'A novel AI system can autonomously write, test, and fix software programs, achieving human-level performance on competitive programming benchmarks.', source: { name: 'MIT Technology Review' }, publishedAt: '2026-04-02T07:30:00Z', image: null, url: '#' },
    { title: 'EU Finalizes Comprehensive AI Regulation Framework', description: 'The European Union has published its final AI Act implementation guidelines, establishing the world\'s most detailed regulatory framework for artificial intelligence systems.', source: { name: 'Politico' }, publishedAt: '2026-04-01T14:00:00Z', image: null, url: '#' },
  ],
  crypto: [
    { title: 'Major Central Bank Launches Digital Currency Pilot Program', description: 'One of the world\'s largest central banks has begun a consumer-facing digital currency pilot, marking a significant step toward mainstream CBDC adoption.', source: { name: 'CoinDesk' }, publishedAt: '2026-04-02T09:00:00Z', image: null, url: '#' },
    { title: 'DeFi Platform Surpasses $100B in Total Value Locked', description: 'A leading decentralized finance protocol has crossed the $100 billion TVL threshold, reflecting growing institutional confidence in blockchain-based financial services.', source: { name: 'The Block' }, publishedAt: '2026-04-01T16:00:00Z', image: null, url: '#' },
    { title: 'Crypto Exchange Introduces Zero-Fee Trading for Stablecoins', description: 'In a bid to attract institutional traders, a major cryptocurrency exchange has eliminated transaction fees on all stablecoin trading pairs.', source: { name: 'Bloomberg Crypto' }, publishedAt: '2026-04-01T11:00:00Z', image: null, url: '#' },
  ],
  space: [
    { title: 'SpaceX Starship Completes First Successful Mars Cargo Mission Test', description: 'The Starship heavy-lift vehicle has successfully completed a full-duration test simulating a Mars cargo delivery mission, clearing the way for unmanned supply flights.', source: { name: 'Space.com' }, publishedAt: '2026-04-02T11:00:00Z', image: null, url: '#' },
    { title: 'Lunar Base Alpha Receives First Permanent Research Crew', description: 'A team of six astronauts has begun a year-long rotation at the international lunar research station, conducting experiments in low-gravity manufacturing and resource extraction.', source: { name: 'NASA' }, publishedAt: '2026-04-02T06:00:00Z', image: null, url: '#' },
    { title: 'Private Space Station Welcomes First Commercial Tourists', description: 'The first group of civilian space tourists has arrived at a privately operated orbital station for a 10-day stay, marking a new era in commercial spaceflight.', source: { name: 'Ars Technica' }, publishedAt: '2026-04-01T20:00:00Z', image: null, url: '#' },
  ],
  finance: [
    { title: 'S&P 500 Reaches All-Time High Driven by Tech Rally', description: 'The benchmark index has closed at a record high, propelled by strong earnings from technology and AI-focused companies, while bond yields remain stable.', source: { name: 'CNBC' }, publishedAt: '2026-04-02T10:00:00Z', image: null, url: '#' },
    { title: 'Federal Reserve Signals Rate Cuts Could Begin in Summer', description: 'Fed officials have indicated that declining inflation trends may justify the first interest rate reduction since 2024, sending markets higher.', source: { name: 'Wall Street Journal' }, publishedAt: '2026-04-02T08:30:00Z', image: null, url: '#' },
    { title: 'Fintech Unicorn IPO Raises $4B in Year\'s Largest Offering', description: 'A leading digital banking platform has gone public in the largest IPO of 2026, with shares surging 25% above the offering price on the first day of trading.', source: { name: 'Financial Times' }, publishedAt: '2026-04-01T17:00:00Z', image: null, url: '#' },
  ],
  education: [
    { title: 'Universities Embrace AI Tutoring Systems Across Curricula', description: 'Major universities are rolling out AI-powered personalized tutoring systems that adapt to individual student learning patterns, with early results showing improved outcomes.', source: { name: 'Inside Higher Ed' }, publishedAt: '2026-04-02T07:00:00Z', image: null, url: '#' },
    { title: 'Global Literacy Rates Hit Historic High Thanks to Digital Programs', description: 'New UNESCO data shows global literacy has reached 92%, driven by mobile-first education programs in developing nations.', source: { name: 'UNESCO' }, publishedAt: '2026-04-01T13:00:00Z', image: null, url: '#' },
    { title: 'Coding Bootcamp Graduates Now Outnumber CS Degree Holders Annually', description: 'For the first time, more people completed coding bootcamp programs than earned traditional computer science degrees, reflecting a shift in tech hiring practices.', source: { name: 'EdSurge' }, publishedAt: '2026-04-01T09:00:00Z', image: null, url: '#' },
  ],
  travel: [
    { title: 'Sustainable Tourism Boom Reshapes Global Travel Industry', description: 'Eco-friendly travel options are seeing unprecedented demand, with carbon-neutral hotels and green transportation experiencing triple-digit growth in bookings.', source: { name: 'Condé Nast Traveler' }, publishedAt: '2026-04-02T08:00:00Z', image: null, url: '#' },
    { title: 'High-Speed Rail Network Expansion Connects 15 New Cities', description: 'A major rail infrastructure project has completed its latest phase, linking 15 additional cities to the growing high-speed network and reducing domestic flight demand.', source: { name: 'Lonely Planet' }, publishedAt: '2026-04-01T15:00:00Z', image: null, url: '#' },
    { title: 'Digital Nomad Visas Now Available in 50+ Countries', description: 'The number of countries offering specialized visas for remote workers has surpassed 50, reflecting the permanent shift toward location-independent work.', source: { name: 'Travel + Leisure' }, publishedAt: '2026-04-01T10:00:00Z', image: null, url: '#' },
  ],
  food: [
    { title: 'Lab-Grown Meat Receives Full FDA Approval for Retail Sale', description: 'Cultivated meat products can now be sold in regular grocery stores nationwide after receiving full regulatory clearance, with prices approaching parity with conventional meat.', source: { name: 'Food & Wine' }, publishedAt: '2026-04-02T09:00:00Z', image: null, url: '#' },
    { title: 'Global Restaurant Industry Rebounds to Pre-Pandemic Revenue Levels', description: 'The worldwide restaurant sector has fully recovered, with innovative dining concepts and delivery platforms driving growth beyond 2019 benchmarks.', source: { name: 'Eater' }, publishedAt: '2026-04-01T18:00:00Z', image: null, url: '#' },
    { title: 'New Study Reveals Mediterranean Diet Adds Years to Life Expectancy', description: 'A comprehensive 20-year study confirms that strict adherence to the Mediterranean diet is associated with up to 5 additional years of healthy life expectancy.', source: { name: 'BBC Good Food' }, publishedAt: '2026-04-01T12:00:00Z', image: null, url: '#' },
  ],
  gaming: [
    { title: 'Next-Gen Console Reveal Promises Cloud-Native Gaming Experience', description: 'A major console manufacturer has unveiled its next-generation hardware, featuring seamless cloud integration and AI-enhanced graphics rendering that eliminates loading screens entirely.', source: { name: 'IGN' }, publishedAt: '2026-04-02T10:00:00Z', image: null, url: '#' },
    { title: 'Esports Viewership Surpasses Traditional Sports Among Under-25 Demographic', description: 'New data shows competitive gaming now attracts more young viewers than traditional sports broadcasts, prompting major networks to invest heavily in esports content.', source: { name: 'Kotaku' }, publishedAt: '2026-04-02T07:00:00Z', image: null, url: '#' },
    { title: 'Open-World RPG Sets New Record with 25 Million Day-One Players', description: 'The highly anticipated role-playing game has shattered launch records, with 25 million players logging in within the first 24 hours across all platforms.', source: { name: 'GameSpot' }, publishedAt: '2026-04-01T22:00:00Z', image: null, url: '#' },
  ],
  auto: [
    { title: 'Electric Vehicle Sales Surpass Gas Cars in Major Market for First Time', description: 'For the first time, electric vehicles have outsold internal combustion engine cars in a major automotive market, marking a historic inflection point for the industry.', source: { name: 'Motor Trend' }, publishedAt: '2026-04-02T09:00:00Z', image: null, url: '#' },
    { title: 'Self-Driving Trucks Begin Interstate Commercial Deliveries', description: 'Autonomous heavy trucks have started making regular commercial deliveries on interstate routes, with safety drivers monitoring from remote operations centers.', source: { name: 'The Drive' }, publishedAt: '2026-04-01T16:00:00Z', image: null, url: '#' },
    { title: 'Solid-State Battery Breakthrough Could Double EV Range', description: 'A major automaker has announced a solid-state battery technology that promises to double driving range while cutting charging time to under 10 minutes.', source: { name: 'Car and Driver' }, publishedAt: '2026-04-01T11:00:00Z', image: null, url: '#' },
  ],
  culture: [
    { title: 'Museum Attendance Hits Record High with Immersive AI Exhibits', description: 'Museums worldwide are reporting record visitor numbers, driven by interactive exhibits that use AI and augmented reality to bring art and history to life.', source: { name: 'Artnet News' }, publishedAt: '2026-04-02T08:00:00Z', image: null, url: '#' },
    { title: 'Bestselling Novel Sparks Global Conversation on Digital Identity', description: 'A debut novel exploring the blurred lines between online and offline identity has become a worldwide phenomenon, topping bestseller lists in 30 countries.', source: { name: 'The New Yorker' }, publishedAt: '2026-04-01T14:00:00Z', image: null, url: '#' },
    { title: 'Street Art Festival Transforms City Center into Open-Air Gallery', description: 'An annual street art festival has attracted over 200 artists from 40 countries, turning downtown buildings into a spectacular open-air gallery celebrating urban creativity.', source: { name: 'Dezeen' }, publishedAt: '2026-04-01T09:00:00Z', image: null, url: '#' },
  ],
  energy: [
    { title: 'Solar Power Becomes Cheapest Energy Source in Record Number of Countries', description: 'Solar energy is now the most cost-effective electricity source in over 100 countries, accelerating the global transition away from fossil fuels.', source: { name: 'Bloomberg Green' }, publishedAt: '2026-04-02T07:00:00Z', image: null, url: '#' },
    { title: 'Fusion Energy Startup Achieves Net Energy Gain in Test Reactor', description: 'A private fusion company has reported a sustained net energy gain in its compact tokamak reactor, bringing commercial fusion power a step closer to reality.', source: { name: 'New Scientist' }, publishedAt: '2026-04-01T20:00:00Z', image: null, url: '#' },
    { title: 'Grid-Scale Battery Storage Deployment Doubles Year Over Year', description: 'Utility-scale battery installations have doubled compared to last year, helping grids manage the variability of renewable energy sources more effectively.', source: { name: 'Utility Dive' }, publishedAt: '2026-04-01T13:00:00Z', image: null, url: '#' },
  ],
};

// ========== STATE ==========
let selectedInterests = [];
let activeFilter = 'all';
let allArticles = [];
let bookmarks = [];
let searchQuery = '';
let lastFetchTime = null;

// ========== DOM REFS ==========
const onboardingScreen = document.getElementById('onboarding');
const dashboardScreen = document.getElementById('dashboard');
const interestPillsContainer = document.getElementById('interest-pills');
const getStartedBtn = document.getElementById('get-started-btn');
const selectionCounter = document.getElementById('selection-counter');
const counterNum = document.getElementById('counter-num');
const activeFiltersContainer = document.getElementById('active-filters');
const lastUpdatedEl = document.getElementById('last-updated');
const newsFeed = document.getElementById('news-feed');
const loadingEl = document.getElementById('loading');
const emptyState = document.getElementById('empty-state');
const articleModal = document.getElementById('article-modal');
const modalBody = document.getElementById('modal-body');
const interestsModal = document.getElementById('interests-modal');
const editPillsContainer = document.getElementById('edit-pills');
const editInterestsBtn = document.getElementById('edit-interests-btn');
const saveInterestsBtn = document.getElementById('save-interests-btn');
const searchInput = document.getElementById('search-input');
const searchKbd = document.getElementById('search-kbd');
const refreshBtn = document.getElementById('refresh-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const bookmarksBtn = document.getElementById('bookmarks-btn');
const bookmarkCountEl = document.getElementById('bookmark-count');
const bookmarksPanel = document.getElementById('bookmarks-panel');
const bookmarksList = document.getElementById('bookmarks-list');
const bookmarksEmpty = document.getElementById('bookmarks-empty');

// ========== TOAST ==========
let toastEl = null;
let toastTimeout = null;

function showToast(message) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  clearTimeout(toastTimeout);
  requestAnimationFrame(() => {
    toastEl.classList.add('show');
    toastTimeout = setTimeout(() => toastEl.classList.remove('show'), 2000);
  });
}

// ========== INIT ==========
function init() {
  // Load bookmarks
  const savedBookmarks = localStorage.getItem('newspulse_bookmarks');
  if (savedBookmarks) bookmarks = JSON.parse(savedBookmarks);
  updateBookmarkCount();

  // Load dark mode
  const savedTheme = localStorage.getItem('newspulse_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }

  const saved = localStorage.getItem('newspulse_interests');
  if (saved) {
    selectedInterests = JSON.parse(saved);
    showDashboard();
  } else {
    showOnboarding();
  }
}

// ========== DARK MODE ==========
darkModeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('newspulse_theme', 'light');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('newspulse_theme', 'dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
});

// ========== BOOKMARKS ==========
function isBookmarked(article) {
  return bookmarks.some(b => b.title === article.title);
}

function toggleBookmark(article, e) {
  if (e) e.stopPropagation();
  const idx = bookmarks.findIndex(b => b.title === article.title);
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    showToast('Removed from saved articles');
  } else {
    bookmarks.unshift({ ...article });
    showToast('Article saved');
  }
  localStorage.setItem('newspulse_bookmarks', JSON.stringify(bookmarks));
  updateBookmarkCount();
  renderArticles();
  // Update modal bookmark button if open
  const modalBtn = document.querySelector('.modal-bookmark-btn');
  if (modalBtn) {
    modalBtn.classList.toggle('bookmarked', isBookmarked(article));
    modalBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="${isBookmarked(article) ? 'currentColor' : 'none'}">
        <path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v13l-5-3-5 3V2z" stroke="currentColor" stroke-width="1.5"/>
      </svg>
      ${isBookmarked(article) ? 'Saved' : 'Save'}
    `;
  }
}

function updateBookmarkCount() {
  bookmarkCountEl.textContent = bookmarks.length;
  bookmarkCountEl.classList.toggle('hidden', bookmarks.length === 0);
}

function renderBookmarksPanel() {
  bookmarksList.innerHTML = '';
  bookmarksEmpty.classList.toggle('hidden', bookmarks.length > 0);

  bookmarks.forEach(article => {
    const item = document.createElement('div');
    item.className = 'bookmark-item';

    const topic = TOPICS.find(t => t.id === article._topic);

    item.innerHTML = `
      <div class="bookmark-thumb" style="${article.image ? `background-image:url(${article.image});background-size:cover;` : ''}"></div>
      <div class="bookmark-info">
        <h4>${article.title}</h4>
        <span>${article.source?.name || 'News'}${topic ? ` · ${topic.icon} ${topic.label}` : ''}</span>
      </div>
      <button class="bookmark-remove" title="Remove">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 3l8 8m0-8l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    `;

    item.querySelector('.bookmark-info').addEventListener('click', () => {
      closePanel(bookmarksPanel);
      openArticle(article);
    });

    item.querySelector('.bookmark-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(article);
      renderBookmarksPanel();
    });

    bookmarksList.appendChild(item);
  });
}

bookmarksBtn.addEventListener('click', () => {
  bookmarksPanel.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderBookmarksPanel();
});

bookmarksPanel.querySelector('.panel-backdrop').addEventListener('click', () => closePanel(bookmarksPanel));
bookmarksPanel.querySelector('.panel-close').addEventListener('click', () => closePanel(bookmarksPanel));

function closePanel(panel) {
  panel.classList.add('hidden');
  document.body.style.overflow = '';
}

// ========== SEARCH ==========
let searchDebounce = null;
searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchQuery = searchInput.value.trim().toLowerCase();
    searchKbd.classList.toggle('hidden', searchQuery.length > 0);
    renderArticles();
  }, 200);
});

// "/" keyboard shortcut to focus search
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput && !articleModal.classList.contains('hidden') === false) {
    const isModalOpen = !articleModal.classList.contains('hidden') || !interestsModal.classList.contains('hidden') || !bookmarksPanel.classList.contains('hidden');
    if (!isModalOpen && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      searchInput.focus();
    }
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.blur();
    searchInput.value = '';
    searchQuery = '';
    searchKbd.classList.remove('hidden');
    renderArticles();
  }
});

// ========== REFRESH ==========
refreshBtn.addEventListener('click', () => {
  refreshBtn.classList.add('refresh-spinning');
  fetchNews().then(() => {
    refreshBtn.classList.remove('refresh-spinning');
    showToast('Feed refreshed');
  });
});

function updateLastUpdated() {
  lastFetchTime = new Date();
  lastUpdatedEl.textContent = `Updated ${lastFetchTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

// ========== ONBOARDING ==========
function showOnboarding() {
  onboardingScreen.classList.remove('hidden');
  dashboardScreen.classList.add('hidden');
  renderPills(interestPillsContainer, [], (selected) => {
    selectedInterests = selected;
    const count = selected.length;
    getStartedBtn.disabled = count < 3;
    counterNum.textContent = count;
    selectionCounter.classList.toggle('ready', count >= 3);
  });
}

function renderPills(container, preselected, onChange) {
  container.innerHTML = '';
  const selected = new Set(preselected);

  TOPICS.forEach(topic => {
    const pill = document.createElement('button');
    pill.className = `pill ${selected.has(topic.id) ? 'selected' : ''}`;
    pill.innerHTML = `<span class="pill-icon">${topic.icon}</span>${topic.label}`;
    pill.addEventListener('click', () => {
      if (selected.has(topic.id)) {
        selected.delete(topic.id);
        pill.classList.remove('selected');
      } else {
        selected.add(topic.id);
        pill.classList.add('selected');
      }
      onChange([...selected]);
    });
    container.appendChild(pill);
  });
}

getStartedBtn.addEventListener('click', () => {
  localStorage.setItem('newspulse_interests', JSON.stringify(selectedInterests));
  showDashboard();
});

// ========== DASHBOARD ==========
function showDashboard() {
  onboardingScreen.classList.add('hidden');
  dashboardScreen.classList.remove('hidden');
  renderFilterChips();
  fetchNews();
}

function getArticleCountForTopic(topicId) {
  if (topicId === 'all') return allArticles.length;
  return allArticles.filter(a => a._topic === topicId).length;
}

function renderFilterChips() {
  activeFiltersContainer.innerHTML = '';

  const allChip = createChip('All', '📰', 'all');
  activeFiltersContainer.appendChild(allChip);

  selectedInterests.forEach(id => {
    const topic = TOPICS.find(t => t.id === id);
    if (topic) {
      const chip = createChip(topic.label, topic.icon, topic.id);
      activeFiltersContainer.appendChild(chip);
    }
  });
}

function createChip(label, icon, id) {
  const chip = document.createElement('button');
  const count = getArticleCountForTopic(id);
  chip.className = `filter-chip ${id === activeFilter ? 'active' : ''}`;
  chip.innerHTML = `<span class="chip-icon">${icon}</span>${label}<span class="chip-count">${count}</span>`;
  chip.addEventListener('click', () => {
    activeFilter = id;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderArticles();
  });
  return chip;
}

// ========== FETCH NEWS ==========
async function fetchNews() {
  loadingEl.classList.remove('hidden');
  newsFeed.innerHTML = '';
  emptyState.classList.add('hidden');
  allArticles = [];

  const fetches = selectedInterests.map(async (id) => {
    const topic = TOPICS.find(t => t.id === id);
    if (!topic) return;
    try {
      const r = await fetch(`/api/news?q=${encodeURIComponent(topic.query)}`);
      const d = await r.json();
      if (d.useMock || !d.articles || d.articles.length === 0) {
        // Fall back to mock data for this topic
        addMockForTopic(id);
      } else {
        d.articles.forEach(a => {
          a._topic = id;
          allArticles.push(a);
        });
      }
    } catch {
      addMockForTopic(id);
    }
  });
  await Promise.all(fetches);

  // Sort by date (newest first)
  allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  loadingEl.classList.add('hidden');
  updateLastUpdated();
  renderFilterChips();
  renderArticles();
}

function addMockForTopic(id) {
  if (MOCK_ARTICLES[id]) {
    MOCK_ARTICLES[id].forEach(a => {
      allArticles.push({ ...a, _topic: id });
    });
  }
}

function loadMockData() {
  allArticles = [];
  selectedInterests.forEach(id => {
    if (MOCK_ARTICLES[id]) {
      MOCK_ARTICLES[id].forEach(a => {
        allArticles.push({ ...a, _topic: id });
      });
    }
  });
}

// ========== BALANCED ARTICLE LIST ==========
function getBalancedArticles() {
  // Group articles by topic, sorted by date within each group
  const byTopic = {};
  selectedInterests.forEach(id => { byTopic[id] = []; });
  allArticles.forEach(a => {
    if (byTopic[a._topic]) byTopic[a._topic].push(a);
  });
  Object.values(byTopic).forEach(arr =>
    arr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  );

  const MIN_PER_TOPIC = 2;
  const result = [];
  const used = new Set();

  // Phase 1: guarantee minimum articles per topic (round-robin)
  for (let round = 0; round < MIN_PER_TOPIC; round++) {
    for (const id of selectedInterests) {
      const article = byTopic[id][round];
      if (article && !used.has(article.title)) {
        result.push(article);
        used.add(article.title);
      }
    }
  }

  // Phase 2: fill remaining slots with the most recent unused articles
  const remaining = allArticles
    .filter(a => !used.has(a.title))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  result.push(...remaining);

  return result;
}

// ========== RENDER ARTICLES ==========
function renderArticles() {
  newsFeed.innerHTML = '';

  let filtered = activeFilter === 'all'
    ? getBalancedArticles()
    : allArticles.filter(a => a._topic === activeFilter);

  // Apply search filter
  if (searchQuery) {
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(searchQuery) ||
      (a.description && a.description.toLowerCase().includes(searchQuery)) ||
      (a.source?.name && a.source.name.toLowerCase().includes(searchQuery))
    );
  }

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  // Use hero layout if enough articles and on "all" filter with no search
  const useHero = filtered.length >= 4 && !searchQuery;
  if (useHero) {
    newsFeed.classList.add('has-hero');
  } else {
    newsFeed.classList.remove('has-hero');
  }

  filtered.forEach((article, index) => {
    const card = document.createElement('article');
    const isHero = useHero && index === 0;
    card.className = `news-card${isHero ? ' hero-card' : ''}`;

    const topic = TOPICS.find(t => t.id === article._topic);
    const timeAgo = getTimeAgo(article.publishedAt);
    const saved = isBookmarked(article);

    card.innerHTML = `
      <button class="card-bookmark ${saved ? 'bookmarked' : ''}" title="${saved ? 'Remove bookmark' : 'Save article'}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="${saved ? 'currentColor' : 'none'}">
          <path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v13l-5-3-5 3V2z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </button>
      ${article.image
        ? `<img class="card-image" src="${article.image}" alt="" loading="lazy" onerror="this.outerHTML='<div class=\\'card-image placeholder\\'><svg width=\\'48\\' height=\\'48\\' viewBox=\\'0 0 48 48\\' fill=\\'none\\'><path d=\\'M14 16h20v2H14zm0 6h16v2H14zm0 6h20v2H14z\\' fill=\\'%236366f1\\'/></svg></div>'">`
        : `<div class="card-image placeholder">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M14 16h20v2H14zm0 6h16v2H14zm0 6h20v2H14z" fill="#6366f1"/>
            </svg>
          </div>`
      }
      <div class="card-body">
        <div class="card-meta">
          <span class="card-source">${article.source?.name || 'News'}</span>
          <span class="card-dot"></span>
          <span class="card-time">${timeAgo}</span>
        </div>
        <h3 class="card-title">${article.title}</h3>
        <p class="card-excerpt">${article.description || ''}</p>
        <div class="card-footer">
          ${topic ? `<span class="card-topic">${topic.icon} ${topic.label}</span>` : '<span></span>'}
        </div>
      </div>
    `;

    card.querySelector('.card-bookmark').addEventListener('click', (e) => toggleBookmark(article, e));
    card.addEventListener('click', () => openArticle(article));
    newsFeed.appendChild(card);
  });
}

// ========== ARTICLE MODAL ==========
function openArticle(article) {
  const topic = TOPICS.find(t => t.id === article._topic);
  const timeAgo = getTimeAgo(article.publishedAt);
  const saved = isBookmarked(article);

  modalBody.innerHTML = `
    ${article.image
      ? `<img class="modal-image" src="${article.image}" alt="">`
      : ''
    }
    <div class="modal-article">
      <div class="card-meta">
        <span class="card-source">${article.source?.name || 'News'}</span>
        <span class="card-dot"></span>
        <span class="card-time">${timeAgo}</span>
        ${topic ? `<span class="card-dot"></span><span class="card-topic" style="margin:0">${topic.icon} ${topic.label}</span>` : ''}
      </div>
      <h1>${article.title}</h1>
      <p class="description">${article.description || article.content || 'No additional details available for this story.'}</p>
      <div class="modal-actions">
        ${article.url && article.url !== '#'
          ? `<a href="${article.url}" target="_blank" rel="noopener noreferrer" class="read-more">
              Read Full Article
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m-3-3l3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>`
          : ''
        }
        <button class="modal-bookmark-btn ${saved ? 'bookmarked' : ''}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="${saved ? 'currentColor' : 'none'}">
            <path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v13l-5-3-5 3V2z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          ${saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  `;

  modalBody.querySelector('.modal-bookmark-btn').addEventListener('click', () => toggleBookmark(article));

  articleModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Article modal close
articleModal.querySelector('.modal-backdrop').addEventListener('click', () => closeModal(articleModal));
articleModal.querySelector('.modal-close').addEventListener('click', () => closeModal(articleModal));

// Interests modal close
interestsModal.querySelector('.modal-backdrop').addEventListener('click', () => closeModal(interestsModal));
interestsModal.querySelector('.modal-close').addEventListener('click', () => closeModal(interestsModal));

// ========== EDIT INTERESTS ==========
editInterestsBtn.addEventListener('click', () => {
  interestsModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  let tempSelected = [...selectedInterests];
  renderPills(editPillsContainer, tempSelected, (selected) => {
    tempSelected = selected;
    saveInterestsBtn.disabled = selected.length < 1;
  });

  saveInterestsBtn.onclick = () => {
    selectedInterests = tempSelected;
    localStorage.setItem('newspulse_interests', JSON.stringify(selectedInterests));
    activeFilter = 'all';
    closeModal(interestsModal);
    renderFilterChips();
    fetchNews();
  };
});

// ========== ESC TO CLOSE ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!articleModal.classList.contains('hidden')) closeModal(articleModal);
    else if (!interestsModal.classList.contains('hidden')) closeModal(interestsModal);
    else if (!bookmarksPanel.classList.contains('hidden')) closePanel(bookmarksPanel);
  }
});

// ========== HELPERS ==========
function getTimeAgo(dateString) {
  if (!dateString) return '';
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ========== START ==========
init();
