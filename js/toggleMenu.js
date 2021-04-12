function toggleMenu() {

  

const isChecked = document.getElementById("btn-menu-cellphone").checked;

if (isChecked) {
  document.getElementById("menu").style.display = "flex";
  document.querySelector(".logo").style.marginTop = "20px";
  document.getElementById("menuToggle").style.padding = "10px 0px 90px 32px";
} else {
  document.getElementById("menu").style.display = "none";
  document.querySelector(".logo").style.marginTop = "8px";
  document.getElementById("menuToggle").style.padding = "10px 0px 10px 0px";
  document.querySelector(".logo").style.marginLeft = "10px";
}




}