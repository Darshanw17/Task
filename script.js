// Product List Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initFilters();
    initViewControls();
    initPagination();
    initProductCards();
});

// Filter functionality
function initFilters() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const colorOptions = document.querySelectorAll('.color-option');
    const sliderHandles = document.querySelectorAll('.slider-handle');
    
    // Brand filter options
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        });
    });
    
    // Color filter options
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all color options
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add active class to clicked option
            this.classList.add('selected');
        });
    });
    
    // Price slider functionality
    const sliderTrack = document.querySelector('.slider-track');
    const sliderRange = document.querySelector('.slider-range');
    const leftHandle = document.querySelector('.slider-handle.left');
    const rightHandle = document.querySelector('.slider-handle.right');
    
    if (sliderTrack && leftHandle && rightHandle) {
        let isDragging = false;
        let currentHandle = null;
        
        // Mouse events for slider handles
        [leftHandle, rightHandle].forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                isDragging = true;
                currentHandle = this;
                e.preventDefault();
            });
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging || !currentHandle) return;
            
            const trackRect = sliderTrack.getBoundingClientRect();
            const trackWidth = trackRect.width;
            const trackLeft = trackRect.left;
            const mouseX = e.clientX - trackLeft;
            
            // Calculate percentage position
            let percentage = (mouseX / trackWidth) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            
            if (currentHandle === leftHandle) {
                // Ensure left handle doesn't go past right handle
                const rightPercentage = parseFloat(rightHandle.style.left) || 75;
                if (percentage >= rightPercentage - 5) {
                    percentage = rightPercentage - 5;
                }
                leftHandle.style.left = percentage + '%';
            } else {
                // Ensure right handle doesn't go before left handle
                const leftPercentage = parseFloat(leftHandle.style.left) || 25;
                if (percentage <= leftPercentage + 5) {
                    percentage = leftPercentage + 5;
                }
                rightHandle.style.left = percentage + '%';
            }
            
            // Update range
            updateSliderRange();
            updatePriceLabel();
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
            currentHandle = null;
        });
        
        // Initialize slider position
        leftHandle.style.left = '25%';
        rightHandle.style.left = '75%';
        updateSliderRange();
    }
    
    function updateSliderRange() {
        if (!sliderRange || !leftHandle || !rightHandle) return;
        
        const leftPercentage = parseFloat(leftHandle.style.left) || 25;
        const rightPercentage = parseFloat(rightHandle.style.left) || 75;
        
        sliderRange.style.left = leftPercentage + '%';
        sliderRange.style.width = (rightPercentage - leftPercentage) + '%';
    }
    
    function updatePriceLabel() {
        const priceLabel = document.querySelector('.price-label');
        if (!priceLabel) return;
        
        const leftPercentage = parseFloat(leftHandle.style.left) || 25;
        const rightPercentage = parseFloat(rightHandle.style.left) || 75;
        
        // Calculate prices based on percentage
        const minPrice = 13.99;
        const maxPrice = 25.99;
        const leftPrice = minPrice + (leftPercentage / 100) * (maxPrice - minPrice);
        const rightPrice = minPrice + (rightPercentage / 100) * (maxPrice - minPrice);
        
        priceLabel.textContent = `Range: $${leftPrice.toFixed(2)} - $${rightPrice.toFixed(2)}`;
    }
}

// View controls functionality
function initViewControls() {
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const productGrid = document.querySelector('.product-grid');
    
    if (gridViewBtn && listViewBtn && productGrid) {
        gridViewBtn.addEventListener('click', function() {
            // Remove active class from both buttons
            gridViewBtn.classList.remove('active');
            listViewBtn.classList.remove('active');
            
            // Add active class to grid view button
            gridViewBtn.classList.add('active');
            
            // Switch to grid layout
            productGrid.classList.remove('list-view');
            productGrid.classList.add('grid-view');
        });
        
        listViewBtn.addEventListener('click', function() {
            // Remove active class from both buttons
            gridViewBtn.classList.remove('active');
            listViewBtn.classList.remove('active');
            
            // Add active class to list view button
            listViewBtn.classList.add('active');
            
            // Switch to list layout
            productGrid.classList.remove('grid-view');
            productGrid.classList.add('list-view');
        });
    }
}

// Pagination functionality
function initPagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            pageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically load new products for the selected page
            console.log('Page changed to:', this.textContent);
        });
    });
}

// Product cards functionality
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Add click functionality (could open product detail page)
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            console.log('Product clicked:', productName);
            // Here you would typically navigate to product detail page
        });
    });
}

// Sort functionality
function initSorting() {
    const sortSelect = document.querySelector('.sort-select');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            console.log('Sort by:', sortBy);
            // Here you would typically sort the products
            sortProducts(sortBy);
        });
    }
}

// Show per page functionality
function initShowPerPage() {
    const showSelect = document.querySelector('.show-select');
    
    if (showSelect) {
        showSelect.addEventListener('change', function() {
            const itemsPerPage = this.value;
            console.log('Show per page:', itemsPerPage);
            // Here you would typically update the product grid
            updateProductGrid(itemsPerPage);
        });
    }
}

// Utility functions
function sortProducts(sortBy) {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(productGrid.children);
    
    productCards.sort((a, b) => {
        switch(sortBy) {
            case 'Name':
                const nameA = a.querySelector('.product-name').textContent;
                const nameB = b.querySelector('.product-name').textContent;
                return nameA.localeCompare(nameB);
            
            case 'Price':
                const priceA = parseFloat(a.querySelector('.current-price').textContent.replace('$', '').replace(',', ''));
                const priceB = parseFloat(b.querySelector('.current-price').textContent.replace('$', '').replace(',', ''));
                return priceA - priceB;
            
            case 'Rating':
                const ratingA = a.querySelectorAll('.star.filled').length;
                const ratingB = b.querySelectorAll('.star.filled').length;
                return ratingB - ratingA;
            
            default:
                return 0;
        }
    });
    
    // Clear and re-append sorted products
    productGrid.innerHTML = '';
    productCards.forEach(card => productGrid.appendChild(card));
}

function updateProductGrid(itemsPerPage) {
    // This function would typically make an API call to get the specified number of products
    console.log('Updating grid to show', itemsPerPage, 'items per page');
}

// Initialize additional functionality
document.addEventListener('DOMContentLoaded', function() {
    initSorting();
    initShowPerPage();
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.3s ease';
    });
    
    // Set initial opacity to 0 for loading effect
    img.style.opacity = '0';
});
