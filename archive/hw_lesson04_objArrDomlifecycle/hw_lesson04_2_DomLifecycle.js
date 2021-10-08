// Home work lesson 4 part 2

// DOM elements is loaded
let enterDate;
document.addEventListener("DOMContentLoaded", () => {
  const date = (enterDate = new Date());
  console.log("DOMContentLoaded is completed:", date.toLocaleString());
});

// css and img is loaded
window.onload = () => {
  const date = new Date();
  console.log("Onload is completed:", date.toLocaleString());
};

// display the time of exit and stay on the site
// call an additional window
function beforeExit() {
  const exitDate = new Date();
  let secondsInSite = ((exitDate - enterDate) / 1000).toFixed(0);
  console.log(
    `Exit from page: ${exitDate.toLocaleString()}, You were on the page ${secondsInSite} seconds`
  );
  return "some text...";
}

// show your browser and your computer OS
const yourInfo = {
  getYourBrowser() {
    const userAgent = navigator.userAgent;
    const allBrowsers = {
      Firefox: "Mozilla Firefox",
      SamsungBrowser: "Samsung Internet",
      Opera: "Opera",
      OPR: "Opera",
      Trident: "Microsoft Internet Explorer",
      Edge: "Microsoft Edge (Legacy)",
      Edg: "Microsoft Edge (Chromium)",
      Chrome: "Google Chrome or Chromium",
      Safari: "Apple Safari",
      unknown: "unknown",
    };
    for (let key in allBrowsers) {
      if (userAgent.includes(key)) return allBrowsers[key];
    }
    return allBrowsers.unknown;
  },

  getYourOS() {
    const appVersion = navigator.appVersion;
    const allOs = {
      Win: "Windows",
      Mac: "MacOS",
      Linux: "Linux",
      unknown: "Unknown OS",
    };
    for (let key in allOs) {
      if (appVersion.includes(key)) return allOs[key];
    }
    return allOs.unknown;
  },

  printData() {
    console.log(
      `Your browser ${this.getYourBrowser()}, your OS ${this.getYourOS()}`
    );
  },
};

yourInfo.printData(); // example expect: Your browser Google Chrome or Chromium, your OS Windows
