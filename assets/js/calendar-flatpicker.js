const hiddenDateInput = document.getElementById("hiddenDateInput");
const calendarContainer = document.getElementById("calendarContainer");

flatpickr(hiddenDateInput, {
  dateFormat: "Y-m-d", // Set your desired date format
  minDate: "today",
  appendTo: calendarContainer,
  inline: true,
});
