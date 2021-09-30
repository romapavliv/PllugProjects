// Home work lesson 3

// create empty object
const emptyObj = {};
const emptyObj2 = new Object();

// create empty object without prototype
const emptyObjWithoutProto = Object.create(null);

// add elements to object, different ways
const newObj = {
    'First Name': 'Taras',
    age: 25,
}

newObj['lastName'] = 'Shevchyk';
newObj.city = 'Novoyavorivsk';

Object.assign(newObj, {
    country: 'Ua',
});

// create empty array
const emptyArr = [];
const emptyArr2 = new Array();

// create empty array with length 100500
const bigArr = [];
bigArr.length = 100500;

const bigArr2 = new Array(100500);

// create array with random elements
let arrWithRandomEl = [1, true, 'hello', null, undefined];

// clear array
arrWithRandomEl.length = 0;
arrWithRandomEl = [];

// remote element form array by idx
function remoteElFromArrByIdx(arr, remoteIdx) {
    return arr.filter((val, idx) => idx !== remoteIdx);
}

// check array to emptiness
function isEmptyArr(arr) {
    if (!Array.isArray(arr)) return null;
    return !arr.length;
}

// check object to emptiness
function isEmptyObj(obj) {
    if (!obj instanceof Object) return null;
    return !Object.keys(obj).length;
}

// concat several arrays
function concatSeveralArrays(firstArr, ...anotherArrays) {
    for (let arr of [...anotherArrays]) {
        firstArr = firstArr.concat(arr);
    }
    return firstArr;
}

// raise to degree  3 all the elements of array
function allArrInDegree3(arr) {
    return arr.map((el) => el ** 3);
}

// get odd elements of array
function getOddEl(arr) {
    return arr.filter((val, idx) => idx % 2 !== 0);
}

// get only integer element of array
function getOnlyInteger(arr) {
    return arr.filter((val) => Number.isInteger(val));
}

// three ways to create void function
const voidFoo = () => { }

function returnVoid() { return; }

(() => {})();
