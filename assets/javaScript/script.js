function collapseRight(event) {
  const int = document.querySelector('.internal');
  int.style.display = 'none';
  document.querySelector('.expand-right').style.display = 'block';
  const sidebar = document.querySelector('.sidebarRight');
  sidebar.classList.toggle('collapsed');
  document.getElementById('main').classList.toggle('pSidebarright');
}
function expandRight(event) {
  document.querySelector('.internal').style.display = 'flex';
  document.querySelector('.expand-right').style.display = 'none';
  const sidebar = document.querySelector('.sidebarRight');
  sidebar.classList.toggle('collapsed');
  document.getElementById('main').classList.toggle('pSidebarright');
}

function collapseLeft(event) {
  const disp = document.querySelector('.sidebarLeft').querySelectorAll('span');
  disp.forEach((element) => {
    element.style.display = 'none';
  });
  document.querySelector('.sidebarLeft').classList.toggle('collapsed');
  document.querySelector('.expand-left').classList.toggle('d-none');
  document.querySelector('.collapse-left').classList.toggle('d-none');
  document.getElementById('main').classList.toggle('pSidebarleft');
}
function expandLeft(event) {
  const disp = document.querySelector('.sidebarLeft').querySelectorAll('span');
  disp.forEach((element) => {
    element.style.display = 'inline';
  });
  document.querySelector('.expand-left').classList.toggle('d-none');
  document.querySelector('.collapse-left').classList.toggle('d-none');
  document.querySelector('.sidebarLeft').classList.toggle('collapsed');
  document.getElementById('main').classList.toggle('pSidebarleft');
}
function appearSearch(event) {
  document.querySelector('.searchBar').classList.toggle('d-none');
  document.querySelector('.mainPage').classList.toggle('d-none');
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  },
};

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const urlAlbum = 'https://deezerdevs-deezer.p.rapidapi.com/album/';
const albumId = urlParams.get('albumId');

console.log(albumId);
const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=103248';
function album() {
  fetch(urlAlbum + albumId, options)
    .then((responseObj) => responseObj.json())
    .then((obj) => {
      const mList = document.getElementById('musicList');
      const trackList = obj.tracks;
      let i = 1;
      const albumTime = obj.duration;
      const albumMinutes = Math.floor(albumTime / 60);
      const albumSeconds = Math.floor(albumTime - Math.floor(albumTime / 60) * 60)
        .toString()
        .padStart(2, '0');
      const div = document.getElementById('musicList');
      document.getElementById('topImage').src = `${obj.cover}`;
      document.querySelector('.albumTitle').innerHTML = `${obj.title}`;
      document.querySelector('.albumArtist').innerHTML = `${obj.artist.name}`;
      document.querySelector('#artistProfileImage').src = `${obj.artist.picture}`;
      document.querySelector('.releaseDate').innerHTML = `${obj.release_date}`;
      document.querySelector('.albumDuration').innerHTML = `${
        ' ' + albumMinutes + ' minutes ' + albumSeconds + ' seconds'
      }`;
      document.querySelector('.nBrani').innerHTML = `${' ' + trackList.length + ' Brani ' + ' , '}`;

      trackList.data.forEach((obj) => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('text-center');
        row.classList.add('mb-3');
        row.classList.add('justify-content-between');
        const time = obj.duration;
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - Math.floor(time / 60) * 60)
          .toString()
          .padStart(2, '0');

        const duration = minutes + ':' + seconds;

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

const generalAPI = 'https://striveschool-api.herokuapp.com/api/deezer/search?q={query}';

const eventI = new URLSearchParams(window.location.search).get('artistId');
const urlArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';

function artistPage() {
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c47f8709a8msh68fc06fa8886e81p18e74djsn87e3ff301cd9',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };
  fetch(urlArtist + eventI, options)
    .then((responseObj) => responseObj.json())
    .then((obj) => {
      const div = document.getElementById('musicList');
      const nameArtist = document.getElementById('nameArtist');
      const nameArt = document.createElement('div');
      document.getElementById('artistCoverImg').style.backgroundImage = `url(${obj.picture_big})`;
      nameArt.innerHTML = `

  <h1> ${obj.name} </h1>
  `;
      nameArtist.appendChild(nameArt);

      const songListPopolar = document.getElementById('songListPopolar');
      fetch(urlArtist + eventI + '/top?limit=50', options)
        .then((responseObj) => responseObj.json())
        .then((obj) => {
          for (let i = 0; i < 5; i++) {
            const time = obj.data[i].duration;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time - Math.floor(time / 60) * 60)
              .toString()
              .padStart(2, '0');

            const duration = minutes + ':' + seconds;
            const listPopolar = document.createElement('div');
            listPopolar.className = 'd-flex mt-3';
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

const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';
const URL2 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q={query}';

const getData = (searchQuery) => {
  searchResults.innerHTML = '';

  fetch(URL + searchQuery)
    .then((resp) => resp.json())
    .then((artistObjs) => {
      artistObjs.data.forEach((artistObj) => {
        searchResults.innerHTML += `<div class="row g-1 my-3 d-flex">
        <div class="col-md-3"> 
        <a href="${artistObj.link}"><img src="${artistObj.album.cover_big}" class="img-fluid rounded-start h-100" alt="..."></a>
        </div> 
        <div class="col-md-9">
        <div class="card-body">
        <h5 class="card-title">Title: ${artistObj.title}</h5>
        <p class="card-text"><a href="../Artist.html?artistId=${artistObj.artist.id}">Artist: ${artistObj.artist.name}</a></p>
        <p class="card-text"><a href="../album.html?albumId=${artistObj.album.id}">Album: ${artistObj.album.title}</a></p></div></div></div> `;
      });
    });
};

function searchbar() {
  const searchButton = document.getElementById('button-addon1'); //search button
  const searchResults = document.getElementById('searchResults'); //empty div within search button
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (event) => {
    getData(event.target.value);
  });
  searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    searchResults.innerHTML = '';

    fetch(URL + searchQuery)
      .then((resp) => resp.json())
      .then((artistObjs) => {
        artistObjs.data.forEach((artistObj) => {
          searchResults.innerHTML += `<div class="row g-1 my-3 d-flex">
          <div class="col-md-3"> 
          <a onclick='player(${artistObj.id})'><img src="${artistObj.album.cover_big}" class="img-fluid rounded-start h-100" alt="..."></a>
          </div> 
          <div class="col-md-9">
          <div class="card-body">
          <h5 class="card-title">Title: ${artistObj.title}</h5>
          <p class="card-text"><a href="../Artist.html?artistId=${artistObj.artist.id}">Artist: ${artistObj.artist.name}</a></p>
          <p class="card-text"><a href="../album.html?albumId=${artistObj.album.id}">Album: ${artistObj.album.title}</a></p></div></div></div> `;
        });
      });
  });
}

function player(event) {
  const trackUrl = 'https://striveschool-api.herokuapp.com/api/deezer/track/';

  localStorage.setItem('lastSong', event);

  fetch(trackUrl + event)
    .then((resp) => resp.json())
    .then((trackObj) => {
      document.querySelector('.playerIMG').src = `${trackObj.album.cover}`;
      document.querySelector('.playerName').innerHTML = `${trackObj.title_short}`;
      document.querySelector('.playerArtist').innerHTML = `${trackObj.artist.name}`;

      const time = trackObj.duration;
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time - Math.floor(time / 60) * 60)
        .toString()
        .padStart(2, '0');
      songtime = 0;
      const duration = minutes + ':' + seconds;
      localStorage.setItem('songMinutes', minutes);
      localStorage.setItem('songSeconds', seconds);
      document.querySelector('.playerDuration').innerHTML = `${duration}`;
    });
}
window.onload = player(localStorage.getItem('lastSong'));

const songStart = document.getElementById('start');
const songPause = document.getElementById('pause');
let timer;
let songtime = 0;
songStart.addEventListener('click', function () {
  songStart.classList.toggle('d-none');
  songPause.classList.toggle('d-none');
  const songduration = localStorage.getItem('songMinutes') + ':' + localStorage.getItem('songSeconds');
  const totDuration = Math.floor(localStorage.getItem('songMinutes') * 60 + localStorage.getItem('songSeconds') * 1);
  timer = setInterval(function () {
    const minutes = Math.floor(songtime / 60);
    const seconds = Math.floor(songtime - Math.floor(songtime / 60) * 60)
      .toString()
      .padStart(2, '0');
    const duration = minutes + ':' + seconds;
    document.querySelector('.playerTimer').innerHTML = duration;
    const percentage = ((songtime / totDuration) * 100).toFixed(1);
    console.log(percentage);
    document.querySelector('.progress-bar').style.width = `${percentage}%`;
    if (songduration === duration) {
      clearInterval(timer);
      songStart.classList.toggle('d-none');
      songPause.classList.toggle('d-none');
      songtime = 0;
      console.log('fin song');
    } else {
      songtime++;
    }
  }, 1000);
});
songPause.addEventListener('click', function () {
  clearInterval(timer);
  songStart.classList.toggle('d-none');
  songPause.classList.toggle('d-none');
});
