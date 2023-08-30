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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const urlAlbum = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const albumId = urlParams.get("albumId");

console.log(albumId);
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=103248";
function album() {
  fetch(urlAlbum + albumId, options)
    .then((responseObj) => responseObj.json())
    .then((obj) => {
      const mList = document.getElementById("musicList");
      const trackList = obj.tracks;
      let i = 1;
      const albumTime = obj.duration;
      const albumMinutes = Math.floor(albumTime / 60);
      const albumSeconds = Math.floor(albumTime - Math.floor(albumTime / 60) * 60)
        .toString()
        .padStart(2, "0");
      const div = document.getElementById("musicList");
      document.getElementById("topImage").src = `${obj.cover}`;
      document.querySelector(".albumTitle").innerHTML = `${obj.title}`;
      document.querySelector(".albumArtist").innerHTML = `${obj.artist.name}`;
      document.querySelector("#artistProfileImage").src = `${obj.artist.picture}`;
      document.querySelector(".releaseDate").innerHTML = `${obj.release_date}`;
      document.querySelector(".albumDuration").innerHTML = `${
        " " + albumMinutes + " minutes " + albumSeconds + " seconds"
      }`;
      document.querySelector(".nBrani").innerHTML = `${" " + trackList.length + " Brani " + " , "}`;

      trackList.data.forEach((obj) => {
        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("text-center");
        row.classList.add("mb-3");
        row.classList.add("justify-content-between");
        const time = obj.duration;
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - Math.floor(time / 60) * 60)
          .toString()
          .padStart(2, "0");

        const duration = minutes + ":" + seconds;

        row.innerHTML = `<div class="col-1">
            <span class="text-light">${i}</span>
          </div>
          <div class="col-6">
            <div class="row text-light">${obj.title}</div>
            <div class="row text-white-50">${obj.artist.name}</div>
          </div>
          <div class="col-2 text-end text-white-50">${obj.rank}</div>
          <div class="col-3 text-end">
            <span class="text-white-50">${duration}</span>
          </div>`;
        mList.append(row);
        i++;
      });
    });
}

const generalAPI = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

const eventI = new URLSearchParams(window.location.search).get("artistId");
const urlArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

function artistPage() {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  fetch(urlArtist + eventI, options)
    .then((responseObj) => responseObj.json())
    .then((obj) => {
      const div = document.getElementById("musicList");
      const nameArtist = document.getElementById("nameArtist");
      const nameArt = document.createElement("div");
      nameArt.innerHTML = `
  <h1> ${obj.name} </h1>
  `;
      nameArtist.appendChild(nameArt);

      const songListPopolar = document.getElementById("songListPopolar");
      fetch(urlArtist + eventI + "/top?limit=50", options)
        .then((responseObj) => responseObj.json())
        .then((obj) => {
          for (let i = 0; i < 5; i++) {
            const time = obj.data[i].duration;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time - Math.floor(time / 60) * 60)
              .toString()
              .padStart(2, "0");

            const duration = minutes + ":" + seconds;
            const listPopolar = document.createElement("div");
            listPopolar.className = "d-flex mt-3";
            listPopolar.innerHTML = `
        <div class="d-flex mt-3" style="width: 100%;">
        <span class="mx-3 align-self-center" style="width: 2%;">${i + 1}</span>
        <img class="mx-2" src="${obj.data[i].album.cover}" alt="" width="50px" style="width: 12%;"/>
        <p class="me-3 align-self-center" style="width: 25%;">${obj.data[i].title}</p>
        <p class="ms-5 align-self-center" style="width: 15%;">Riproduzioni ${obj.data[i].rank}</p>
        <p class="ms-5 align-self-center" style="width: 10%;">Time ${duration}</p>
        </div>
        `;
            songListPopolar.appendChild(listPopolar);
          }
        });

      /*const albumArtist = document.getElementById("albumArtist1");
      const AlbumArt = document.createElement("div");
      AlbumArt.innerHTML = `
  <img class="mx-2" src="${obj.album.cover}" alt="" width="50px" />
  <p>${obj.album.title}</p>
  `;

      albumArtist.appendChild(AlbumArt);*/
    });
}

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URL2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

/* window.onload = () => {
  getArtisits();
}; */

//const getArtisits = async () => {
/*   try {
    const resp = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: '',
      },
    });

    if (resp.ok) {
      const responseData = await resp.json(); */
//console.log("responde data: ", responseData)

/*  try {
        const resp = await fetch(URL, {
          method: 'GET',
          headers: {
            Authorization: '*',
          },
        }); */

/*    if (resp.ok) {
          const responseData = await resp.json();
          console.log('responde data: ', responseData);

          const row = document.getElementById('row');
          const trackList = fetch(responseData.data[0].album.tracklist);

          console.log(trackList); */

/*  trackList.data.forEach((data) => {
            console.log(data); */
/*const col = document.createElement("div");
            col.innerHTML = `
            <p> ${data.album.title} </p>
            `;
            console.log(data.album.title);
    
            row.appendChild(col);*/
/* const song1 = document.getElementById('titleSong');
            const titleSongAlbum = document.createElement('div');
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
              `; */
/* song1.appendChild(titleSongAlbum);
          });
        } else {
          console.error('Errore nella richiesta:', resp.status);
        }
      } catch (error) {}
    }
  } catch (error) {}
}; */

/* ------------- */

//const artistName = new URLSearchParams(Window.location.search).get('artistName');
//console.log('id');

window.onload = () => {
  const searchButton = document.getElementById("button-addon1"); //search button
  const searchResults = document.getElementById("searchResults"); //empty div within search button
  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchQuery = searchInput.value;
    searchResults.innerHTML = "";

    fetch(URL + searchQuery)
      .then((resp) => resp.json())
      .then((artistObjs) => {
        //console.log(artistObjs);
        artistObjs.data.forEach((artistObj) => {
          //console.log(artistObjs.data);
          //let artistCard = document.createElement('div');

          searchResults.innerHTML += `  
         
          <div class="row g-1 my-3 d-flex">
          <div class="col-md-3"> 
          <a href="${artistObj.link}"><img src="${artistObj.album.cover_big}" class="img-fluid rounded-start h-100" alt="..."></a>
          </div> 
          <div class="col-md-9">
          <div class="card-body">
          <h5 class="card-title">Title: ${artistObj.title}</h5>
          <p class="card-text"><a href="../Artist.html?artistId=${artistObj.artist.id}">Artist: ${artistObj.artist.name}</a></p>
          <p class="card-text"><a href="../album.html?albumId=${artistObj.album.id}">Album: ${artistObj.album.title}</a></p>
          </div>
          </div>
          </div>
          
          `;

          //console.log(artistCard);
          //console.log(searchResults);

          //searchResults.appendChild(artistCard);
        });
      });
  });
};

//const eventId = new URLSearchParams(Window.location.search).get('getId');
//console.log('id');
