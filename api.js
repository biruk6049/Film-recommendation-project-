const API_KEY="36d80384d01c7be07634d95b544dbda3"
const BASE="https://api.themoviedb.org/3"
const IMG="https://image.tmdb.org/t/p/w500"

async function getPopular(){
const res=await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`)
const data=await res.json()
return data.results
}

async function searchMovies(q){
const res=await fetch(`${BASE}/search/movie?api_key=${API_KEY}&query=${q}`)
const data=await res.json()
return data.results
}

async function getTopRated(){
const res=await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}`)
const data=await res.json()
return data.results
}

async function getNowPlaying(){
const res=await fetch(`${BASE}/movie/now_playing?api_key=${API_KEY}`)
const data=await res.json()
return data.results
}

async function getTrending(){
try{
const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`);

if(!res.ok){
throw new Error("API failed: " + res.status);
}

const data = await res.json();
return data.results;

}catch(err){
console.log("Trending error:", err);
return [];
}
}