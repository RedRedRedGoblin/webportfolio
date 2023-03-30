const sections = document.querySelectorAll(".mainSection");
const navLinks = document.querySelectorAll(".navbar ul li a");
const nav = document.querySelector('#navbar');

            if (window.scrollY >= 1) {
                nav.classList.add('scrolled')
            }

            window.onscroll = () => {
            if (this.scrollY <= 1) {
                nav.classList.remove('scrolled')
            } else {
                nav.classList.add('scrolled')
            }
        };



window.addEventListener("scroll", highlightNavLink);
const h2Elements = document.querySelectorAll("div h2");

function highlightH2() {
const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const sectionTop = section.getBoundingClientRect().top + window.innerHeight * 0.01;
  const h2 = h2Elements[i];
  if (sectionTop <= scrollPos && sectionTop + section.offsetHeight > scrollPos) {
    h2.classList.add("h2-active");
  } else {
    h2.classList.remove("h2-active");
  }
}
}

window.addEventListener("scroll", highlightH2);








  
