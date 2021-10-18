// Home work lesson 7.2 Map Set

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

Завдання виконано.
