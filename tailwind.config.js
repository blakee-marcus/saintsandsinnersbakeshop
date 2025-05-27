export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saint: '#F9F6F0', // Soft ivory / off-white
        sinner: '#1E1B1A', // Deep charcoal / near black
        halo: '#EADFF0', // Lavender-pink glow
        'sinful-red': '#8B1E3F', // Bold burgundy / wine red
        indulgence: '#C08457', // Copper/golden brown accent
        frosting: '#F7D1D5', // Light pink for soft contrast
        goldleaf: '#D4AF37', // Metallic gold 
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
};
