// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Fixed Header
  let header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add("header_has-bg");
    } else {
      header.classList.remove("header_has-bg");
    }
  });

  // Darkmode + localStorage

  const themeToggle = document.querySelector('.switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  themeToggle.addEventListener("change", switchTheme, false);

  // Tabs switcher

  // var tab;
  // var tabContent;

  // window.onload = function () {
  //   tabContent = document.getElementsByClassName("tabContent");
  //   tab = document.getElementsByClassName("tab");
  //   hideTabsContent(1);
  // };

  // document.getElementById("tabs").onclick = function (event) {
  //   var target = event.target;
  //   if (target.className == "tab") {
  //     for (var i = 0; i < tab.length; i++) {
  //       if (target == tab[i]) {
  //         showTabsContent(i);
  //         break;
  //       }
  //     }
  //   }
  // };

  // function hideTabsContent(a) {
  //   for (var i = a; i < tabContent.length; i++) {
  //     tabContent[i].classList.remove("show");
  //     tabContent[i].classList.add("hide");
  //     tab[i].classList.remove("whiteborder");
  //   }
  // }

  // function showTabsContent(b) {
  //   if (tabContent[b].classList.contains("hide")) {
  //     hideTabsContent(0);
  //     tab[b].classList.add("whiteborder");
  //     tabContent[b].classList.remove("hide");
  //     tabContent[b].classList.add("show");
  //   }
  // }

  // Scroll to Anchor

  (function () {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector(".header").clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };

    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll");
      links.forEach((each) => {
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  })();

  // Open and Close modal Window

  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const close = document.getElementsByClassName("modal__close-btn")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };
  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Burger menu

let hamb = document.querySelector(".burger");
let navMenu = document.querySelector(".header__menu");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}
