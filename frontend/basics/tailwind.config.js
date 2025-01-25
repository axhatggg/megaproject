/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/bgwp.jpg')",
        'custom-image2': "url(/bgwp2.jpg)",
        'custom-image3': "url(/bgwp3.jpg)",
        "custom-image4": "url(/bgwp5.jpg)",
        "custom-image5": "url(/bgwp6.jpg)",
        "custom-image6": "url(/bgwp7.jpg)",
        "custom-image7": "url(/bgwp8.jpg)",
      },
    },
  },
  plugins: [],
}