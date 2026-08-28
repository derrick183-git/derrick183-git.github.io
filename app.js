const data=[["Entertainment","pages/entertainment.html"],["Celebrity","pages/celebrity.html"],["Music","pages/music.html"],["Culture","pages/culture.html"],["News","pages/news.html"],["Ghana","pages/culture.html"]];
function openSearch(){document.getElementById("searchModal").style.display="block";document.getElementById("searchInput").focus()}
function closeSearch(){document.getElementById("searchModal").style.display="none"}
function searchSite(){let q=document.getElementById("searchInput").value.toLowerCase();let out=document.getElementById("results");out.innerHTML=data.filter(x=>x[0].toLowerCase().includes(q)||!q).map(x=>`<div class="result"><a href="${x[1]}"><b>${x[0]}</b><br><small>Explore ${x[0]} stories on BuzzWave →</small></a></div>`).join("")}
function subscribe(e){e.preventDefault();e.target.innerHTML="<b>Thanks! You're on the list.</b>"}
function toggleMenu(){document.querySelector("nav").style.display=document.querySelector("nav").style.display==="flex"?"none":"flex"}
