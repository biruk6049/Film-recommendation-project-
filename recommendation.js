const API_KEY="b30cd46202a96963c496e486c1366248";
const BASE_URL="https://api.themoviedb.org/3";
const IMG_URL="https://image.tmdb.org/t/p/w500";

const container= document.getElementById("movie-container");

function showMovies(movies){
    container.innerHTML=""

    if (!movies || movies.length === 0) {
        console.log("No movies found");
        return;
    }
    for(let i=0; i< movies.length; i++){
        const movie =movies[i]

    const div= document.createElement("div");
    div.classList.add("movie");

    div.innerHTML=`
    <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.vote_average}</p>`

    container.appendChild(div);
    }
}
function getPopularMovies(){
   fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => showMovies(data.results)) // <- data.results
  .catch(error => console.error(error));
}
function getTopRatedMovies(){
    fetch(BASE_URL + "/movie/top_rated?api_key="+ API_KEY)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        showMovies(data.results)
    });
}
function getActionMovies(){
    fetch(BASE_URL + "/discover/movie?api_key=" + API_KEY + "&with_genres=28")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        showMovies(data.results)
    });
}
getTopRatedMovies();