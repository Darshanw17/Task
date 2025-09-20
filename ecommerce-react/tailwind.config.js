/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Colors
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
        },
        border: {
          light: '#F6F7F8',
          divider: '#FAFAFB',
        },
        star: '#FFC600',
        badge: '#FF4858',
        slider: {
          track: '#2E90E5',
          handle: '#2E90E5',
        },
        footer: {
          bg: '#BCDDFE',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '1.5'],
        'sm': ['14px', '1.5'],
        'base': ['16px', '1.22'],
        'lg': ['18px', '1.22'],
        'xl': ['20px', '1.5'],
        '2xl': ['24px', '1.5'],
        '3xl': ['30px', '1.5'],
      },
      spacing: {
        '15': '3.75rem',
        '17': '4.25rem',
        '38': '9.5rem',
        '55': '13.75rem',
        '88': '22rem',
        '1069': '1069px',
        '1499': '1499px',
      },
      maxWidth: {
        '1499': '1499px',
      },
      letterSpacing: {
        'wide': '2.78%',
        'wider': '3.57%',
      }
    },
  },
  plugins: [],
}
