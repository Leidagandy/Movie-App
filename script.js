const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6695aa583ebb10464b797d366f458a2f&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH =
  'https://api.themoviedb.org/3/search/movie?api_key=6695aa583ebb10464b797d366f458a2f&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const logo = document.getElementsByClassName("logo");

const fetchMovies = async (url) => {
  const response = await fetch(url);
  const movies = await response.json();
  console.log(movies.results);
};

fetchMovies(API_URL);

logo.addEventListener("click", () => {
  return window.location.reload();
});

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
