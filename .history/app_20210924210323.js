console.log('Hello Pllug');

function changeRegister(str){
   if(typeof str === 'string'){
      return str.split('').map((letter)=>letter===letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
   }
	console.error('Incorrect data')
   return null
}