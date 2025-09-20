# E-Comm Product List Page

A modern, responsive product list page built from a Figma design with exact color matching and layout precision.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Filters**: Brand, color, and price range filters with real-time updates
- **Product Grid/List View**: Toggle between grid and list view layouts
- **Sorting & Pagination**: Sort products by name, price, or rating with pagination controls
- **Modern UI**: Clean, modern design with smooth animations and hover effects
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Design Specifications

This implementation matches the Figma design exactly with:

### Colors
- Primary Blue: `#40BFFF`
- Background: `#FFFFFF`
- Text Dark: `#22262A`
- Text Secondary: `#262626`
- Background Light: `#F6F7F8`
- Border: `#F6F7F8`
- Star Rating: `#FFC600`
- Price Blue: `#40BFFF`
- Discount Red: `#FB7181`
- Original Price Gray: `#9098B1`

### Typography
- Primary Font: Poppins (400, 500, 600, 700)
- Secondary Font: Proxima Nova (400)

### Layout
- Max Width: 1499px
- Sidebar Width: 355px
- Product Grid: 3 columns (responsive)
- Spacing: Consistent 20px gaps

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Product images from Figma
│   ├── hero-shoe.png
│   ├── product-1-111e6a.png
│   ├── product-2-4d03e6.png
│   ├── product-3-3d822d.png
│   ├── product-4.png
│   ├── product-5.png
│   └── product-6.png
└── README.md           # Project documentation
```

## Components

### Header
- Logo with E-Comm branding
- Navigation menu (HOME, BAG, SNEAKERS, BELT, CONTACT)
- Shopping cart with item count and total

### Hero Section
- Blue background with product showcase
- Call-to-action button
- Hero product image

### Sidebar Filters
- **Brand Filter**: Checkbox list with counts
- **Color Filter**: Interactive color circles
- **Price Range**: Draggable slider with real-time updates
- **Hot Deals**: Category filter with product counts

### Product Grid
- Responsive 3-column grid (2 on tablet, 1 on mobile)
- Product cards with images, ratings, names, and prices
- "HOT" badges for featured products
- Hover effects and smooth transitions

### Product Controls
- Items count display
- Sort dropdown (Name, Price, Rating)
- View toggle (Grid/List)
- Show per page selector

### Pagination
- Numbered pagination with active state
- Hover effects

### Footer
- Company information and links
- Social media icons
- Payment method logos
- Copyright information

## JavaScript Functionality

- **Interactive Filters**: Real-time filtering and sorting
- **Price Slider**: Draggable range selector with live updates
- **View Toggle**: Switch between grid and list layouts
- **Product Interactions**: Hover effects and click handlers
- **Responsive Behavior**: Mobile-friendly interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images from Figma with proper cropping
- Efficient CSS with minimal redundancy
- Vanilla JavaScript for fast loading
- Responsive images with proper sizing

## Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Usage

1. Open `index.html` in a web browser
2. Use the sidebar filters to refine products
3. Toggle between grid and list views
4. Sort products using the dropdown
5. Navigate through pages using pagination

## Customization

The design is easily customizable through CSS variables and the modular structure. Key areas for customization:

- Colors: Update the color variables in `styles.css`
- Typography: Modify font imports and CSS font families
- Layout: Adjust grid columns and spacing
- Content: Update product data in HTML structure

## Figma Integration

This implementation was built directly from the Figma design file:
- Extracted exact colors and measurements
- Downloaded optimized images
- Matched typography and spacing precisely
- Implemented all interactive elements

The result is a pixel-perfect implementation that maintains design fidelity while adding modern web functionality.
