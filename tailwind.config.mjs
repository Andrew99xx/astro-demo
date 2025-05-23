/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        lg: "1220px",
        md: "900px",
        sm: "600px",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
      roboto: ["Roboto", "serif"],
      montserratbold: ["montserratbold", "serif"],
      montserratextrabold: ["montserratextrabold", "serif"],
      montserratlight: ["montserratlight", "serif"],
      montserratmedium: ["montserratmedium", "serif"],
      montserratregular: ["montserratregular", "serif"],
      montserratsemibold: ["montserratsemibold", "serif"],
      montserratthin: ["montserratthin", "serif"],
      robotoblack: ["robotoblack", "serif"],
      robotobold: ["robotobold", "serif"],
      robotolight: ["robotolight", "serif"],
      robotomedium: ["robotomedium", "serif"],
      robotoregular: ["robotoregular", "serif"],
      robotothin: ["robotothin", "serif"],
      sourcesans:["var(--font-source-sans)"],
      oswald:["Oswald", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#821302", // Custom primary color
        colorefeded: "#efeded",
        color707070: "#707070",
        headingPrimary: "#252525",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { max: "1543px" },
      xl: { max: "1339px" },
      lg: { max: "1199px" },
      md: { max: "899px" },
      sm: { max: "599px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
