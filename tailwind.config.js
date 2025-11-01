module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f6f0',
        gold: {
          50: '#fffaf1',
          DEFAULT: '#d4af37',
          700: '#b5851f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,24,40,0.06)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};
