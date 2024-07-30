document.addEventListener("click", function (event) {
  var selectWrappers = document.querySelectorAll(".select-wrapper");
  selectWrappers.forEach(function (wrapper) {
    if (!wrapper.contains(event.target)) {
      var selectInput = wrapper.querySelector(".select-input");
      selectInput.blur();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all select elements with the class "form-select"
  const selectInputs = document.querySelectorAll(".form-select");

  // Loop through each select element and add an event listener
  selectInputs.forEach(function (selectInput) {
    selectInput.addEventListener("change", function () {
      this.blur();
    });
  });
});
