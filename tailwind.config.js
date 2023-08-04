/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      maxWidth:{
        'container': "1170px"
      },
      width:{
        'pricing-item':'500px'
      },
      fontFamily: {
        'primary-font': ["'Poppins', sans-serif;"],
        'secondary-font': ["'Roboto', sans-serif;"],
      },
      backgroundImage: {
        // 'bannerbg': "url('./images/banner.jpg')",
        // 'feature-bg': "url('./images/feature.jpg')",
      },
      colors:{
        'text-clr':'#111',
        'content-clr':'#333'
      }
    },
  },
  plugins: [],
}