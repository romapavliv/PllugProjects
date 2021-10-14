//const size = 100; // small
//const size = 10000; // medium
const size = 10000000; // large
let text, result;

const obj = {};
const objWithoutProto = Object.create(null);
const map = new Map();

// fill the data structure
for (let i = 0; i < size; i++) {
  obj[i] = i;
  objWithoutProto[i] = i;
  map.set(i, i);
}

//? test 1 add new key
text = "add new key to Object";
console.time(text);
result = obj["test"] = "test";
console.timeEnd(text);

text = "add new key to Object without proto";
console.time(text);
result = objWithoutProto["test"] = "test";
console.timeEnd(text);

text = "add new key to Map";
console.time(text);
result = map.set("test", "test");
console.timeEnd(text);

//? test 2 - get the value by key
text = "get the value by key from Object";
console.time(text);
result = obj[50];
console.timeEnd(text);

text = "get the value by key from Object without proto";
console.time(text);
objWithoutProto[50];
console.timeEnd(text);

text = "get the value by key from Map";
console.time(text);
result = map.get(50);
console.timeEnd(text);

//? test 3 - remove key
text = "remove key from Object";
console.time(text);
result = delete obj[50];
console.timeEnd(text);

text = "remove key from Object without proto";
console.time(text);
result = delete objWithoutProto[50];
console.timeEnd(text);

text = "remove key from Map";
console.time(text);
result = map.delete(50);
console.timeEnd(text);

//? test 4 - convert to array
text = "convert Object to array";
console.time(text);
result = Object.entries(obj);
console.timeEnd(text);

text = "convert Object without proto to array";
console.time(text);
result = Object.entries(objWithoutProto);
console.timeEnd(text);

text = "convert Map to array";
console.time(text);
result = Array.from(map, ([name, value]) => [name, value]);
console.timeEnd(text);

// convert Map to object
const mapForConvert = new Map([
  [true, 1],
  [{}, 2],
  ["test3", 3],
]);

function convertMapToObj(map) {
  return map instanceof Map ? Object.fromEntries(map) : null;
}
// console.log(convertMapToObj(mapForConvert)); // output: { true: 1, '[object Object]': 2, test3: 3 }

// convert Object to Map
const objForConvert = {
  test1: 1,
  test2: 2,
  test3: 3,
};

function convertObjToMap(obj) {
  return typeof obj === "object" ? new Map(Object.entries(obj)) : null;
}
// console.log(objForConvert); // output: Map(3) { 'test1' => 1, 'test2' => 2, 'test3' => 3 }
