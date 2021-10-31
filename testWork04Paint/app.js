const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const colorPanel = document.querySelector("#colors");

const lineWidth = document.querySelector("#lineWidth");
const mainBtnColor = document.querySelector("#main-bnt-color");
const contextMenuBtnColor = document.querySelector("#context-menu-bnt-color");
const cleanCanvasBtn = document.querySelector("#clean-canvas");
const eraser = document.querySelector("#eraser");
const pencil = document.querySelector("#pencil");

let isMouseDown = false;
let coordinates = [];

const properties = {
  width: 1,
  mainBtnColor: "#000000",
  contextBtnColor: "#ffffff",
  currentColor: "#000000",
  instrumentType: {
    pencil: true,
    eraser: false,
  },
};

canvas.width = 750;
canvas.height = 500;

canvas.addEventListener("mousedown", (event) => {
  if (properties.instrumentType.pencil) {
    properties.currentColor =
      event.button === 2 ? properties.contextBtnColor : properties.mainBtnColor;
  }

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
    context.strokeStyle = properties.currentColor;
    context.stroke();
  }
});
canvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

lineWidth.addEventListener("change", (event) => {
  properties.width = event.target.value;
});

mainBtnColor.addEventListener("change", (event) => {
  properties.mainBtnColor = event.target.value;
});

contextMenuBtnColor.addEventListener("change", (event) => {
  properties.contextBtnColor = event.target.value;
});

cleanCanvasBtn.addEventListener("click", (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

colorPanel.addEventListener("click", (event) => {
  if (event.target.classList.contains("colors")) return;
  const elBg = event.target.style.backgroundColor;
  properties.mainBtnColor = elBg;
  mainBtnColor.value = rgbToHex(elBg);
});

//!
colorPanel.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("colors")) return;
  const elBg = event.target.style.backgroundColor;
  properties.contextBtnColor = elBg;
  contextMenuBtnColor.value = rgbToHex(elBg);
});
//!

// tools
eraser.addEventListener("click", () => {
  changeCurrentInstrument("eraser");
  properties.currentColor = "#ffffff";
  properties.width = 30;
  canvas.classList.add("eraser-cursor");
});

pencil.addEventListener("click", () => {
  properties.width = lineWidth.value;
  changeCurrentInstrument("pencil");
  canvas.classList.remove("eraser-cursor");
});

function rgbToHex(color) {
  function toHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  //!DEBUG
  color = color
    .replace(/[a-z()\s]/g, "")
    .split(",")
    .map((c) => +c);

  return `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;
}

function changeCurrentInstrument(currentInstrument) {
  for (let key in properties.instrumentType) {
    properties.instrumentType[key] = false;
  }
  properties.instrumentType[currentInstrument] = true;
}
