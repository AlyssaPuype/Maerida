//------TOGGLE MENU
let navLinks = document.getElementById("navLinks");
const showMenu = () => {
    navLinks.style.right = "0";
}
const hideMenu = () => {
    navLinks.style.right = "-100%";
}

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


