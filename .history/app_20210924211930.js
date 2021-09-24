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
    while (true) {
        console.error('I killed your page...')
    }
}

