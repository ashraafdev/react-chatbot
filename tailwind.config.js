/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/login-leftside.jpg')",
        'login-gradient': "linear-gradient(#ff4f2f, #1fddff)"
      }
    },
  },
  plugins: [
    // ...
  ],
};
