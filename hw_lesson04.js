// Home work lesson 4 part 1

// get a string from the array and display in camelCase
function getTextFromArr(arr) {
    return arr.filter((val) => typeof val === 'string').map((val, idx) => {
        val = val.toLowerCase().split('');
        idx !== 0 ? val[0] = val[0].toUpperCase() : null;
        return val.join('');
    }).join('');
}

 console.log(getTextFromArr([true, 3, 'Hello', false, 'mY', 253, 'NAME', null, 'tArAs'])); // output: helloMyNameTaras

// get a char using a number
function getCharUseNum(arr) {
    if (arr.every((el) => typeof el === 'number') && Math.max(...arr) <= 26 && Math.min(...arr) >= 1) {
        return arr.map((num) => String.fromCharCode(num + 96));
    }
    return null;
}

 console.log(getCharUseNum([1, 3, 22, 11])); // output: [d, c, v, k]

// filter the object by criteria
function getNumberFromObj(obj) {
    const newObj = {};
    for (let [key, val] of Object.entries(obj)) {
        if (val >= 0 && typeof val === 'number') {
            newObj[key] = val;
        }
    }
    return newObj;
}

console.log(getNumberFromObj({ a: 22, b: -11.35, c: 41.2, d: 'hello' })); // output: { a: 22, c: 41.2 }


// Home work lesson 4 part 2

// DOM elements is loaded
let enterDate;
document.addEventListener('DOMContentLoaded', () => {
    const date  = enterDate = new Date();
    console.log('DOMContentLoaded is completed:', date.toLocaleString());
})

// css and img is loaded
window.onload = () => {
    const date = new Date();
    console.log('Onload is completed:', date.toLocaleString());
}

// display the time of exit and stay on the site
// call an additional window
function beforeExit(){
    const exitDate = new Date();
    let minutesInSite = ((exitDate - enterDate) / 1000).toFixed(0);
    console.log(`Exit form page: ${exitDate.toLocaleString()}, You were on the page ${minutesInSite} minutes` );
    return 'some text...';
}

// show your browser and your computer OS
const yourInfo = {
    getYourBrowser() {
        const userAgent = navigator.userAgent;

        if (userAgent.indexOf("Firefox") > -1) {
            return "Mozilla Firefox";
        } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            return "Samsung Internet";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            return "Opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            return "Microsoft Internet Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            return "Microsoft Edge (Legacy)";
        } else if (userAgent.indexOf("Edg") > -1) {
            return "Microsoft Edge (Chromium)";
        } else if (userAgent.indexOf("Chrome") > -1) {
            return "Google Chrome or Chromium";
        } else if (userAgent.indexOf("Safari") > -1) {
            return "Apple Safari";
        } 
        return "unknown";
    },

    getYourOS() {
        const appVersion = navigator.appVersion;
        
        if (appVersion.indexOf("Win") != -1) {
            return "Windows";
        } else if (appVersion.indexOf("Mac") != -1) {
            return "MacOS";
        } else if (appVersion.indexOf("Linux") != -1) {
            return "Linux";
        }
        return "Unknown OS";
    },

    printData() {
        console.log( `Your browser ${this.getYourBrowser()}, your OS ${this.getYourOS()}`);
    }
}

yourInfo.printData(); // example expect: Your browser Google Chrome or Chromium, your OS Windows 














