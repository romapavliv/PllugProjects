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



// Home work lesson 4 part 3 bonus task with star

// return length of all rows in array
function getLength(arr) {
    return arr.map((el) =>
        el.toString().split('').filter((letter) => {
            const re = /^([a-zа-яё]+|\d+)$/i;
            return re.test(letter);
        }).join('').length)
}

const randArr = ['taras', ' She ', 'hello, my , name', 'age 25', 25, true, '2.5', ' '];
// console.log(getLength(randArr)); // output: [5, 3, 11, 5, 2, 4, 2, 0]

// convert array to object

function fromArrToObj(arr) {
    const newObj = {};
    arr.map((el) => {
        if (!Object.keys(newObj).includes(el[0])) {
            newObj[el[0]] = el[1];
        }
    })
    return newObj;
}

const testArr = [['a', 'hello'], ['b', 33], ['a', 'bye']];
console.log(fromArrToObj(testArr)) // output: { a: 'hello', b: 33 }

// convert query params to object
function getObjFromQueryParams(str) {
    const newObj = {};
    str.substring(1).split('&').map((arr) => {
        const [key, value] = arr.split('=');
        newObj[key] = value;
    })
    return newObj;
}

const queryParams = '?a=22&b=33&c=44&d=55&e=111';
console.log(getObjFromQueryParams(queryParams)); // output: { a: '22', b: '33', c: '44', d: '55', e: '111' }


// get the most nested elements of the array
function getDeepestVariables(arr) {
    while (arr.some((el) => Array.isArray(el))) {
        arr = arr.filter((el) => typeof el !== 'number').flat(1);
    }
    return arr;
}

const arrInArr = [1, [2, 3], [[4], 5], [[6]]];
console.log(getDeepestVariables(arrInArr)); // output: [ 4, 6 ]

// deepen the variable by its value
function goToDeep(arr) {
    function deep(idx, i) {
        if (idx > 0) {
            const newArr = new Array();
            newArr[0] = deep(--idx, i);
            return newArr;
        }
        return i;
    }
    const newArr = [];

    arr.map((ar) => {
        newArr.push(deep(ar, ar));
    })
    return newArr;
}

const someArr = [1, 2, 1, 3, 4]; 
console.log(goToDeep(someArr)); // output: [ [ 1 ], [ [ 2 ] ], [ 1 ], [ [ [ 3 ] ] ], [ [ [ [ 4 ] ] ] ] ]

// convert selected key values ​​to a number
function convertToNumber(data, fieldsToNumber) {
    const newObj = {};
    for (let [key, val] of Object.entries(data)) {
        fieldsToNumber.includes(key) ? newObj[key] = Number.parseFloat(val.toString().replace(',', '.')) : newObj[key] = val;
    }
    return newObj;
}

const data = { a: '21', b: 'sensor', c:'0,2', d: '00.10' };
const fieldsToNumber = ['a', 'c'];
console.log(convertToNumber(data, fieldsToNumber)); // output: { a: 21, b: 'sensor', c: 0.2, d: '00.10' }

