document.addEventListener("DOMContentLoaded", function () {
  // Get the current date
  let currentDate = new Date();

  // Format the date (you can customize the format as needed)
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Display the date in the HTML element
  let dateContainer = document.getElementById("currentDateContainer");
  dateContainer.textContent = formattedDate;
});
