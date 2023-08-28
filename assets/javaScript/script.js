function collapseRight(event) {
  const int = document.querySelector(".internal");
  int.style.display = "none";
  document.querySelector(".expand-right").style.display = "block";
  const sidebar = document.querySelector(".sidebarRight");
  console.log(sidebar);
  sidebar.classList.toggle("collapsed");
  document.getElementById("main").classList.toggle("pSidebarright");
}
function expandRight(event) {
  document.querySelector(".internal").style.display = "flex";
  document.querySelector(".expand-right").style.display = "none";
  const sidebar = document.querySelector(".sidebarRight");
  console.log(sidebar);
  sidebar.classList.toggle("collapsed");
  document.getElementById("main").classList.toggle("pSidebarright");
}

function collapseLeft(event) {
  const disp = document.querySelector(".sidebarLeft").querySelectorAll("span");
  disp.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelector(".sidebarLeft").classList.toggle("collapsed");
  document.querySelector(".expand-left").classList.toggle("d-none");
  document.querySelector(".collapse-left").classList.toggle("d-none");
  document.getElementById("main").classList.toggle("pSidebarleft");
}
function expandLeft(event) {
  const disp = document.querySelector(".sidebarLeft").querySelectorAll("span");
  disp.forEach((element) => {
    element.style.display = "inline";
  });
  document.querySelector(".expand-left").classList.toggle("d-none");
  document.querySelector(".collapse-left").classList.toggle("d-none");
  document.querySelector(".sidebarLeft").classList.toggle("collapsed");
  document.getElementById("main").classList.toggle("pSidebarleft");
}
