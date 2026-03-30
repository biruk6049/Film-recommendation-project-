:root{
  --bg:#0b0f14;
  --panel:#0f1720;
  --muted:#9aa4b2;
  --accent:#e50914;
  --card:#0b1116;
  --radius:8px;
  --gap:16px;
  --container-width:1100px;
  --max-width:1200px;
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--font-sans);
  background:linear-gradient(180deg,var(--bg),#071018 120%);
  color:#e6eef6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.4;
}

.container{
  width:90%;
  max-width:var(--container-width);
  margin:0 auto;
  padding:24px 0;
}

.site-header{
  background:linear-gradient(90deg, rgba(0,0,0,0.6), transparent);
  border-bottom:1px solid rgba(255,255,255,0.03);
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:var(--gap);
}
.brand{
  font-weight:700;
  color:var(--accent);
  text-decoration:none;
  font-size:1.25rem;
  letter-spacing:0.4px;
}

.main-nav ul{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  gap:12px;
  align-items:center;
}
.main-nav a{
  color:var(--muted);
  text-decoration:none;
  padding:8px 10px;
  border-radius:6px;
  font-size:0.95rem;
}
.main-nav a.active,
.main-nav a:hover{
  color:#fff;
  background:rgba(255,255,255,0.03);
}

.search-section{
  margin-top:18px;
  margin-bottom:18px;
}
.search-form{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.search-controls{
  display:flex;
  gap:8px;
}
.search-form input[type="search"]{
  flex:1;
  padding:12px 14px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.04);
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  color:#fff;
  font-size:1rem;
}
.btn{
  border:0;
  padding:10px 14px;
  border-radius:8px;
  cursor:pointer;
  font-weight:600;
}
.btn.primary{
  background:var(--accent);
  color:#fff;
}

.recommendation-section{
  margin:24px 0;
}
.recommendation-list{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}
.movie-card{
  width:180px;
  background:var(--card);
  border-radius:var(--radius);
  overflow:hidden;
  box-shadow:0 6px 18px rgba(0,0,0,0.6);
}
.poster{
  height:270px;
  background-size:cover;
  background-position:center;
}
.poster-placeholder{
  background:linear-gradient(90deg,#0b1116 0%, #0f1720 100%);
  display:block;
}
.card-body{
  padding:10px;
}
.movie-title{
  margin:0 0 6px 0;
  font-size:0.95rem;
}
.movie-meta{
  margin:0;
  color:var(--muted);
  font-size:0.85rem;
}

.results-section{
  margin:28px 0 60px 0;
}
.results-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
  gap:16px;
  align-items:start;
}
.empty-state{
  color:var(--muted);
  padding:28px;
  background:rgba(255,255,255,0.02);
  border-radius:8px;
}

.site-footer{
  border-top:1px solid rgba(255,255,255,0.03);
  padding:18px 0;
  margin-top:40px;
  color:var(--muted);
  font-size:0.9rem;
  text-align:center;
}

.visually-hidden{
  position:absolute !important;
  height:1px; width:1px;
  overflow:hidden; clip:rect(1px,1px,1px,1px);
  white-space:nowrap; border:0; padding:0; margin:-1px;
}

@media (max-width:800px){
  .header-inner{flex-direction:column; align-items:flex-start; gap:12px}
  .recommendation-list{justify-content:flex-start}
  .movie-card{width:140px}
  .poster{height:210px}
}
