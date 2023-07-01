const cardSliderhero = document.querySelector("[data-slider='card']");
const thumbSliderhero = document.querySelector("[data-slider='thumb']");
const cardSubmenuleagues = document.querySelector(
  "[data-card='submenu-leagues']"
);
const cardSubmenugames = document.querySelector("[data-card='submenu-games']");

fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const dataGames = data.games;
    const dataSliderhero = data.sliderHero;
    const dataSubmenugames = data.submenuGames;
    /*    for (const games of dataGames) {
      cardGames.innerHTML += `<a href="#" class="link">
      <article class="card -games">
          <figure class="figure"><img src="assets/img/${games.imagem}-bg.webp" alt="${games.titulo}" class="image"><img
              src="assets/img/${games.logo}-logo.webp" alt="${games.titulo} logo" class="logo"></figure>
          <section class="body"><span class="title">${games.titulo}</span><span class="text">${games.tipo}</span></section>
        </article>
        </a>`;
    }  */
    for (const sliderHero of dataSliderhero) {
      thumbSliderhero.innerHTML += `<div class="swiper-slide"><img alt="${sliderHero.title} icon" src="assets/img/${sliderHero.image}-icon.webp" ></div>`;
      cardSliderhero.innerHTML += `
      <article class="swiper-slide card -slider slider-${sliderHero.image}" >   
        <div class="container grid">  
      <figure class="figure">
      <img src="assets/img/${sliderHero.image}-bg-slider.webp" alt="${sliderHero.image} background" class="image">
      </figure> 
                 
            <section class="body">
              <h1 class="title">${sliderHero.title}</h1>
              <p class="text">${sliderHero.text}</p>
              <a href="#" class="button -lg -primary">${sliderHero.buttonText}               
              </a>
            </section>  
            <header class="header">
            <img src="assets/img/${sliderHero.logo}-logo.webp" alt="${sliderHero.logo} Logo" class="logo">
            </header>
            <footer class="footer">            
            <p class="text">Assista o Vídeo</p>
            <div class="video-container">
            <img src="assets/img/icons/icon-play.svg" aria-hidden="true" class="icon play">   
            <img src="assets/img/${sliderHero.image}-animation-cover.webp" alt="${sliderHero.image} cover" class="cover"> 
            <video class="video" preload="auto" loop onmouseenter="playVideo(this)" onmouseout="pauseVideo(this)">
            <source src="assets/img/${sliderHero.image}-animation.webm" type="video/webm">         

          </video>
                
             
            </div>

            
             </footer>
          </div>  
      </article>
          `;
    }
    for (const submenuGames of dataSubmenugames) {
      cardSubmenugames.innerHTML += ` <article class="card -submenu" data-card="submenu-games">
                  <figure class="figure">
                    <img src="assets/img/${submenuGames.image}-icon.webp" alt=" ${submenuGames.title} logo" class="image">
                  </figure>
                  <section class="header">
                    <p class="body">
                      ${submenuGames.title}
                    </p>
                  </section>
                </article>
          `;
    }
  });

const cardGames = document.querySelector("[data-card='games']");
const cardTemplate = document.getElementById("card-template");
for (let i = 0; i < 12; i++) {
  cardGames.append(cardTemplate.content.cloneNode(true));
}
fetch("https://api.brchallenges.com/api/blizzard/games")
  .then((res) => res.json())
  .then((games) => {
    cardGames.innerHTML = ` <article class="card -games -more">
        
            <img src="assets/img/blizzard-logo.svg" alt="" class="logo">
       
              <a href="#" class="button -sm -transparent" role="button"><svg width="24" height="24" viewBox="0 0 24 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                  <rect x="7" y="7" width="3" height="3" fill="#61CDFF"></rect>
                  <rect x="7" y="13" width="3" height="3" fill="#61CDFF"></rect>
                  <rect x="13" y="7" width="3" height="3" fill="#61CDFF"></rect>
                  <rect x="13" y="13" width="3" height="3" fill="#61CDFF"></rect>
                </svg>Ver todos jogos</a>
     
          </article>`;
    games.forEach((game) => {
      const div = cardTemplate.content.cloneNode(true);
      div.querySelector("[data-games='name']").innerHTML = game.name;
      div.querySelector("[data-games='category']").innerHTML = game.category;
      div.querySelector("[data-games='image']").src = `${game.image}`;
      div.querySelector("[data-games='image']").alt = `${game.name}`;
      div.querySelector("[data-games='logo']").src = `${game.logo}`;
      div.querySelector("[data-games='logo']").alt = `${game.name}`;
      cardGames.append(div);
    });
  });
