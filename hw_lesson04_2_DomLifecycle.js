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
    let secondsInSite = ((exitDate - enterDate) / 1000).toFixed(0);
    console.log(`Exit from page: ${exitDate.toLocaleString()}, You were on the page ${secondsInSite} seconds` );
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

