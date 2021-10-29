const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const colorPanel = document.querySelector("#colors");

const lineWidth = document.querySelector("#lineWidth");
const lineColor = document.querySelector("#lineColor");
const cleanCanvasBtn = document.querySelector("#clean-canvas");

let isMouseDown = false;
let coordinates = [];

const properties = {
  width: 1,
  color: "#000000",
};

canvas.width = 750;
canvas.height = 500;

canvas.addEventListener("mousedown", () => {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
  context.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    coordinates.push([event.offsetX, event.offsetY]);
    context.lineTo(event.offsetX, event.offsetY);
    context.lineWidth = properties.width;
    context.strokeStyle = properties.color;
    context.stroke();
  }
});

lineWidth.addEventListener("change", (event) => {
  properties.width = event.target.value;
});

lineColor.addEventListener("change", (event) => {
  properties.color = event.target.value;
});

cleanCanvasBtn.addEventListener("click", (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

colorPanel.addEventListener("click", (event) => {
  if (event.target.classList.contains("colors")) return;
  const elBg = event.target.style.backgroundColor;
  properties.color = elBg;
  //lineColor.value = rgbToHex(elBg);
});

// function componentToHex(c) {
//   var hex = c.toString(16);

//   return hex.length == 1 ? "0" + hex : hex;
// }
// function rgbToHex(color) {

//   //return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
