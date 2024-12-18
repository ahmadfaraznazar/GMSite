/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layout/Footer.js", // Existing file
    "./src/pages/contactus/form1.js",    // Add all files in the `pages` folder and its subfolders
    "./src/pages/contactus/inputbox.js", // Add all files in the `components` folder
    "../src/pages/contactus/textareabox.js",        // Add any HTML files in the `src` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

