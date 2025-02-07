/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customBlue: '#003a73',
        cyan: '#21a7d0',
        indigo: '#203154',

      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'news-image': "url('https://keenitsolutions.com/products/html/educavo/assets/images/bg/bg2.jpg')",
        'news-letter': "url('https://keenitsolutions.com/products/html/educavo/assets/images/bg/newsletter-bg.jpg')",
        'bg-footer-img': "url('https://keenitsolutions.com/products/html/educavo/assets/images/bg/footer-bg.png')",
        'home-banner': "url('https://media.istockphoto.com/id/1040926086/photo/homeless-black-eyed-bearded-face-with-bruise-bad-life-style-lifestyle-concept-close-up-photo.jpg?s=612x612&w=0&k=20&c=19nMs6ls9gKf7koQXX20mYaa_FcZMnZ7IiA-WS6Fvls=')"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
}

