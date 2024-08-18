/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F69A27",
          secondary: "#f6d860",
          warning: "#6C5130",
          "warning-content": "#EC9517",
          accent: "#89488B",
          "accent-content": "#FFFFFF",
          neutral: "#9A9A9A",
          "neutral-content": "#A2A2A2",
          "base-100": "#1E1E1E",
          "base-200": "#323232",
          "base-300": "#464646",
          success: "#2D613A",
          "success-content": "#43D74B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
