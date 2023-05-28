const left_dropdown_menu = document.querySelector(".left_dropdown_menu");
const dropdown = document.querySelector(".dropdown");

left_dropdown_menu.addEventListener("mouseover", () => {
  dropdown.style.display = "flex";
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});

/* 
if u want to hide it when clicking on the document, outside the element
document.addEventListener("click", (event) => {
    // Check if the clicked element is outside the dropdown and left_dropdown_menu
    if (!dropdown.contains(event.target) && !left_dropdown_menu.contains(event.target)) {
      dropdown.style.display = "none";
    }
  }); */