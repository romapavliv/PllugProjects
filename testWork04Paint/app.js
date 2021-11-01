const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 750;
canvas.height = 500;

const colorPanel = document.querySelector("#colors");

const lineWidth = document.querySelector("#lineWidth");
const mainBtnColor = document.querySelector("#main-bnt-color");
const contextMenuBtnColor = document.querySelector("#context-menu-bnt-color");
const cleanCanvasBtn = document.querySelector("#clean-canvas");

const pencil = document.querySelector("#pencil");
const eraser = document.querySelector("#eraser");
const line = document.querySelector("#line");
const circle = document.querySelector("#circle");
const rectangle = document.querySelector("#rectangle");
const rightTriangle = document.querySelector("#right-triangle");
const star = document.querySelector("#star");
const cloudlet = document.querySelector("#cloudlet");

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
    rightTriangle: false,
    star: false,
    cloudlet: false,
  },
};

// mouse events listeners
canvas.addEventListener("mousedown", (event) => {
  startCoords.x = event.offsetX;
  startCoords.y = event.offsetY;
  saveCanvas();
  if (!properties.eraser) {
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
  if (!isMouseDown) {
    return;
  }

  if (properties.instrumentType.pencil) {
    pencilDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.eraser) {
    eraserDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.line) {
    restoreCanvas();
    lineDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.circle) {
    restoreCanvas();
    circleDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.rectangle) {
    restoreCanvas();
    rectangleDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.rightTriangle) {
    restoreCanvas();
    rightTriangleDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.star) {
    restoreCanvas();
    starDrawing(event.offsetX, event.offsetY);
  }
  if (properties.instrumentType.cloudlet) {
    restoreCanvas();
    cloudletDrawing(event.offsetX, event.offsetY);
  }
});

cleanCanvasBtn.addEventListener("click", clearCanvas);

// properties listeners
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

// get color for mouse buttons
colorPanel.addEventListener("click", (event) => {
  if (event.target.classList.contains("colors")) return;
  const elBg = event.target.style.backgroundColor;
  properties.mainBtnColor = elBg;
  mainBtnColor.value = rgbToHex(elBg);
});

colorPanel.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("colors")) return;
  const elBg = event.target.style.backgroundColor;
  properties.contextBtnColor = elBg;
  contextMenuBtnColor.value = rgbToHex(elBg);
});

// tool selection
eraser.addEventListener("click", () => {
  changeCurrentInstrument("eraser");
  //canvas.classList.add("eraser-cursor");
});

pencil.addEventListener("click", () => {
  properties.width = lineWidth.value;
  changeCurrentInstrument("pencil");
  //canvas.classList.remove("eraser-cursor");
});

line.addEventListener("click", () => {
  changeCurrentInstrument("line");
});

circle.addEventListener("click", () => {
  changeCurrentInstrument("circle");
});

rectangle.addEventListener("click", () => {
  changeCurrentInstrument("rectangle");
});

rightTriangle.addEventListener("click", () => {
  changeCurrentInstrument("rightTriangle");
});

star.addEventListener("click", () => {
  changeCurrentInstrument("star");
});

cloudlet.addEventListener("click", () => {
  changeCurrentInstrument("cloudlet");
});

// other functions
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

function eraserDrawing(x, y) {
  context.lineTo(x, y);
  context.lineWidth = 30;
  context.strokeStyle = "#ffffff";
  context.stroke();
}

function lineDrawing(x, y) {
  context.beginPath();

  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.moveTo(startCoords.x, startCoords.y);
  context.lineTo(x, y);
  context.stroke();
}

function circleDrawing(x, y) {
  const radius = Math.sqrt(
    Math.pow(x - startCoords.x, 2) + Math.pow(y - startCoords.y, 2)
  );
  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.beginPath();
  context.arc(x, y, radius, 0, 2.0 * Math.PI);
  context.stroke();
}

function rectangleDrawing(x, y) {
  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.beginPath();
  context.rect(
    startCoords.x,
    startCoords.y,
    x - startCoords.x,
    y - startCoords.y
  );
  context.stroke();
}

function rightTriangleDrawing(x, y) {
  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;
  context.beginPath();
  context.moveTo(startCoords.x, startCoords.y);
  context.lineTo(startCoords.x, y);
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
}

function starDrawing(mouseX, mouseY) {
  context.lineWidth = properties.width;
  context.strokeStyle = properties.currentColor;

  const spikes = 5;
  const outerRadius = startCoords.x - mouseX;
  const innerRadius = (startCoords.x - mouseX) / 2;

  let x = startCoords.x;
  let y = startCoords.y;

  let rot = (Math.PI / 2) * 3;
  let step = Math.PI / spikes;

  context.beginPath();
  context.moveTo(startCoords.x, startCoords.y - outerRadius);
  for (i = 0; i < spikes; i++) {
    x = startCoords.x + Math.cos(rot) * outerRadius;
    y = startCoords.y + Math.sin(rot) * outerRadius;
    context.lineTo(x, y);
    rot += step;

    x = startCoords.x + Math.cos(rot) * innerRadius;
    y = startCoords.y + Math.sin(rot) * innerRadius;
    context.lineTo(x, y);
    rot += step;
  }
  context.lineTo(startCoords.x, startCoords.y - outerRadius);
  context.closePath();
  context.stroke();
}

function cloudletDrawing(x, y) {
  console.log("test");
}
