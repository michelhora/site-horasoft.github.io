let menuSection = document.querySelectorAll(".navbar ul li");

window.onscroll = () => {
  let mainSection = document.querySelectorAll("main section");

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;
    if (rect < window.innerHeight - 400) {
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
