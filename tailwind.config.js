/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./js/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        DanaRegular:["DanaRegular","snas"],
        DanaMedium:["DanaMedium","snas"],
        DanaBold:["DanaBold","snas"],
        Morabbalight:["morabbaLight","sans"],
        MorabbaMedium:["morabbaMedium","sans"],
        MorabbaBold:["MorabbaBold","sans"]
      },
      backgroundImage:{
        "header-image":"url:"
      }
    },
  },
  plugins: [],
}