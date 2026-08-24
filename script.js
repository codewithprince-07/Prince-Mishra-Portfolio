document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     PRELOADER
  ========================================= */
  const preloader = document.getElementById("preloader");

  window.setTimeout(() => {
    if (preloader) {
      preloader.classList.add("done");
    }
  }, 1500);


  /* =========================================
     TYPING ANIMATION
  ========================================= */
  if (window.Typed) {
    new Typed("#typed", {
      strings: [
        "digital experiences.",
        "full-stack apps.",
        "creative interfaces.",
        "AI-powered ideas."
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1200,
      loop: true
    });
  }


  /* =========================================
     MOBILE NAVIGATION
  ========================================= */
  const nav = document.getElementById("nav");
  const menu = document.getElementById("menu");
  const links = document.getElementById("links");

  if (menu && links) {
    menu.addEventListener("click", () => {

      links.classList.toggle("open");

      if (links.classList.contains("open")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

    });

    links.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        links.classList.remove("open");

        menu.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    });
  }


  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */
  window.addEventListener("scroll", () => {

    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    /* Active navigation link */

    const sections =
      document.querySelectorAll("section[id]");

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 250;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }

    });

    if (links) {

      links.querySelectorAll("a").forEach(link => {

        link.classList.remove("active");

        const href =
          link.getAttribute("href");

        if (href === "#" + currentSection) {
          link.classList.add("active");
        }

      });

    }

  });


  /* =========================================
     DARK / LIGHT MODE
  ========================================= */
  const themeButton =
    document.getElementById("theme");

  function updateThemeIcon() {

    if (!themeButton) return;

    if (document.body.classList.contains("light")) {

      themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    } else {

      themeButton.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

  }


  /* Load saved theme */

  const savedTheme =
    localStorage.getItem("pm-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  updateThemeIcon();


  /* Change theme */

  if (themeButton) {

    themeButton.addEventListener("click", () => {

      document.body.classList.toggle("light");

      if (
        document.body.classList.contains("light")
      ) {

        localStorage.setItem(
          "pm-theme",
          "light"
        );

      } else {

        localStorage.setItem(
          "pm-theme",
          "dark"
        );

      }

      updateThemeIcon();

    });

  }


  /* =========================================
     SCROLL REVEAL ANIMATION
  ========================================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });


  /* =========================================
     CUSTOM CURSOR
  ========================================= */

  const cursorDot =
    document.querySelector(".cursor-dot");

  const cursorRing =
    document.querySelector(".cursor-ring");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let ringX = mouseX;
  let ringY = mouseY;


  window.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    if (cursorDot) {

      cursorDot.style.left =
        mouseX + "px";

      cursorDot.style.top =
        mouseY + "px";

    }

  });


  function animateCursor() {

    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;

    if (cursorRing) {

      cursorRing.style.left =
        ringX + "px";

      cursorRing.style.top =
        ringY + "px";

    }

    requestAnimationFrame(
      animateCursor
    );

  }

  animateCursor();


  /* =========================================
     CURSOR HOVER EFFECT
  ========================================= */

  const interactiveElements =
    document.querySelectorAll(
      "a, button, .skill-item"
    );


  interactiveElements.forEach(element => {

    element.addEventListener(
      "mouseenter",
      () => {

        if (cursorRing) {

          cursorRing.style.width =
            "55px";

          cursorRing.style.height =
            "55px";

        }

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        if (cursorRing) {

          cursorRing.style.width =
            "34px";

          cursorRing.style.height =
            "34px";

        }

      }
    );

  });


  /* =========================================
     MAGNETIC BUTTON EFFECT
  ========================================= */

  const magneticElements =
    document.querySelectorAll(".magnetic");


  magneticElements.forEach(element => {

    element.addEventListener(
      "mousemove",
      event => {

        const rect =
          element.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;


        element.style.transform =
          `translate(${x * 0.18}px,
                     ${y * 0.18}px)`;

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        element.style.transform =
          "translate(0,0)";

      }
    );

  });


  /* =========================================
     3D PROFILE CARD
  ========================================= */

  const photoCard =
    document.getElementById("photoCard");


  if (
    photoCard &&
    window.matchMedia(
      "(min-width: 681px)"
    ).matches
  ) {

    photoCard.addEventListener(
      "mousemove",
      event => {

        const rect =
          photoCard.getBoundingClientRect();

        const x =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;


        photoCard.style.transform =
          `perspective(900px)
           rotateX(${y * -8}deg)
           rotateY(${x * 9}deg)
           rotateZ(1deg)`;

      }
    );


    photoCard.addEventListener(
      "mouseleave",
      () => {

        photoCard.style.transform =
          "rotate(4deg)";

      }
    );

  }


  /* =========================================
     ANIMATED STAR BACKGROUND
  ========================================= */

  const canvas =
    document.getElementById("stars");

  if (canvas) {

    const ctx =
      canvas.getContext("2d");

    let stars = [];


    function resizeCanvas() {

      const dpr =
        window.devicePixelRatio || 1;

      canvas.width =
        window.innerWidth * dpr;

      canvas.height =
        window.innerHeight * dpr;

      canvas.style.width =
        window.innerWidth + "px";

      canvas.style.height =
        window.innerHeight + "px";

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );


      const numberOfStars =
        Math.min(
          150,
          Math.floor(
            window.innerWidth / 8
          )
        );


      stars =
        Array.from(
          {
            length: numberOfStars
          },
          () => {

            return {

              x:
                Math.random() *
                window.innerWidth,

              y:
                Math.random() *
                window.innerHeight,

              radius:
                Math.random() *
                1.3 +
                0.2,

              speed:
                Math.random() *
                0.25 +
                0.05

            };

          }
        );

    }


    function drawStars() {

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );


      stars.forEach(star => {

        star.y -= star.speed;


        if (star.y < 0) {

          star.y =
            window.innerHeight;

        }


        ctx.globalAlpha =
          0.25 +
          Math.sin(
            Date.now() * 0.001 +
            star.x
          ) * 0.15;


        ctx.fillStyle = "#ffffff";


        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();

      });


      requestAnimationFrame(
        drawStars
      );

    }


    resizeCanvas();

    drawStars();


    window.addEventListener(
      "resize",
      resizeCanvas
    );

  }


  /* =========================================
     FOOTER YEAR
  ========================================= */

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* =========================================
     SKILL CARD PARALLAX
  ========================================= */

  const skillItems =
    document.querySelectorAll(
      ".skill-item"
    );


  skillItems.forEach(item => {

    item.addEventListener(
      "mousemove",
      event => {

        const rect =
          item.getBoundingClientRect();

        const x =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;


        item.style.transform =
          `perspective(500px)
           rotateX(${y * -12}deg)
           rotateY(${x * 12}deg)
           scale(1.08)`;

      }
    );


    item.addEventListener(
      "mouseleave",
      () => {

        item.style.transform =
          "";

      }
    );

  });


  /* =========================================
     SMOOTH ANCHOR SCROLL
  ========================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        function(event) {

          const targetId =
            this.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });

});