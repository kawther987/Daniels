var typed = new Typed("#typed-text", {
  strings: ["Desinger", " Larry Daniels", "Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  center: true,
  autoWidth: true,

  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const counts = document.querySelectorAll(".count");
const speed = 100;
counts.forEach((counter) => {
  function upData() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upData, 1);
    } else {
      counter.innerText = target;
    }
  }
  upData();
});

var lightbox = GLightbox();
lightbox.on("open", (target) => {
  console.log("lightbox opened");
});
var lightboxDescription = GLightbox({
  selector: ".glightbox2",
});
var lightboxVideo = GLightbox({
  selector: ".glightbox3",
});
lightboxVideo.on("slide_changed", ({ prev, current }) => {
  console.log("Prev slide", prev);
  console.log("Current slide", current);

  const { slideIndex, slideNode, slideConfig, player } = current;

  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on("ready", (event) => {
        // Do something when video is ready
      });
    }

    player.on("play", (event) => {
      console.log("Started play");
    });

    player.on("volumechange", (event) => {
      console.log("Volume change");
    });

    player.on("ended", (event) => {
      console.log("Video ended");
    });
  }
});

var lightboxInlineIframe = GLightbox({
  selector: ".glightbox4",
});

//navbar
/* $(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 640) {
      $(".navscroll").css("background", "transparent");
      $(".navbar a").css("color", "#fff");
    } else {
      $(".navscroll").css("background", "#fff");
      $(".navbar a").css("color", "#000");
      $(".nav-underline .nav-link.active, .nav-underline .show>.nav-link").css(
        "color",
        "#000"
      );
    }
  });
}); */
