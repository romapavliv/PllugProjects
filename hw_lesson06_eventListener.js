// Home work lesson 6 eventListener

const commentForm = document.forms["comment-form"];
const nicknameInput = document.querySelector("#nickname-input");
const nameInput = document.querySelector("#name-input");
const comment = document.querySelector("#comment");
const submitBtn = document.querySelector("#submit");
const arrOfComments = [
  {
    nickname: "john2021",
    name: "John",
    comment: "Hello, this is my comment",
  },
  {
    nickname: "elisa99",
    name: "Elisabeth",
    comment: "Blah-blah-blah",
  },
  {
    nickname: "andrew",
    name: "Andrew",
    comment: "Hello, guys!",
  },
];

nicknameInput.addEventListener("input", checkNicknameInput);
nicknameInput.addEventListener("blur", checkNicknameInput);

nameInput.addEventListener("input", checkNameInput);
nameInput.addEventListener("blur", checkNameInput);

comment.addEventListener("input", checkComment);
comment.addEventListener("blur", checkComment);

submitBtn.addEventListener("click", sendComment);

arrOfComments.forEach((el) => {
  addCommentToList(el);
});

// check the input for errors and allow input latin alphabet and numbers
function checkNicknameInput() {
  this.value = this.value.replace(/[^A-Za-z0-9]/gi, "");
  const textContent = this.value.trim();

  const error = document.querySelector("#nickname-error");
  const regex = /[a-zA-Z]/;

  if (
    textContent.length >= 3 &&
    textContent.length <= 24 &&
    regex.test(textContent)
  ) {
    nicknameInput.classList.add("valid");
    nicknameInput.classList.remove("invalid");
    error.textContent = "";
  } else {
    if (textContent.length === 0) {
      error.textContent = "Field cannot be empty";
    } else if (textContent.length < 3) {
      error.textContent = `Need minimum 3 characters, now ${textContent.length}`;
    } else if (textContent.length > 24) {
      error.textContent = `Maximum  24 characters, now ${textContent.length}`;
    } else if (!regex.test(textContent)) {
      error.textContent = `Must be at least one letter`;
    }
    nicknameInput.classList.remove("valid");
    nicknameInput.classList.add("invalid");
  }
  formIsInvalid();
}

// check the input for errors and allow input latin alphabet
function checkNameInput() {
  this.value = this.value.replace(/[^A-Za-z]/gi, "");
  const textContent = this.value.trim();

  const error = document.querySelector("#name-error");

  if (textContent.length >= 1 && textContent.length <= 100) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    error.textContent = "";
  } else {
    if (textContent.length === 0) {
      error.textContent = "Field cannot be empty";
    } else if (textContent.length > 100) {
      error.textContent = `Maximum  100 characters, now ${textContent.length}`;
    }
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
  formIsInvalid();
}

// check the textarea for errors and allow input latin alphabet, numbers, spaces and .,!?-
function checkComment() {
  this.value = this.value.replace(/[^A-Za-z.,!?-\s]/gi, "");
  const textContent = this.value.trim();

  const error = document.querySelector("#comment-error");

  if (textContent.length >= 1 && textContent.length <= 1000) {
    comment.classList.add("valid");
    comment.classList.remove("invalid");
    error.textContent = "";
  } else {
    if (textContent.length === 0) {
      error.textContent = "Field cannot be empty";
    } else if (textContent.length > 1000) {
      error.textContent = `Maximum  1000 characters, now ${textContent.length}`;
    }
    comment.classList.remove("valid");
    comment.classList.add("invalid");
  }
  formIsInvalid();
}

// get values from form, add to collection and clear form, validators and errors
function sendComment(event) {
  event.preventDefault();
  if (formIsInvalid()) {
    return;
  }

  const newComment = {
    nickname: commentForm.elements.nickname.value,
    name: commentForm.elements.name.value,
    comment: commentForm.elements.comment.value,
  };
  commentForm.elements.nickname.value = null;
  commentForm.elements.name.value = null;
  commentForm.elements.comment.value = null;
  arrOfComments.unshift(newComment);

  nicknameInput.classList = "";
  nameInput.classList = "";
  comment.classList = "";

  addCommentToList(newComment);
  formIsInvalid();
}

// validation of the form
function formIsInvalid() {
  const validators = [
    nicknameInput.classList.contains("invalid"),
    nameInput.classList.contains("invalid"),
    comment.classList.contains("invalid"),
    nicknameInput.value === "",
    nameInput.value === "",
    comment.value === "",
  ];
  submitBtn.disabled = validators.includes(true);

  return validators.includes(true);
}

// create and add new element in html
function addCommentToList(data) {
  function createEl(fatherEl, selector, classEl = null) {
    const newEl = document.createElement(selector);
    classEl ? newEl.classList.add(classEl) : null;
    fatherEl.prepend(newEl);
    return newEl;
  }

  const commentList = document.querySelector("#comments-list");
  const listElement = createEl(commentList, "div", "comments_element");
  const img = createEl(listElement, "div", "img");

  const commentText = createEl(listElement, "p", "element_text");
  const commentName = createEl(listElement, "p");
  commentName.textContent = data.name;
  const commentNickname = createEl(commentName, "span");
  commentNickname.textContent = data.nickname;
  commentText.textContent = data.comment;
}
