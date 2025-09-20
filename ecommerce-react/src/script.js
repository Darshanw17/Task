// Product data
const products = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-1-111e6a.png",
    isHot: true
  },
  {
    id: 2,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-2-4d03e6.png",
    isHot: true
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-3-3d822d.png",
    isHot: true
  },
  {
    id: 4,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-4.png",
    isHot: true
  },
  {
    id: 5,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-5.png",
    isHot: true
  },
  {
    id: 6,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-6.png",
    isHot: true
  }
];

// Filter data
const brandFilters = [
  { name: "Nike", count: 99, isActive: true },
  { name: "Nike", count: 99, isActive: false },
  { name: "Adidas", count: 99, isActive: false },
  { name: "Siemens", count: 99, isActive: false }
];

const hotDealsFilters = [
  { name: "Nike", count: 2, isActive: false },
  { name: "Airmax", count: 48, isActive: true },
  { name: "Nike", count: 14, isActive: false },
  { name: "Adidas", count: 15, isActive: false },
  { name: "Vans", count: 23, isActive: false },
  { name: "All Stars", count: 1, isActive: false },
  { name: "Adidas", count: 95, isActive: false }
];

const colorOptions = [
  { name: "Blue", value: "color-blue", isSelected: true },
  { name: "Red", value: "color-red", isSelected: false },
  { name: "Black", value: "color-black", isSelected: false },
  { name: "Yellow", value: "color-yellow", isSelected: false },
  { name: "Pink", value: "color-pink", isSelected: false },
  { name: "Gray", value: "color-gray", isSelected: false }
];

// State
let currentViewMode = 'grid';
let currentPage = 1;
let currentSort = 'name';
let currentShow = 12;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const sortSelect = document.getElementById('sort-select');
const showSelect = document.getElementById('show-select');
const itemsCount = document.getElementById('items-count');
const pagination = document.getElementById('pagination');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeProducts();
    initializeControls();
    initializePagination();
});

// Initialize filters
function initializeFilters() {
    // Brand filters
    const brandContainer = document.getElementById('brand-filters');
    brandFilters.forEach((brand, index) => {
        const filterElement = createFilterOption(brand, () => toggleBrandFilter(index));
        brandContainer.appendChild(filterElement);
    });

    // Color filters
    const colorContainer = document.getElementById('color-filters');
    colorOptions.forEach((color, index) => {
        const colorElement = createColorOption(color, () => selectColor(index));
        colorContainer.appendChild(colorElement);
    });

    // Hot deals filters
    const hotDealsContainer = document.getElementById('hot-deals-filters');
    hotDealsFilters.forEach((deal, index) => {
        const filterElement = createFilterOption(deal, () => toggleHotDealFilter(index));
        hotDealsContainer.appendChild(filterElement);
    });
}

// Create filter option element
function createFilterOption(filter, onClick) {
    const label = document.createElement('label');
    label.className = `filter-option ${filter.isActive ? 'active' : ''}`;
    label.addEventListener('click', onClick);
    
    label.innerHTML = `
        <input type="checkbox" ${filter.isActive ? 'checked' : ''} class="hidden">
        <span class="font-proxima text-lg text-text-secondary option-name">${filter.name}</span>
        <span class="font-proxima text-lg ${filter.isActive ? 'text-primary-blue' : 'text-text-dark opacity-35'} option-count">${filter.count}</span>
    `;
    
    return label;
}

// Create color option element
function createColorOption(color, onClick) {
    const div = document.createElement('div');
    div.className = `${color.isSelected ? 'selected' : ''}`;
    div.addEventListener('click', onClick);
    
    div.innerHTML = `
        <div class="color-circle ${color.value} ${color.isSelected ? 'selected' : ''}"></div>
    `;
    
    return div;
}

// Filter functions
function toggleBrandFilter(index) {
    brandFilters[index].isActive = !brandFilters[index].isActive;
    updateFilters();
}

function toggleHotDealFilter(index) {
    hotDealsFilters[index].isActive = !hotDealsFilters[index].isActive;
    updateFilters();
}

function selectColor(index) {
    colorOptions.forEach((color, i) => {
        color.isSelected = i === index;
    });
    updateFilters();
}

function updateFilters() {
    // Re-initialize filters to update UI
    document.getElementById('brand-filters').innerHTML = '';
    document.getElementById('color-filters').innerHTML = '';
    document.getElementById('hot-deals-filters').innerHTML = '';
    initializeFilters();
    
    // Filter products based on current filters
    filterProducts();
}

// Initialize products
function initializeProducts() {
    renderProducts();
}

// Render products
function renderProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productElement = createProductCard(product);
        productGrid.appendChild(productElement);
    });
    
    updateItemsCount();
}

// Create product card
function createProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    
    if (currentViewMode === 'list') {
        div.className += ' flex flex-row p-5 items-center';
        div.innerHTML = `
            <div class="w-50 h-50 flex-shrink-0 mr-8 relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                ${product.isHot ? '<div class="absolute top-0.5 left-0 bg-badge text-white font-proxima text-lg px-3.5 py-1">HOT</div>' : ''}
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <div class="flex gap-1">
                    ${renderStars(product.rating)}
                </div>
                <h3 class="font-poppins font-bold text-lg text-neutral-dark text-left">
                    ${product.name}
                </h3>
                <div class="flex items-center gap-2">
                    <span class="font-poppins font-bold text-lg text-primary-blue tracking-wide">
                        $${product.price.toFixed(2)}
                    </span>
                    <span class="font-poppins text-sm text-neutral-grey line-through tracking-wider">
                        $${product.originalPrice.toFixed(2)}
                    </span>
                    <span class="font-poppins font-bold text-sm text-primary-red tracking-wider">
                        ${product.discount}% Off
                    </span>
                </div>
            </div>
        `;
    } else {
        div.innerHTML = `
            <div class="relative w-full h-72 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                ${product.isHot ? '<div class="absolute top-0.5 left-0 bg-badge text-white font-proxima text-lg px-3.5 py-1">HOT</div>' : ''}
            </div>
            <div class="p-4">
                <div class="flex justify-center gap-1 mb-4">
                    ${renderStars(product.rating)}
                </div>
                <h3 class="font-poppins font-bold text-lg text-neutral-dark text-center mb-4 tracking-wide">
                    ${product.name}
                </h3>
                <div class="flex items-center justify-center gap-2">
                    <span class="font-poppins font-bold text-lg text-primary-blue tracking-wide">
                        $${product.price.toFixed(2)}
                    </span>
                    <span class="font-poppins text-sm text-neutral-grey line-through tracking-wider">
                        $${product.originalPrice.toFixed(2)}
                    </span>
                    <span class="font-poppins font-bold text-sm text-primary-red tracking-wider">
                        ${product.discount}% Off
                    </span>
                </div>
            </div>
        `;
    }
    
    return div;
}

// Render stars
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="text-base ${i <= rating ? 'star-filled' : 'star-empty'}">★</span>`;
    }
    return stars;
}

// Initialize controls
function initializeControls() {
    // View mode buttons
    gridViewBtn.addEventListener('click', () => setViewMode('grid'));
    listViewBtn.addEventListener('click', () => setViewMode('list'));
    
    // Sort select
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        sortProducts();
    });
    
    // Show select
    showSelect.addEventListener('change', (e) => {
        currentShow = parseInt(e.target.value);
        updateItemsCount();
    });
}

// Set view mode
function setViewMode(mode) {
    currentViewMode = mode;
    
    // Update button styles
    if (mode === 'grid') {
        gridViewBtn.className = 'p-4 transition-colors bg-primary-blue';
        gridViewBtn.querySelector('rect').setAttribute('fill', 'white');
        listViewBtn.className = 'p-4 transition-colors bg-gray-200';
        listViewBtn.querySelector('rect').setAttribute('fill', '#C1C8CE');
        
        // Update grid layout
        productGrid.className = 'mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';
    } else {
        listViewBtn.className = 'p-4 transition-colors bg-primary-blue';
        listViewBtn.querySelector('rect').setAttribute('fill', 'white');
        gridViewBtn.className = 'p-4 transition-colors bg-gray-200';
        gridViewBtn.querySelector('rect').setAttribute('fill', '#C1C8CE');
        
        // Update list layout
        productGrid.className = 'mb-10 flex flex-col gap-8';
    }
    
    renderProducts();
}

// Sort products
function sortProducts() {
    products.sort((a, b) => {
        switch(currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price':
                return a.price - b.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    renderProducts();
}

// Filter products
function filterProducts() {
    // This is a simplified version - you would implement actual filtering logic here
    renderProducts();
}

// Update items count
function updateItemsCount() {
    itemsCount.textContent = `${products.length} Items`;
}

// Initialize pagination
function initializePagination() {
    renderPagination();
}

// Render pagination
function renderPagination() {
    pagination.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const button = document.createElement('button');
        button.className = `w-17 h-17 font-proxima text-lg transition-colors ${
            i === currentPage 
                ? 'bg-primary-blue text-white' 
                : 'bg-gray-100 text-text-dark hover:bg-primary-blue hover:text-white'
        }`;
        button.textContent = i;
        button.addEventListener('click', () => setCurrentPage(i));
        pagination.appendChild(button);
    }
}

// Set current page
function setCurrentPage(page) {
    currentPage = page;
    renderPagination();
}

// Price slider functionality
let isDragging = false;
let currentHandle = null;

const sliderTrack = document.querySelector('#slider-range').parentElement;
const sliderRange = document.getElementById('slider-range');
const leftHandle = document.getElementById('slider-left');
const rightHandle = document.getElementById('slider-right');
const priceRangeLabel = document.getElementById('price-range');

if (leftHandle && rightHandle) {
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
        
        let percentage = (mouseX / trackWidth) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        
        if (currentHandle === leftHandle) {
            const rightPercentage = parseFloat(rightHandle.style.left) || 75;
            if (percentage >= rightPercentage - 5) {
                percentage = rightPercentage - 5;
            }
            leftHandle.style.left = percentage + '%';
        } else {
            const leftPercentage = parseFloat(leftHandle.style.left) || 25;
            if (percentage <= leftPercentage + 5) {
                percentage = leftPercentage + 5;
            }
            rightHandle.style.left = percentage + '%';
        }
        
        updateSliderRange();
        updatePriceLabel();
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        currentHandle = null;
    });
}

function updateSliderRange() {
    if (!sliderRange || !leftHandle || !rightHandle) return;
    
    const leftPercentage = parseFloat(leftHandle.style.left) || 25;
    const rightPercentage = parseFloat(rightHandle.style.left) || 75;
    
    sliderRange.style.left = leftPercentage + '%';
    sliderRange.style.width = (rightPercentage - leftPercentage) + '%';
}

function updatePriceLabel() {
    if (!priceRangeLabel) return;
    
    const leftPercentage = parseFloat(leftHandle.style.left) || 25;
    const rightPercentage = parseFloat(rightHandle.style.left) || 75;
    
    const minPrice = 13.99;
    const maxPrice = 25.99;
    const leftPrice = minPrice + (leftPercentage / 100) * (maxPrice - minPrice);
    const rightPrice = minPrice + (rightPercentage / 100) * (maxPrice - minPrice);
    
    priceRangeLabel.textContent = `Range: $${leftPrice.toFixed(2)} - $${rightPrice.toFixed(2)}`;
}