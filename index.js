const navbar = document.querySelector("#navbar");
const about = document.querySelector("#about");

function importHTML(file) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", file, false);
  xhr.send();
  return xhr.responseText;
}

document.addEventListener("DOMContentLoaded", () => {
  navbar.innerHTML = importHTML("./components/Navbar.html");
  about.innerHTML = importHTML("./components/About.html");
});
