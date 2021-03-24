const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", e => {
  const mouseX = e.clientX - e.target.offsetLeft;
  const mouseY = e.clientY - e.target.offsetTop;
  // This is for it to get the value relative to the Image, not the whole page
  console.log(mouseX, mouseY);

  img.style.transformOrigin = `${mouseX}px ${mouseY}px`;
  img.style.transform = "scale(1.5)";
});

container.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center center";
  img.style.transform = "scale(1)";
});