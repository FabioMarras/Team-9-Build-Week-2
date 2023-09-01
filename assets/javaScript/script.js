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
  document.querySelector(".sidebarLeft").classList.toggle("collapsed");
  document.querySelector(".expand-left").classList.toggle("d-none");
  document.querySelector(".collapse-left").classList.toggle("d-none");
  document.getElementById("main").classList.toggle("pSidebarleft");
}
function expandLeft(event) {
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

const urlParams = new URLSearchParams(queryString);

const urlAlbum = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const albumId = urlParams.get("albumId");

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
      document.getElementById("artistCoverImg").style.backgroundImage = `url(${obj.picture_big})`;
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
    });
}

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URL2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

const getData = (searchQuery) => {
  searchResults.innerHTML = "";

  fetch(URL + searchQuery)
    .then((resp) => resp.json())
    .then((artistObjs) => {
      artistObjs.data.forEach((artistObj) => {
        searchResults.innerHTML += `<div class="row g-1 my-3 d-flex">
        <div class="col-3"> 
        <a onclick="player(${artistObj.id})"><img src="${artistObj.album.cover_big}" class="img-fluid rounded-start h-100 w-100" alt="..."></a>
        </div> 
        <div class="col-9">
        <div class="card-body">
        <h5 class="card-title">Title: ${artistObj.title}</h5>
        <p class="card-text"><a href="../Artist.html?artistId=${artistObj.artist.id}">Artist: ${artistObj.artist.name}</a></p>
        <p class="card-text"><a href="../album.html?albumId=${artistObj.album.id}">Album: ${artistObj.album.title}</a></p></div></div></div> `;
      });
    });
};

function searchbarAndPlaylist() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("searchResults");
  const playlistDiv = document.getElementById("playlist");
  searchInput.addEventListener("input", (event) => {
    getData(event.target.value);
  });
}

const song = document.getElementById("song");
function sideBarLeftText() {
  const textUrl = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ed8257b4dbmsh87a10cf4523a33ap1b6a9fjsnfdb7824dd27d",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  function getRandomNumber() {
    return Math.floor(Math.random() * 300);
  }

  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomNumber());
  }

  for (let i = 0; i < 10; i++) {
    const currentNumber = randomNumbers[i];
    fetch(textUrl + currentNumber, options)
      .then((responseObj) => responseObj.json())
      .then((obj) => {
        const try2 = document.getElementById("playlist");
        if (obj.title) {
          const try1 = document.createElement("p");
          try1.innerHTML = ` 
          <div class= "d-flex">
          <img class= "imgSideBar" src="${obj.picture_small}" alt="" width="35px">
          <p class = "pSideBar text-white">${obj.title} </p>
          </div>
          `;
          try2.appendChild(try1);
        }
      });
  }
}

function player(event) {
  const trackUrl = "https://striveschool-api.herokuapp.com/api/deezer/track/";

  localStorage.setItem("lastSong", event);

  fetch(trackUrl + event)
    .then((resp) => resp.json())
    .then((trackObj) => {
      document.querySelector(".playerIMG").src = `${trackObj.album.cover}`;
      document.querySelector(".playerName").innerHTML = `${trackObj.title_short}`;
      document.querySelector(".playerArtist").innerHTML = `${trackObj.artist.name}`;
      song.src = `${trackObj.preview}`;
      const time = trackObj.duration;
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time - Math.floor(time / 60) * 60)
        .toString()
        .padStart(2, "0");
      songtime = 0;
      const duration = minutes + ":" + seconds;
      localStorage.setItem("songMinutes", minutes);
      localStorage.setItem("songSeconds", seconds);
      document.querySelector(".playerDuration").innerHTML = `${duration}`;
    });
}
window.onload = player(localStorage.getItem("lastSong"));

const songStart = document.getElementById("start");
const songPause = document.getElementById("pause");
let timer;
let songtime = 0;
songStart.addEventListener("click", function () {
  song.play();
  songStart.classList.toggle("d-none");
  songPause.classList.toggle("d-none");
  const songduration = localStorage.getItem("songMinutes") + ":" + localStorage.getItem("songSeconds");
  const totDuration = Math.floor(localStorage.getItem("songMinutes") * 60 + localStorage.getItem("songSeconds") * 1);
  timer = setInterval(function () {
    const minutes = Math.floor(songtime / 60);
    const seconds = Math.floor(songtime - Math.floor(songtime / 60) * 60)
      .toString()
      .padStart(2, "0");
    const duration = minutes + ":" + seconds;
    document.querySelector(".playerTimer").innerHTML = duration;
    const percentage = ((songtime / totDuration) * 100).toFixed(1);
    document.querySelector(".progress-bar").style.width = `${percentage}%`;
    if (songduration === duration) {
      clearInterval(timer);
      songStart.classList.toggle("d-none");
      songPause.classList.toggle("d-none");
      songtime = 0;
    } else {
      songtime++;
    }
  }, 1000);
});
songPause.addEventListener("click", function () {
  clearInterval(timer);
  song.pause();
  songStart.classList.toggle("d-none");
  songPause.classList.toggle("d-none");
});

//like button album page fn

const likeButtonClick = document.getElementById("likeButtonClick");
const likeButtonClickNone = document.getElementById("likeButtonClickNone");

if (likeButtonClick === null) {
} else {
  likeButtonClick.addEventListener("click", () => {
    const likeNotification = document.getElementById("likeNotification");
    likeButtonClick.classList.toggle("d-none");
    likeButtonClickNone.classList.remove("d-none");
    likeButtonClickNone.style.color = "green";

    likeNotification.innerHTML = ` <button type="button" class="btn btn-primary">Saved to <strong>Your Library</strong></button>
  `;

    setTimeout(() => {
      likeNotification.classList.add("");
    }, 1500);
  });

  likeButtonClickNone.addEventListener("click", () => {
    const likeNotification = document.getElementById("likeNotification");
    likeButtonClick.classList.toggle("d-none");
    likeButtonClickNone.classList.toggle("d-none");
    //likeNotification.classList.add('d-none');

    likeNotification.innerHTML = `
  <button type="button" class="btn btn-primary">Removed from <strong>Your Library</strong></button>`;

    setTimeout(() => {
      likeNotification.classList.add("d-none");
    }, 1500);
  });
}
const volume = document.getElementById("audioVolume");
const volumeMax = document.getElementById("audioVolume-con");
let drag = false;

volumeMax.addEventListener("mousedown", (ev) => {
  drag = true;
  updateVol(ev.clientX);
});
document.addEventListener("mousemove", function (ev) {
  if (drag) {
    updateVol(ev.clientX);
  }
});
document.addEventListener("mouseup", function (ev) {
  drag = false;
});
var updateVol = function (x, vol) {
  let volumeCon = volumeMax;
  let percentage;
  //if only volume have specificed
  //then direct update volume
  if (vol) {
    percentage = vol * 100;
  } else {
    let position = x - volumeCon.offsetLeft;
    percentage = (100 * position) / volumeCon.clientWidth;
  }

  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }

  //update volume bar and video volume
  volume.style.width = percentage + "%";
  song.volume = percentage / 100;
};
