// Home work 2

// change the case of the letters to the opposite in string 
function changeRegister(str) {
   if(typeof str === 'string'){
      return str.split('').map((letter) => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
   }
	console.error('Incorrect data')
   return null
}

console.log(changeRegister('Test')); // output: tEST



// kill the browser page

// example N1 : infinite cycle
function killYourPage () {
    let heap 
    console.error('I killed your page...')
    while (true) {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
            .then(json => { heap += json })
        //console.log(heap);
    }
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))


function over() {
    let heavyHeapConsumer = () => {
    let arrays = [];
    setInterval(() => {
        arrays.push(new Array(1000000));
    }, 100);
};
}