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
function appearSearch(event) {
  document.querySelector(".searchBar").classList.toggle("d-none");
  document.querySelector(".mainPage").classList.toggle("d-none");
}

function search() {
  fetch();
}

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";
const URL2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";
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

      const row = document.getElementById("row");
      const trackList = fetch(responseData.data[0].album.tracklist);

      console.log(trackList);

      trackList.data.forEach((data) => {
        console.log(data);
        /*const col = document.createElement("div");
        col.innerHTML = `
        <p> ${data.album.title} </p>
        `;
        console.log(data.album.title);

        row.appendChild(col);*/
        const song1 = document.getElementById("titleSong");
        const titleSongAlbum = document.createElement("div");
        titleSongAlbum.innerHTML = `
        <div class="row text-center mb-3 justify-content-between">
            <div class="col-1">
              <span class="text-light">1</span>
            </div>
            <div class="col-6" id="titleSong">
              <div class="row text-light">${data.title}</div>
              <div class="row text-white-50">Pinguini</div>
            </div>
            <div class="col-4 text-start text-white-50">694,578</div>
            <div class="col-1">
              <span class="text-white-50">1:28</span>
            </div>
          </div>
        <div class="row text-light">${data.album.tracklist}</div>
          `;
        song1.appendChild(titleSongAlbum);
      });
    } else {
      console.error("Errore nella richiesta:", resp.status);
    }
  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
};
