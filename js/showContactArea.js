function showContactArea(component) {
  var contactArea = document.querySelector(".section-estimate-contact-us");
  var sectionEstimate = document.querySelector(".section-estimate");
  var button = document.querySelector(".button-contact-us");
  component.style.display = "none";
  contactArea.style.display = "flex";
  if (document.querySelector(".section-estimate").offsetHeight === 1300) {
    sectionEstimate.style.height = "1800px";
    window.scrollTo(0, 1800);
  } else if (
    document.querySelector(".section-estimate").offsetHeight === 3020
  ) {
    sectionEstimate.style.height = "3580px";
    document.querySelector(".card").style.top = "3620px";
    window.scrollTo(0, 2800);
  }
}
