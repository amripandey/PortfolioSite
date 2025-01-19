/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 5px rgba(255, 0, 255, 1), 0 0 10px rgba(255, 0, 255, 0.7), 0 0 15px rgba(255, 0, 255, 0.5)',
      },
      colors: {
        'cyber-blue': '#00FFFF',
        'cyber-pink': '#FF007F',
        'cyber-purple': '#8A2BE2',
      },
      animation: {
        slideLight: 'slideLight 12s ease-in-out infinite',
      },
      keyframes: {
        slideLight: {
          '0%, 100%': { transform: 'translateY(-100%)' },  // Start at the top
          '50%': { transform: 'translateY(100%)' },        // Move to the bottom
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}