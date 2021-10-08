// Home work lesson 5 DOM

// increase font of all item in list animal
function upFonts() {
  const animals = document.querySelector("#animals");
  animals.setAttribute("style", "font-size: 24px;");
}
// upFonts();

// remove all classes in the last item in list
function removeAllClassesLastChild() {
  const animals = document.querySelector("#animals");
  animals.lastElementChild.removeAttribute("class");
}
// removeAllClassesLastChild();

// change background color next element after element with id 'cat'
function changeBackground() {
  const cat = document.querySelector("#cat");
  cat.nextElementSibling.style.background = "red";
}
// changeBackground();

// change color for all dangerous elements
function dangerousElement() {
  const dangerousEl = document.querySelectorAll(".dangerous");

  dangerousEl.forEach((el) => {
    el.style.color = "red";
  });
}
// dangerousElement();

// remove class 'pet' for all elements
function removeClassPet() {
  const pet = document.querySelectorAll(".pet");

  pet.forEach((el) => {
    el.classList.remove("pet");
  });
}
//removeClassPet();

// add new bird to beginning
function addNewBirdToBeginning() {
  const birds = document.querySelector("#birds");
  const newBird = document.createElement("li");

  newBird.textContent = "Swift";
  birds.prepend(newBird);
}
// addNewBirdToBeginning();

// add new bird to ending
function addNewBirdToEnding() {
  const birds = document.querySelector("#birds");
  const newBird = document.createElement("li");

  newBird.textContent = "Columbidae";
  birds.append(newBird);
}
// addNewBirdToEnding();

// add new list fish before birds list
function addFishList() {
  const birds = document.querySelector("#birds");
  const fish = document.createElement("ul");

  fish.setAttribute("id", "fish");
  birds.before(fish);
}
// addFishList();

// reverse all elements in list animals
function reverseElements() {
  const animals = document.querySelector("#animals");
  const allChildren = [...animals.querySelectorAll("li")].reverse();
  animals.replaceChildren(...allChildren);
}
// reverseElements();

// convert element  class list to data attribute in list animals
function fromClassToDada() {
  [...document.querySelector("#animals").children].forEach((el) => {
    el.classList.forEach((classEl) => {
      el.dataset[classEl] = "";
    });
    el.removeAttribute("class");
  });
}
// fromClassToDada();
