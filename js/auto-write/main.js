const text = "This is how you auto-write it! 🏐 🏈";
let index = 0;

function autoWriteText() {
  document.getElementsByTagName("h1")[0].innerHTML =
    text.slice(0, index);

  index++;
  if (index > text.length) index = 0;
}

setInterval(autoWriteText, 150);
// For typewriter effect:
setInterval(autoWriteText, 250);
// To write it only once, replace it with setTimeout
// source: https://www.youtube.com/watch?v=8GPPJpiLqHk&list=WL&index=32&t=3271s&ab_channel=FlorinPop
console.log(`%c Your text:%c Other text`, `font-weight: bold; font-size: 16px`, `font-weight: bold; font-size: 16px; color: green`)