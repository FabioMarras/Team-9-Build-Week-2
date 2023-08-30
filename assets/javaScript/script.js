function collapseRight(event) {
  const int = document.querySelector('.internal');
  int.style.display = 'none';
  document.querySelector('.expand-right').style.display = 'block';
  const sidebar = document.querySelector('.sidebarRight');
  console.log(sidebar);
  sidebar.classList.toggle('collapsed');
  document.getElementById('main').classList.toggle('pSidebarright');
}
function expandRight(event) {
  document.querySelector('.internal').style.display = 'flex';
  document.querySelector('.expand-right').style.display = 'none';
  const sidebar = document.querySelector('.sidebarRight');
  console.log(sidebar);
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

function search() {
  fetch();
}

const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';
const URL2 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q={query}';

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
  const searchButton = document.getElementById('button-addon1'); //search button
  const searchResults = document.getElementById('searchResults'); //empty div within search button
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value;
    //console.log(searchQuery);

    fetch(URL + searchQuery)
      .then((resp) => resp.json())
      .then((artistObjs) => {
        //console.log(artistObjs);
        artistObjs.data.forEach((artistObj) => {
          //console.log(artistObjs.data);
          //let artistCard = document.createElement('div');

          searchResults.innerHTML += `  
          <a href="${artistObj.link}">
          <div class="row g-1 my-3 d-flex">
          <div class="col-md-3">
          <img src="${artistObj.album.cover_big}" class="img-fluid rounded-start h-100" alt="...">
          </div> 
          <div class="col-md-9">
          <div class="card-body">
          <h5 class="card-title">Title: ${artistObj.title}</h5>
          <p class="card-text"><a href="../Artist.html?artistId=${artistObj.artist.id}">Artist: ${artistObj.artist.name}</a></p>
          <p class="card-text"><a href="../album.html?albumId=${artistObj.album.id}">Album: ${artistObj.album.title}</a></p>
          </div>
          </div>
          </div>
          </a>
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
