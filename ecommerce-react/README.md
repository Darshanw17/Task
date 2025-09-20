# E-Commerce Product List - React + Tailwind CSS

A modern, responsive product list page built with React.js, TypeScript, and Tailwind CSS, converted from the original Figma design.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Tailwind CSS** with custom design system matching Figma colors
- **Responsive Design** - Mobile-first approach with breakpoints
- **Interactive Components** - Filters, sorting, view toggle, pagination
- **Modern UI/UX** - Smooth animations and hover effects
- **Accessibility** - WCAG compliant with ARIA labels

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and logo
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Sidebar.tsx         # Filter sidebar
│   ├── ProductGrid.tsx     # Product grid and controls
│   ├── ProductCard.tsx     # Individual product card
│   └── Footer.tsx          # Footer with links and social
├── data/
│   └── products.ts         # Sample data and filters
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main application component
├── index.css               # Tailwind imports and custom styles
└── main.tsx                # Application entry point
```

## 🎨 Design System

### Colors (from Figma)
```typescript
primary: {
  blue: '#40BFFF',
  red: '#FB7181',
},
neutral: {
  dark: '#223263',
  grey: '#9098B1',
},
background: {
  white: '#FFFFFF',
  light: '#F6F7F8',
},
text: {
  dark: '#22262A',
  secondary: '#262626',
}
```

### Typography
- **Primary**: Poppins (400, 500, 600, 700)
- **Secondary**: Proxima Nova (400)

### Layout
- **Max Width**: 1499px
- **Sidebar**: 355px (22rem)
- **Grid**: 3 columns (responsive)
- **Spacing**: Consistent 20px gaps

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column grid
- **Desktop**: `> 1024px` - Three column grid

## 🧩 Components

### Header
- Logo with E-Comm branding
- Navigation menu
- Shopping cart with item count

### Hero Section
- Blue background with product showcase
- Call-to-action button
- Responsive layout

### Sidebar Filters
- **Brand Filter**: Checkbox list with counts
- **Color Filter**: Interactive color circles
- **Price Range**: Visual slider (ready for implementation)
- **Hot Deals**: Category filter with counts

### Product Grid
- Responsive grid/list view toggle
- Sort by name, price, rating
- Pagination controls
- Product cards with ratings and pricing

### Footer
- Company information
- Link sections
- Social media icons
- Payment method indicators

## 🔧 Customization

### Adding New Products
Edit `src/data/products.ts`:
```typescript
export const products: Product[] = [
  {
    id: 1,
    name: "Product Name",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4,
    image: "/images/product.jpg",
    isHot: true
  }
];
```

### Modifying Colors
Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        blue: '#YOUR_COLOR',
      }
    }
  }
}
```

### Adding New Filters
1. Update `types/index.ts` with new filter interface
2. Add filter data in `src/data/products.ts`
3. Implement filter logic in `Sidebar.tsx`

## 🎯 Key Features

### State Management
- React hooks for local state
- Filter state management
- View mode toggle
- Pagination state

### Interactive Elements
- Clickable filter options
- Sortable product grid
- Responsive view toggle
- Pagination navigation

### Performance
- Optimized images
- Efficient re-renders
- Lazy loading ready
- Build optimization

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository.