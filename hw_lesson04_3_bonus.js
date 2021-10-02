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

