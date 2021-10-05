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

Завдання виконано.



