let bars = document.getElementById("bars");
let close = document.getElementById("close");
let links = document.getElementById("links");

bars.addEventListener("click", () => {
  close.style.display = "block";
  links.style.display = "flex";
  bars.style.display = "none";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  links.style.display = "none";
  bars.style.display = "block";
});
