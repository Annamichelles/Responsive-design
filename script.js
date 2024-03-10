/*function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "header__menu") {
    x.className += " responsive";
  } else {
    x.className = "header__menu";
  }
}*/

function toggleDropdown() {
  document.getElementById("dropdown_button").classList.toggle("show");
  console.log("here")
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-ellipsis')) {
    var dropdowns = document.getElementsByClassName("menu__items-mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}