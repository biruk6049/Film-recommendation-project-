const moviesEl = document.getElementById("movies");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
let currentMovies = [];


// THEME TOGGLE
toggle.addEventListener("click", () => {
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
icon.innerHTML = `
<circle cx="12" cy="12" r="5" fill="currentColor"/>
<g stroke="currentColor" stroke-width="2">
<line x1="12" y1="1" x2="12" y2="3"/>
<line x1="12" y1="21" x2="12" y2="23"/>
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
<line x1="1" y1="12" x2="3" y2="12"/>
<line x1="21" y1="12" x2="23" y2="12"/>
</g>
`;
}else{
icon.innerHTML = `
<path d="M21 12.79A9 9 0 1111.21 3 
7 7 0 0021 12.79z" fill="currentColor"/>
`;
}
});

// DISPLAY MOVIES
function display(movies){
currentMovies = movies;
moviesEl.innerHTML = "";

movies.forEach(movie=>{

const div=document.createElement("div");
div.className="movie";

const isSaved = watchlist.some(m => m.id === movie.id);

div.innerHTML=`
<div class="poster-wrapper">

<img src="${IMG+movie.poster_path}">

<div class="watchlist ${isSaved ? 'active' : ''}">
<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
<path d="M6 2a2 2 0 00-2 2v18l8-4 8 4V4a2 2 0 00-2-2H6z"/>
</svg>
</div>

</div>

<div class="movie-info">
<h3>${movie.title}</h3>
<p class="date">${movie.release_date || "N/A"}</p>
<p>⭐ ${movie.vote_average}</p>
</div>
`;

// WATCHLIST BUTTON

const watchBtn = div.querySelector(".watchlist");

watchBtn.onclick = (e) => {
e.stopPropagation();

const exists = watchlist.find(m => m.id === movie.id);

if (exists) {
watchlist = watchlist.filter(m => m.id !== movie.id);
} else {
watchlist.push(movie);
}

localStorage.setItem("watchlist", JSON.stringify(watchlist));

// refresh UI immediately
display(currentMovies);
};


// OPEN MODAL
div.onclick=()=>openModal(movie);

moviesEl.appendChild(div);

});
}

// MODAL
function openModal(movie){
modal.classList.add("active");

modalBody.innerHTML=`
<h2>${movie.title}</h2>

<img src="${IMG+movie.poster_path}" width="200">

<p><strong>Release:</strong> ${movie.release_date}</p>

<p><strong>Language:</strong> ${movie.original_language}</p>

<p>${movie.overview}</p>
`;
}

// CLOSE MODAL
document.getElementById("closeModal").onclick=()=>{
modal.classList.remove("active");
};

// CLICK OUTSIDE CLOSE
modal.addEventListener("click",(e)=>{
if(e.target===modal){
modal.classList.remove("active");
}
});

// SEARCH
document.getElementById("searchForm").onsubmit=async(e)=>{
e.preventDefault();

const q=document.getElementById("searchInput").value;

const movies=await searchMovies(q);

display(movies);
};

// NAVIGATION
document.querySelectorAll(".nav-link").forEach(link=>{
link.onclick=async()=>{

document.querySelectorAll(".nav-link")
.forEach(l=>l.classList.remove("active"))

link.classList.add("active")

let movies = []

const section = link.dataset.section

if(section === "home"){
movies = await getTrending()
}

else if(section === "popular"){
movies = await getPopular()
}

else if(section === "top"){
movies = await getTopRated()
}

else if(section === "now"){
movies = await getNowPlaying()
}

if(section === "watchlist"){
display(watchlist);
return;
}

display(movies)
}
})

// LOAD DEFAULT
getTrending().then(display)