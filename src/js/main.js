
var header = document.getElementById("header");
var sticky = header.offsetTop + 400;

window.onscroll = function () {
  stickyHeader();
};

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
