/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      Jost:["Jost", "sans-serif"],
      Lobster:[ "Lobster", "sans-serif"],
      Lora:["Lora", 'serif'],
      verila:["Varela", "sans-serif"],
      poppins:['Poppins', "sans-serif"],
      segeo:['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"],
      Gill:['Gill Sans', 'Gill Sans MT', "Calibri", 'Trebuchet MS', "sans-serif"],
      Inter:["Inter-Regular", "sans-serif"],
      Nunito:["Nunito-SemiBold", "sans-serif"],
      Avenir:["Avenir LT W01_45 Book1475508", "sans-serif"],
     Louize:["Louize-Regular-205TF"," sans-serif"],
     Lato:["Lato", "sans-serif"],
     italic:[ "italic"]
    },
    

  },
  plugins: [],
};
