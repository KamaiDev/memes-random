const { images } = require("./images.json")

const random = Math.floor(Math.random() * images.length)
const randomMeme = images[random];

console.log(randomMeme)