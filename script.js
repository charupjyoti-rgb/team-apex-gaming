```javascript
// MOBILE MENU

const menuButton =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// CLOSE MOBILE MENU AFTER CLICKING LINK

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


// SCROLL ANIMATION

const elements =
    document.querySelectorAll(
        ".player-card, .video-card, .timeline-item, .match-row"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
```
