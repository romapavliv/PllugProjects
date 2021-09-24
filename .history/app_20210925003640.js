// Home work 2

// Change case of  letters to opposite in the line 
function changeRegister(str) {
    if(typeof str === 'string'){
        return str.split('').map((letter) => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
    }
    console.error('Incorrect data')
    return null
}

console.log(changeRegister('Test')); // output: tEST



// Kill browser page

// example : infinite fetch
function killYourPage () {
    let heap 
    console.error('Sorry I killed your page...')
    while (true) {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
            .then(json => { heap += json })
    }
}



