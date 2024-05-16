export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "800px",
        Desktop: "1440px",
      },
      
      colors: {
        "light-yellow": "hsl(39, 100%, 56%)",
        "light-red": " hsl(0, 100%, 67%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue-bg" : "hsl(252, 100%, 67%)",
        "light-royal-blue-bg" : "hsl(241, 81%, 54%)",
        "violet-blue-circle" : "hsla(256, 72%, 46%, 1)",
        "persian-blue-circle" : "hsla(241, 72%, 46%, 0)",
        "white" : "hsl(0, 0%, 100%)",
        "pale-blue" : "hsl(221, 100%, 96%)",
        "light-lavender" : "hsl(241, 100%, 89%)",
        "dark-gray-blue" : "hsl(224, 30%, 27%)"

      },
    },
  },
  plugins: [],
};