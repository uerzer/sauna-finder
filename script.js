// SaunaFinder - Directory Filtering & Search

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const stateFilter = document.getElementById('state-filter');
    const businessCards = document.querySelectorAll('.business-card');

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', filterBusinesses);
    }

    // State filter
    if (stateFilter) {
        stateFilter.addEventListener('change', filterBusinesses);
    }

    function filterBusinesses() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedState = stateFilter ? stateFilter.value : '';

        businessCards.forEach(card => {
            const name = card.querySelector('.business-name').textContent.toLowerCase();
            const location = card.querySelector('.business-location').textContent.toLowerCase();
            const category = card.querySelector('.category-badge').textContent.toLowerCase();
            const state = card.dataset.state || '';

            const matchesSearch = name.includes(searchTerm) || 
                                 location.includes(searchTerm) || 
                                 category.includes(searchTerm);
            const matchesState = !selectedState || state === selectedState;

            if (matchesSearch && matchesState) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
