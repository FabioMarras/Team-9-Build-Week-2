function collapseRight(event) {
  const int = document.querySelector(".internal");
  int.style.display = "none";
  document.querySelector(".expand-right").style.display = "block";
  const sidebar = document.querySelector(".sidebarRight");
  sidebar.classList.toggle("collapsed");
  document.getElementById("main").classList.toggle("pSidebarright");
}
function expandRight(event) {
  document.querySelector(".internal").style.display = "flex";
  document.querySelector(".expand-right").style.display = "none";
  const sidebar = document.querySelector(".sidebarRight");
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
const urlAlbum = "https://deezerdevs-deezer.p.rapidapi.com/album/";
function album() {
  console.log("hello");
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((responseObj) => responseObj.json())
    .then((obj) => {
      const albumid = obj.data[0].album.id;
      console.log(albumid);
      const div = document.getElementById("musicList");
      document.getElementById("topImage").src = `${obj.data[0].album.cover}`;
      document.querySelector(".albumTitle").innerHTML = `${obj.data[0].album.title}`;
      document.querySelector(".albumArtist").innerHTML = `${obj.data[0].artist.name}`;
      document.querySelector("#artistProfileImage").src = `${obj.data[0].artist.picture}`;
      fetch(urlAlbum + albumid, options)
        .then((responseObj) => responseObj.json())
        .then((obj) => {
          const mList = document.getElementById("musicList");
          const trackList = obj.tracks.data;
          console.log(trackList);
          let i = 1;
          trackList.forEach((obj) => {
            const row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("text-center");
            row.classList.add("mb-3");
            row.classList.add("justify-content-between");

            row.innerHTML = `<div class="col-1">
            <span class="text-light">${i}</span>
          </div>
          <div class="col-6">
            <div class="row text-light">${obj.title}</div>
            <div class="row text-white-50">${obj.artist.name}</div>
          </div>
          <div class="col-2 text-end text-white-50">${obj.rank}</div>
          <div class="col-3 text-end">
            <span class="text-white-50">${(obj.duration / 60).toFixed(2)}</span>
          </div>`;
            mList.append(row);
            i++;
          });
        });
    });
}
