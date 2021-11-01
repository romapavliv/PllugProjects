const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 750;
canvas.height = 500;

const colorPanel = document.querySelector("#colors");

const lineWidth = document.querySelector("#lineWidth");
const mainBtnColor = document.querySelector("#main-bnt-color");
const contextMenuBtnColor = document.querySelector("#context-menu-bnt-color");
const cleanCanvasBtn = document.querySelector("#clean-canvas");

const eraser = document.querySelector("#eraser");
const pencil = document.querySelector("#pencil");
const line = document.querySelector("#line");

let saveImgData;
let isMouseDown = false;

const startCoords = {
  x: 0,
  y: 0,
};

const properties = {
  width: 1,
  mainBtnColor: "#000000",
  contextBtnColor: "#ffffff",
  currentColor: "#000000",
  instrumentType: {
    pencil: true,
    eraser: false,
    line: false,
    circle: false,
    rectangle: false,
  },
};

// mouse events listeners
canvas.addEventListener("mousedown", (event) => {
  startCoords.x = event.offsetX;
  startCoords.y = event.offsetY;
  if (!properties.eraser) {
    properties.currentColor =
      event.button === 2 ? properties.contextBtnColor : properties.mainBtnColor;
  }
  if (properties.instrumentType.line) {
    saveCanvas();
  }

  isMouseDown = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
  context.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
  if (!isMouseDown) {
    return;
  }

  if (properties.instrumentType.pencil) {
    pencilDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.line) {
    restoreCanvas();
    lineDrawing(event.offsetX, event.offsetY);
  }
});

cleanCanvasBtn.addEventListener("click", clearCanvas);

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

line.addEventListener("click", () => {
  properties.width = lineWidth.value;
  changeCurrentInstrument("line");
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
  console.log(properties.instrumentType);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function restoreCanvas() {
  context.putImageData(saveImgData, 0, 0);
}

function saveCanvas() {
  saveImgData = context.getImageData(0, 0, canvas.width, canvas.height);
}

// tools event

function pencilDrawing(x, y) {
  context.lineTo(x, y);
  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.stroke();

  context.fillStyle = properties.currentColor;
  context.arc(x, y, properties.width / 2, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.moveTo(x, y);
}

function lineDrawing(x, y) {
  context.beginPath();

  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.moveTo(startCoords.x, startCoords.y);
  context.lineTo(x, y);
  context.stroke();
}
