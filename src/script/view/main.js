//MovieDB
import $ from 'jquery';
import Swal from 'sweetalert2';
import { async } from 'regenerator-runtime';
import '../component/sidebar.js';
import MovieSource from '../data/data-source.js';
const main = () => {
  const api_key = 'api_key=c721d2ddf5e72845a3691e3321764a2f';
  const base_url = 'https://api.themoviedb.org/3';
  const api_url = base_url + '/movie/now_playing?' + api_key;
  const img_url = 'https://image.tmdb.org/t/p/w500';
  const search_url = base_url + '/search/movie?' + api_key;
  const topRated_url = '/movie/top_rated?';
  const upcoming_url = '/movie/upcoming?';
  const popular_url = '/movie/popular?';

  const main = document.getElementById('main');
  const form = document.getElementById('form');
  const search = document.getElementById('search-area');

  getMovies(api_url);
  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showMovies(data.results);
        console.log(data.results);
      });
  }

  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      const seacrhTerm = search.value;
      const data = await MovieSource.searchMovies(seacrhTerm);
      showMovies(data);
      // getMovies(search_url + "&query=" + seacrhTerm);
    } catch {
      Swal.fire('The Data?', 'That thing is still around?', 'question');
    }
  });

  function showMovies(data) {
    main.innerHTML = `
   <h1 class="sectionTitle">List Of Movie</h1>
   <hr />`;
    data.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
      <img src="${img_url + poster_path}" alt="${title}" class="movie-picture" />
      <div class="movie-info">
         <h2 class="movie-title">${title}</h2>
         <span class="${getColor(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
         <h3>Sinopsis</h3>
         <p>${overview}</p>
      </div>
      `;

      main.appendChild(movieElement);
    });
  }

  function getColor(vote) {
    if (vote >= 4) {
      return 'green';
    } else if (vote >= 3) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  $('.toprated').on('click', (e) => {
    e.preventDefault();
    getMovies(base_url + topRated_url + api_key);
  });

  $('.upcoming-movies').on('click', (e) => {
    e.preventDefault();
    getMovies(base_url + upcoming_url + api_key);
  });

  $('.popular-movies').on('click', (e) => {
    e.preventDefault();
    getMovies(base_url + popular_url + api_key);
  });
};
export default main;
