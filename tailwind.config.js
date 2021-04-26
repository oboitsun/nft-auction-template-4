module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        vt: ['VT323', 'monospaced'],
        barlow: ['Barlow', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        lghtbl: '#6CE3FF',
        gold: '#F9D885',
        btnred: '#DD406D',
        turq: '#61E1FF',
      },
    },
  },
  variants: {
    scrollbar: ['rounded', 'border'],
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
