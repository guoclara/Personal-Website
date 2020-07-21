//controls the color toggling between black/grey and yellow with the click of the lamp
function navAppear(){
  const lamp = document.querySelector(".lamp");
  const initials = document.querySelector(".initials");
  const navLinks = document.querySelector(".nav-links");
  const icons = document.querySelectorAll(".icons i");
  const text = document.getElementById("clickDirection");

  console.log(text.style.display);
  if(navLinks.style.display === "none") {
    navLinks.style.display = "flex";
    text.style.display = "none";
  } else {
    navLinks.style.display = "none";
    text.style.display = "flex";
  }
  if(initials.getAttribute('src')==="images/initialsNoShadow.png"){
    lamp.setAttribute('src', "images/lamp.png");
    initials.setAttribute('src', "images/initials.png");
    // icons.forEach(icon => {
    //     icon.style.color = '#FFE41D';
    //   });
    icons.forEach(icon => {
      icon.style.display = 'flex';
    });
  } else {
    lamp.setAttribute('src', "images/lampOff.png");
    initials.setAttribute('src', "images/initialsNoShadow.png");
    // icons.forEach(icon => {
    //   icon.style.color = 'black';
    // });
    icons.forEach(icon => {
      icon.style.display = 'none';
    });
  }
}

//pulls down the string of the lamp 
function hover(element) {
  const lamp = document.querySelector(".lamp");
  if (element.getAttribute('src')==="images/initialsNoShadow.png"){
    setTimeout(delayLogoChange = () => {lamp.setAttribute('src', "images/lampOffPull.png");}, 25);
  } else {
    lamp.setAttribute('src', "images/lampOnPull.png");
  }
}

//pulls back the string of the lamp
function unhover(element) {
  const lamp = document.querySelector(".lamp");
  if (element.getAttribute('src')==="images/initialsNoShadow.png"){
    setTimeout(delayLogoChange = () => {lamp.setAttribute('src', "images/lampOff.png");}, 25);
  } else {
    lamp.setAttribute('src', "images/lamp.png");
  }
}

document.addEventListener("DOMContentLoaded", function(){
  $(".lamp").click(navAppear)
})