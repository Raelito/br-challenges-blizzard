
var sliderThumb = new Swiper('.games-thumbs', {
    spaceBetween: 20,
    slidesPerView: 5,
    breakpoints: {      
      0: {
        direction: 'horizontal',
        spaceBetween: 10,
      },
      992: {
        direction: 'vertical'
      }
    }
  });  

  const progressBar = document.querySelector(".progress-bar");
  var sliderContent = new Swiper(".games-slider", {
    effect: "fade",   
    autoplay: {
      delay: 6000,     
      disableOnInteraction: false
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressBar.style.setProperty("--progress", 1 - progress);
      },
    },
    thumbs: {
      swiper: sliderThumb,
    },

  });
