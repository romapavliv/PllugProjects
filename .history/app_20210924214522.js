// Home work 2

// Change the case of the letters to the opposite in string 
function changeRegister(str) {
    if(typeof str === 'string'){
        return str.split('').map((letter) => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
    }
    console.error('Incorrect data')
    return null
}

console.log(changeRegister('Test')); // output: tEST



// kill the browser page

// example N1 : infinite fetch
function killYourPage () {
    let heap 
    console.error('Sorry I killed your page...')
    while (true) {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
            .then(json => { heap += json })
    }
}
txt = "a";
while(1){
    txt = txt += "a";    //add as much as the browser can handle
}
