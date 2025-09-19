// Handle search functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    if (searchInput.value.trim()) {
        alert('Search feature would search for: ' + searchInput.value);
    }
});

// Handle Enter key in search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
        alert('Search feature would search for: ' + searchInput.value);
    }
});

// Add hover effect to product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
