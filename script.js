





const apiKey = 'jUgau_brW0_QxyuXtQN4AIOSKU_NnmHYe0DwcqLwyyI';
const searchForm = document.querySelector('.search-box-button');
const searchInput = document.querySelector('.search-box');
const searchResults = document.querySelector('.search-results');
const autocompleteContainer = document.querySelector('.autocomplete-container');
let selectedSuggestionIndex = -1;

searchForm.addEventListener('click', function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    if (searchTerm) {
        searchImages(searchTerm);
        autocompleteContainer.innerHTML = '';
    }
});

function searchImages(query) {
    searchResults.innerHTML = '';
    const targetImageCount = 100;
    const imagesPerPage = 30;
    let page = 1;

    function fetchImages() {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=${imagesPerPage}&page=${page}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(result => {
                    const imgElement = document.createElement('img');
                    imgElement.src = result.urls.regular;
                    imgElement.alt = result.alt_description;
                    imgElement.classList.add('small-image');
                    searchResults.appendChild(imgElement);
                });

                if (searchResults.childElementCount < targetImageCount && data.total_pages > page) {
                    page++;
                    fetchImages();
                }
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    fetchImages();
}

const availableKeywords = [
    'nature', 'landscape', 'mountains', 'beach', 'ocean', 'sky', 'sunset', 'sunrise',
    'city', 'architecture', 'urban', 'street', 'buildings', 'night', 'lights',
    'animals', 'wildlife', 'pets', 'dogs', 'cats', 'birds', 'insects', 'aquatic life',
    'food', 'restaurant', 'cooking', 'vegetarian', 'vegan', 'dessert', 'coffee', 'tea', 'fruits', 'vegetables',
    'travel', 'vacation', 'holiday', 'adventure', 'explore', 'maps', 'camping', 'road trip', 'journey', 'tourism',
    'technology', 'computer', 'coding', 'programming', 'gadgets', 'smartphone', 'robotics', 'virtual reality', 'augmented reality',
    'music', 'instruments', 'concert', 'dance', 'festival', 'art', 'painting', 'sculpture', 'performing arts', 'musicians',
    'sports', 'soccer', 'basketball', 'football', 'tennis', 'fitness', 'exercise', 'outdoor sports', 'athletes', 'competition',
    'fashion', 'clothing', 'style', 'trend', 'accessories', 'jewelry', 'makeup', 'hairstyles', 'designer wear', 'runway',
    'vintage', 'retro', 'nostalgia', 'history', 'culture', 'tradition', 'heritage', 'antiques', 'old fashioned', 'historic',
    'science', 'lab', 'chemistry', 'biology', 'astronomy', 'physics', 'research', 'scientists', 'laboratory', 'discoveries',
    'health', 'wellness', 'medical', 'exercise', 'nutrition', 'mindfulness', 'yoga', 'mental health', 'fitness routines', 'healthy living',
    'business', 'finance', 'workplace', 'entrepreneurship', 'office', 'meeting', 'success', 'startups', 'corporate', 'strategy',
    'education', 'school', 'learning', 'books', 'knowledge', 'students', 'classroom', 'online learning', 'academic', 'teaching',
    'family', 'parenting', 'children', 'home', 'love', 'relationship', 'celebration', 'togetherness', 'family time', 'happiness',
    'movies', 'cinema', 'film', 'actors', 'director', 'movie night', 'popcorn', 'film festivals', 'blockbusters', 'independent films',
    'books', 'reading', 'literature', 'library', 'writing', 'poetry', 'authors', 'bookworms', 'book club', 'literary events',
    'gaming', 'videogames', 'gamer', 'esports', 'console', 'pc games', 'streaming', 'virtual gaming', 'board games', 'gaming community',
    'weather', 'seasons', 'rain', 'snow', 'spring', 'summer', 'autumn', 'winter', 'sunshine', 'cloudy days', 'stormy weather',
    'vehicles', 'cars', 'motorcycles', 'bicycles', 'trains', 'planes', 'boats', 'luxury vehicles', 'transportation', 'automobiles',
    'fitness', 'exercise', 'gym', 'running', 'yoga', 'healthy living', 'wellness', 'workout routines', 'sports activities', 'outdoor fitness',
    'festivals', 'carnival', 'parade', 'fireworks', 'celebration', 'tradition', 'culture', 'street festivals', 'cultural events', 'community celebrations',
    'artificial intelligence', 'machine learning', 'data science', 'automation', 'robots', 'future', 'innovation', 'technology trends', 'emerging tech', 'tech industry',
    'space', 'astronomy', 'galaxy', 'planets', 'stars', 'cosmos', 'space exploration', 'NASA', 'astronauts', 'alien worlds', 'celestial events',
    'environment', 'sustainability', 'green energy', 'climate change', 'ecology', 'conservation', 'renewable resources', 'earth day', 'environmental awareness', 'eco-friendly',
    'wilderness', 'national parks', 'hiking', 'outdoor adventures', 'exploration', 'scenic views', 'natural wonders', 'breathtaking landscapes', 'nature conservation', 'ecosystems',
    'cybersecurity', 'internet', 'networking', 'programming languages', 'software development', 'app development', 'web design', 'coding bootcamp', 'tech startups', 'digital innovation',
    'artificial intelligence', 'machine learning', 'data science', 'automation', 'robots', 'future', 'innovation', 'technology trends', 'emerging tech', 'tech industry', 'digital transformation',
    'blockchain', 'cryptocurrency', 'decentralized finance', 'bitcoin', 'ethereum', 'smart contracts', 'cryptocurrency trading', 'crypto wallets', 'NFTs', 'blockchain applications', 'crypto community',
    'blockchain', 'cryptocurrency', 'decentralized finance', 'bitcoin', 'ethereum', 'smart contracts', 'cryptocurrency trading', 'crypto wallets', 'NFTs', 'blockchain applications', 'crypto community',
    'machine learning', 'data science', 'deep learning', 'neural networks', 'computer vision', 'natural language processing', 'AI applications', 'AI ethics', 'ethical AI', 'responsible AI', 'AI in healthcare',
    'virtual reality', 'augmented reality', 'mixed reality', 'VR gaming', 'AR applications', 'immersive experiences', 'virtual tours', 'AR glasses', 'VR development', 'XR technology', 'metaverse',
    'space exploration', 'NASA', 'astronomy', 'cosmology', 'rocket launches', 'moon landing', 'Mars missions', 'space telescopes', 'space tourism', 'exoplanets', 'alien life', 'astrobiology',
    'green energy', 'renewable resources', 'solar power', 'wind energy', 'hydropower', 'geothermal energy', 'clean energy solutions', 'sustainable living', 'environmental conservation', 'carbon footprint', 'climate action',
    'cybersecurity', 'internet security', 'data privacy', 'cyber threats', 'hacking', 'encryption', 'cyber defense', 'online safety', 'cybersecurity best practices', 'ethical hacking', 'information security',
    'health and wellness', 'mental health', 'mindfulness', 'meditation', 'stress relief', 'self-care', 'healthy eating', 'fitness routines', 'exercise motivation', 'wellness tips', 'holistic health',
    'entrepreneurship', 'startup culture', 'business innovation', 'entrepreneurial mindset', 'business growth', 'success stories', 'small business', 'venture capital', 'business strategy', 'innovative ideas',


    'education technology', 'e-learning', 'online courses', 'distance learning', 'educational apps', 'edutainment', 'learning resources', 'digital classrooms', 'future of education', 'education trends', 'STEM education',
    'family life', 'parenting tips', 'family activities', 'parenting challenges', 'raising children', 'family bonding', 'quality time', 'family traditions', 'parenting hacks', 'modern parenting', 'work-life balance',
    'movies and TV shows', 'film industry', 'cinematic experiences', 'movie recommendations', 'TV series', 'film genres', 'documentaries', 'award-winning films', 'film festivals', 'behind the scenes', 'movie magic',
    'literature and books', 'reading recommendations', 'book genres', 'bestselling authors', 'book clubs', 'literary events', 'bookworm culture', 'classic literature', 'contemporary fiction', 'non-fiction books', 'literary quotes',
    'gaming culture', 'video game genres', 'gaming consoles', 'PC gaming', 'mobile gaming', 'online multiplayer', 'esports tournaments', 'gaming communities', 'game reviews', 'game development', 'retro gaming',
    'weather conditions', 'climate zones', 'natural disasters', 'extreme weather', 'weather photography', 'seasonal changes', 'weather patterns', 'weather forecasting', 'storm chasing', 'meteorology', 'weather phenomena',
    'vehicles and transportation', 'car enthusiasts', 'motorcycle culture', 'bicycle adventures', 'public transportation', 'cars of the future', 'aviation', 'marine transport', 'adventure vehicles', 'vehicle maintenance', 'alternative transportation',
    'fitness and exercise', 'workout routines', 'healthy living', 'nutrition tips', 'exercise motivation', 'fitness challenges', 'outdoor fitness', 'group workouts', 'mind-body wellness', 'fitness gadgets', 'athletic achievements',
    'festivals and celebrations', 'cultural festivals', 'music festivals', 'food festivals', 'holiday traditions', 'parades', 'fireworks displays', 'carnivals', 'community celebrations', 'festive decorations', 'cultural heritage',
    'artificial intelligence and ethics', 'ethical AI development', 'AI impact on society', 'responsible AI practices', 'AI in healthcare', 'AI and privacy concerns', 'AI and bias', 'future of AI', 'human-AI collaboration', 'AI and creativity',
    'space and astronomy', 'cosmic wonders', 'space exploration missions', 'celestial events', 'astronomical discoveries', 'NASA missions', 'space telescopes', 'space technology', 'astronomy photography', 'universe mysteries', 'extraterrestrial life',
    'environmental sustainability', 'green living', 'ecofriendly practices', 'sustainable energy solutions', 'conservation efforts', 'wildlife preservation', 'climate change awareness', 'reducing carbon footprint', 'environmental activism', 'sustainable fashion',
    'blockchain and cryptocurrency', 'decentralized finance', 'smart contracts', 'cryptocurrency trading', 'blockchain applications', 'crypto market trends', 'blockchain security', 'NFTs', 'blockchain innovation', 'cryptocurrency regulations', 'crypto influencers',
    'machine learning and data science', 'AI algorithms', 'big data analytics', 'data visualization', 'predictive modeling', 'data-driven decision-making', 'machine learning applications', 'data science tools', 'future of data science', 'data science careers',
    'virtual reality and augmented reality', 'immersive technologies', 'VR gaming experiences', 'AR applications', 'virtual education', 'VR in healthcare', 'AR for business', 'virtual travel experiences', 'XR development', 'metaverse exploration', 'future of mixed reality',
    'space exploration and astronomy', 'rocket launches', 'moon missions', 'Mars exploration', 'space agencies', 'astronaut experiences', 'cosmic phenomena', 'extraterrestrial intelligence', 'space tourism', 'celestial wonders', 'space discoveries', 'colonizing other planets',
    'green energy and climate action', 'sustainable living', 'renewable energy sources', 'clean energy solutions', 'climate change mitigation', 'environmental conservation', 'carbon offsetting', 'green technology', 'eco-friendly innovations', 'sustainability initiatives',
    'cybersecurity and data privacy', 'online security', 'cyber threats', 'ethical hacking', 'cybersecurity best practices', 'encryption technologies', 'secure coding', 'privacy laws', 'protecting digital identities', 'cybersecurity challenges', 'data breaches',
    'health and wellness practices', 'holistic health', 'mental well-being', 'mindfulness and meditation', 'healthy eating habits', 'fitness routines', 'self-care practices', 'wellness retreats', 'alternative therapies', 'stress management', 'positive lifestyle choices',
    'entrepreneurship and business innovation', 'startup culture', 'innovative business models', 'entrepreneurial success stories', 'business growth strategies', 'digital transformation in business', 'leadership skills', 'entrepreneurial mindset', 'small business tips', 'innovative product launches',
    'education technology and online learning', 'e-learning platforms', 'digital classrooms', 'educational apps', 'online courses', 'distance learning opportunities', 'innovations in education', 'student engagement tools', 'future of education technology', 'STEM education initiatives', 'adaptive learning technologies',
    'family life and parenting', 'parenting tips and advice', 'family bonding activities', 'raising happy and healthy children', 'work-life balance for parents', 'quality family time', 'parenting challenges and solutions', 'modern parenting trends', 'positive family relationships', 'family traditions and celebrations',
    'movies and TV shows', 'cinematic experiences', 'film genres and recommendations', 'TV series binge-watching', 'celebrity interviews', 'movie industry updates', 'film festivals and awards', 'behind-the-scenes insights', 'entertainment news', 'movie reviews and ratings', 'TV show fandoms',
    'literature and books', 'reading recommendations', 'book genres and reviews', 'literary quotes', 'book club discussions', 'bestselling authors', 'library visits', 'literary events and festivals', 'writing inspiration', 'classic literature appreciation', 'contemporary fiction exploration',
    'gaming culture and trends', 'video game genres', 'gaming platforms',];

function initializeAutocomplete() {
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm) {
            const matchingKeywords = availableKeywords.filter(keyword =>
                keyword.toLowerCase().includes(searchTerm)
            );

            displayAutocomplete(matchingKeywords);
        } else {
            autocompleteContainer.innerHTML = '';
        }

        selectedSuggestionIndex = -1;
        updateBorderRadius();
    });

    document.addEventListener('click', function (event) {
        const isClickInsideSearchBox = searchInput.contains(event.target);
        const isClickInsideAutocomplete = autocompleteContainer.contains(event.target);

        if (!isClickInsideSearchBox && !isClickInsideAutocomplete) {
            autocompleteContainer.innerHTML = '';
        }
    });

    autocompleteContainer.addEventListener('click', function (event) {
        const clickedSuggestion = event.target.textContent;
        searchInput.value = clickedSuggestion;
        autocompleteContainer.innerHTML = '';
    });

    searchInput.addEventListener('keydown', function (event) {
        const totalSuggestions = autocompleteContainer.children.length;

        if (event.key === 'ArrowUp' && selectedSuggestionIndex > 0) {
            selectedSuggestionIndex--;
        } else if (event.key === 'ArrowDown' && selectedSuggestionIndex < totalSuggestions - 1) {
            selectedSuggestionIndex++;
        } else if (event.key === 'Enter' && selectedSuggestionIndex !== -1) {
            const clickedSuggestion = autocompleteContainer.children[selectedSuggestionIndex].textContent;
            searchInput.value = clickedSuggestion;
            autocompleteContainer.innerHTML = '';
        }

        updateSelectedSuggestion();
    });
}

function displayAutocomplete(keywords) {
    autocompleteContainer.innerHTML = '';

    keywords.forEach((keyword, index) => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = keyword;
        suggestionElement.addEventListener('mouseenter', function () {
            selectedSuggestionIndex = index;
            updateSelectedSuggestion();
        });
        autocompleteContainer.appendChild(suggestionElement);
    });

    selectedSuggestionIndex = -1;
    updateBorderRadius();
}

function updateSelectedSuggestion() {
    const suggestions = autocompleteContainer.children;

    for (let i = 0; i < suggestions.length; i++) {
        suggestions[i].classList.remove('selected');
    }

    if (selectedSuggestionIndex !== -1) {
        suggestions[selectedSuggestionIndex].classList.add('selected');
    }
}

function updateBorderRadius() {
    const hasInput = searchInput.value.trim() !== '';

    if (hasInput) {
        autocompleteContainer.style.borderTopLeftRadius = '0px';
        autocompleteContainer.style.borderTopRightRadius = '0px';
        autocompleteContainer.style.borderBottomLeftRadius = '8px';
        autocompleteContainer.style.borderBottomRightRadius = '8px';
        searchInput.style.borderBottomLeftRadius = '0px';
        searchInput.style.borderBottomRightRadius = '0px';
        searchInput.style.outline = 'none';
        searchInput.style.borderBottom = 'none';
    } else {
        autocompleteContainer.style.borderRadius = '8px';
    }
}

document.addEventListener('DOMContentLoaded', initializeAutocomplete);

