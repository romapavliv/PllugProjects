// Home work lesson 7.1 Map Set

//const size = 100; // small
const size = 10000; // medium
//const size = 10000000; // large
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

// test 1 add new key
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

// test 2 - get the value by key
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

// test 3 - remove key
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

// test 4 - convert to array
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
result = Array.from(map);
console.timeEnd(text);

// test 5 - pure iteration
text = "pure iteration of the object";
console.time(text);
for (let key in obj) {
  result = key;
}
console.timeEnd(text);

text = "pure iteration of the object without proto";
console.time(text);
for (let key in objWithoutProto) {
  result = key;
}
console.timeEnd(text);

text = "pure iteration of the Map";
console.time(text);
for (let key of map) {
  result = key;
}
console.timeEnd(text);

// test 6 - iteration with conversion
text = "iteration with conversion of the object";
console.time(text);
Object.entries(obj).forEach(([key, val]) => {
  result = `${key} = ${val}`;
});
console.timeEnd(text);

text = "iteration with conversion of the object without proto";
console.time(text);
Object.entries(objWithoutProto).forEach(([key, val]) => {
  result = `${key} = ${val}`;
});
console.timeEnd(text);

text = "iteration with conversion of the Map";
console.time(text);
Array.from(map).forEach(([key, val]) => {
  result = `${key} = ${val}`;
});
console.timeEnd(text);

console.log("ALL TEST IS DONE!!!");
