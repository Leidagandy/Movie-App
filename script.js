const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6695aa583ebb10464b797d366f458a2f&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=6695aa583ebb10464b797d366f458a2f&query="';

const logo = document.getElementsByClassName("logo");
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const fetchMovies = async (url) => {
  const response = await fetch(url);
  const movies = await response.json();
  showMovies(movies.results);
};

fetchMovies(API_URL);

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieNode = document.createElement("div");
    movieNode.classList.add("movie-card");

    movieNode.innerHTML = `
<img
  src="${IMG_PATH + poster_path}"
  alt="${title}"
/>
<div class="movie-info">
  <h3>${title}</h3>
  <span class="rating">${vote_average}</span>
</div>
<div class="overview">
  <h3>Overview</h3>
 ${overview}
</div>
`;
    main.appendChild(movieNode);
  });
}

// logo.addEventListener("click", () => {
//   return window.location.reload();
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    fetchMovies(SEARCH + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
