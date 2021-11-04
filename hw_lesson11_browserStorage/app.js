import Tracker from "./Tracker.js";
const form = document.forms["form"];
const allTrackers = document.querySelector(".trackers");
const mainInput = document.querySelector("#main-input");

// local storage
Tracker.getDataFromLocalStorage();

// event listeners
allTrackers.addEventListener("click", (event) => {
  const currentId = event.target.dataset["id"];
  if (event.target.classList.contains("pause-btn")) {
    Tracker.trackerList.map((tracer) => {
      if (tracer.id === currentId) {
        tracer.isPause ? tracer.startTimer() : tracer.stopTimer();
        Tracker.addDataToLocalStorage();
      }
    });
  }

  if (event.target.classList.contains("remove-btn")) {
    Tracker.trackerList.map((tracer) => {
      if (tracer.id === currentId) {
        tracer.destroyTracker();
        Tracker.addDataToLocalStorage();
      }
    });
  }
  Tracker.getDataFromLocalStorage();
});

mainInput.addEventListener("click", (event) => {
  event.preventDefault();
  Tracker.createNewTracer(
    form.elements.name.value
      ? form.elements.name.value
      : new Date().toLocaleString()
  );
  form.elements.name.value = null;
  Tracker.addDataToLocalStorage();
});

window.addEventListener("unload", Tracker.addDataToLocalStorage);

window.onstorage = () => {
  Tracker.getDataFromLocalStorage();
};
