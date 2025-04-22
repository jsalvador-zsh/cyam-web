/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        colors: {
          cyam: "#31A4EA", 
        },
      },
    },
    plugins: [],
  };
  