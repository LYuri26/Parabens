$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});

$(document).ready(function () {
  // Configuração do slideshow de GIFs de fundo
  function setupBackgroundSlideshow() {
    const gifs = [
      "gifs/7ff58d0601a065be53690227a380c416.gif",
      "gifs/639f523a4803c6f00f51401b3158d452.gif",
      "gifs/8687176_1a01b.gif",
      "gifs/b135866d24b0203343d1d48e3e448c2a.gif",
      "gifs/happy-birthday-feliz-aniversario.gif",
      "gifs/PARABENS_2.gif",
    ];

    // Cria um elemento div para o slideshow
    const slideshow = document.createElement("div");
    slideshow.id = "bg-slideshow";
    slideshow.style.position = "fixed";
    slideshow.style.top = "0";
    slideshow.style.left = "0";
    slideshow.style.width = "100%";
    slideshow.style.height = "100%";
    slideshow.style.zIndex = "-1";
    slideshow.style.background =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";

    // Adiciona cada GIF como um elemento de slide
    gifs.forEach((gif, index) => {
      const slide = document.createElement("div");
      slide.className = "bg-slide";
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.left = "0";
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.backgroundImage = `url('${gif}')`;
      slide.style.backgroundRepeat = "no-repeat";
      slide.style.backgroundPosition = "center";
      slide.style.opacity = "0";
      slide.style.transition = "opacity 1s ease-in-out";

      // Posicionamento diferente para cada GIF
      if (index === 0) slide.style.backgroundPosition = "left 10% top 10%";
      if (index === 1) slide.style.backgroundPosition = "right 5% center";
      if (index === 2) slide.style.backgroundPosition = "left 15% bottom 20%";
      if (index === 3) slide.style.backgroundPosition = "right 10% bottom 10%";
      if (index === 4) slide.style.backgroundPosition = "center top";
      if (index === 5) slide.style.backgroundPosition = "70% 80%";

      // Tamanho diferente para cada GIF
      if (index === 0)
        slide.style.backgroundSize = $(window).width() < 768 ? "80px" : "150px";
      if (index === 1)
        slide.style.backgroundSize = $(window).width() < 768 ? "90px" : "180px";
      if (index === 2)
        slide.style.backgroundSize =
          $(window).width() < 768 ? "100px" : "220px";
      if (index === 3)
        slide.style.backgroundSize =
          $(window).width() < 768 ? "110px" : "250px";
      if (index === 4)
        slide.style.backgroundSize =
          $(window).width() < 768 ? "200px" : "350px";
      if (index === 5)
        slide.style.backgroundSize =
          $(window).width() < 768 ? "200px" : "200px";

      slideshow.appendChild(slide);
    });

    // Remove o slideshow anterior se existir
    const oldSlideshow = document.getElementById("bg-slideshow");
    if (oldSlideshow) oldSlideshow.remove();

    document.body.appendChild(slideshow);

    // Inicia a animação
    animateBackgroundSlideshow();
  }

  // Controla a animação do slideshow
  function animateBackgroundSlideshow() {
    const slides = $(".bg-slide");
    let currentSlide = 0;

    // Mostra o primeiro slide
    slides.eq(0).css("opacity", "1");

    // Alterna os slides a cada 5 segundos
    setInterval(() => {
      slides.eq(currentSlide).css("opacity", "0");
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).css("opacity", "1");
    }, 5000);
  }

  // Configura o slideshow quando a página carrega
  setupBackgroundSlideshow();

  // Reconfigura quando a janela é redimensionada
  $(window).resize(function () {
    setupBackgroundSlideshow();
  });

  var vw;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
    $("#b88").animate({ top: 240, left: vw + 350 }, 500);
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });

  $("#play").click(function () {
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }

  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }

  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }

  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }

  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }

  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  function loopEight() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b8").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopEight();
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7,#b8").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    loopEight();

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    vw = $(window).width() / 2;

    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8").stop();
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");
    $("#b8").attr("id", "b88");
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
    $("#b88").animate({ top: 240, left: vw + 350 }, 500);
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $(this)
      .fadeOut("slow")
      .delay(1000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    // Animação inicial dos parágrafos
    const paragraphs = $(".message p");
    let delay = 0;

    paragraphs.each(function () {
      $(this).css({
        opacity: "0",
        transition: "opacity 2.5s ease-in-out",
      });

      setTimeout(() => {
        $(this).css("opacity", "1");
      }, delay);

      delay += 100; // 2.5 segundos entre cada parágrafo
    });

    // Versão ultra lenta da mensagem
    function msgLoop(i) {
      $("p:nth-child(" + i + ")")
        .fadeOut(3000) // 3 segundos para desaparecer
        .delay(2500) // 2.5 segundos de pausa
        .promise()
        .done(function () {
          i = i + 1;
          $("p:nth-child(" + i + ")")
            .fadeIn(2000) // 3 segundos para aparecer
            .delay(2000); // 3 segundos de exibição
          if (i == 50) {
            $("p:nth-child(49)")
              .fadeOut(1000)
              .promise()
              .done(function () {
                $(".cake").fadeIn("fast");
              });
          } else {
            msgLoop(i);
          }
        });
    }

    // Inicia o loop da mensagem
    msgLoop(0);
  });
});
