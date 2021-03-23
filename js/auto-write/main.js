const text = "This is how you auto-write it!";
let index = 0;

function autoWriteText() {
  document.getElementsByTagName("h1")[0].innerHTML =
    text.slice(0, index);

  index++;
  console.log(index);
  if (index > text.length) index = 0;
}

setInterval(autoWriteText, 150);
// For typewriter effect:
setInterval(autoWriteText, 250);
// To write it only once, replace it with setTimeout