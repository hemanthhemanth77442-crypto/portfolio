/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e) {

    cursorGlow.style.left =
        e.clientX + "px";

    cursorGlow.style.top =
        e.clientY + "px";

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

menuBtn.addEventListener("click", function() {

    nav.classList.toggle("active");

});


/* Close mobile menu */

document.querySelectorAll("#nav a")
.forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if(entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


document.querySelectorAll(".reveal")
.forEach(function(element) {

    observer.observe(element);

});


/* =========================
   3D HERO CARD
========================= */

const heroCard =
    document.getElementById("heroCard");


heroCard.addEventListener(
    "mousemove",
    function(e) {

        const rect =
            heroCard.getBoundingClientRect();

        const x =
            (e.clientX - rect.left)
            / rect.width - 0.5;

        const y =
            (e.clientY - rect.top)
            / rect.height - 0.5;


        const rotateX =
            y * -10;

        const rotateY =
            x * 12;


        heroCard.style.transform =
            `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
            `;

    }
);


heroCard.addEventListener(
    "mouseleave",
    function() {

        heroCard.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    }
);


/* =========================
   SKILL CARD 3D EFFECT
========================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach(function(card) {

    card.addEventListener(
        "mousemove",
        function(e) {

            const rect =
                card.getBoundingClientRect();

            const x =
                (e.clientX - rect.left)
                / rect.width - 0.5;

            const y =
                (e.clientY - rect.top)
                / rect.height - 0.5;


            card.style.transform =
                `
                perspective(700px)
                rotateX(${y * -6}deg)
                rotateY(${x * 7}deg)
                translateY(-8px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform = "";

        }
    );

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("#nav a");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if(window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.style.color = "";

        if(
            link.getAttribute("href")
            === "#" + current
        ) {

            link.style.color = "#ffffff";

        }

    });

});