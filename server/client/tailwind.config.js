// tailwind.config.js
// tailwind.config.js

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // or wherever your source files are
  ],
  theme: {
    extend: {
      animation: {
        'bubble': 'bubble-animation 4s linear infinite',
        'fade': 'fade 5s ease-in-out infinite',
      },
      keyframes: {
        'bubble-animation': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(1.5)', opacity: '0' },
        },
        'fade': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

