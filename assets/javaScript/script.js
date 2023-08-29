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

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";
window.onload = async () => {
  try {
    const resp = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "",
      },
    });
    if (resp.ok) {
      const responseData = await resp.json();
      console.log("responde data: ", responseData);

      /*const row = document.getElementById("row");

      responseData.data.forEach((data) => {
        const col = document.createElement("div");
        col.innerHTML = `
        <p> ${data.album.title} </p>
        `;
        console.log(data.album.title);

        row.appendChild(col);
      });*/
    } else {
      console.error("Errore nella richiesta:", resp.status);
    }
  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
};
