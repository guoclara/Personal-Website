//controls the color toggling between black/grey and yellow with the click of the lamp
function navAppear(){
  const lamp = document.querySelector(".lamp");
  const initials = document.querySelector(".initials");
  const navLinks = document.querySelector(".nav-links");
  const icons = document.querySelectorAll(".icons i");

  if(navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
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

//activates changeColor when on landing page
document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("home")) {
    $(".burger").click(changeColor)
  }
})


/*
function dropdownToggleScroll() {
  if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
  } else {
      document.body.style.overflow = "hidden";
  }
}

//toggles top left home button color between red and white
//red when the nav menu is activated and white when not
function changeColor() {
  const logo = document.getElementById('homeIcon');
  const text = document.querySelector(".homeSection");
  const burgerDivs = document.querySelectorAll("div.burger > div");

  if (logo.getAttribute('src')==="images/csaLogoWhite.png"){
    setTimeout(delayLogoChange = () => { logo.setAttribute('src', "images/csaLogo.png");}, 600);
    setTimeout(delayTextChange = () => { text.style.color = "#CF2127";}, 600);
    // logo.setAttribute('src', "images/csaLogo.png");
    // text.style.color = "#CF2127";

    // Changes each burger line to red when opening
    burgerDivs.forEach((line) => {
      line.style.backgroundColor = "#CF2127";
    })
  } else {
    logo.setAttribute('src', "images/csaLogoWhite.png");
    text.style.color = "white";

    // Changes each burger line back to white when exiting
    burgerDivs.forEach((line) => {
      line.style.backgroundColor = "white";
    })
  }
}


//gets rid of page behind the dropdown when nav is active on home page, fixes overflow
function displayLanding() {
  const homeContainer = document.querySelector(".homePageContainer");
  const welcomeStatement = document.querySelector(".welcomeStatement");
  if (homeContainer.style.display === "none") {
    homeContainer.style.display = "flex";
    welcomeStatement.style.display = "block";
  } else {
    setTimeout(delayHomePageChange = () => { homeContainer.style.display = "none";}, 600);
    setTimeout(delayWelcomeStatementChange = () => { welcomeStatement.style.display = "none";}, 600);
  }
}

//gets rid of page behind the dropdown when nav is active on membership, contact, events
function displayMajority(){
  const container = document.querySelector(".container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    setTimeout(delayPageChange = () => { container.style.display = "none";}, 600);
  }
}

//gets rid of page behind the dropdown when nav is active on thank you page, fixes overflow
function displayThankYou() {
  const thankYouContainer = document.querySelector(".thankYouContainer");
  if (thankYouContainer.style.display === "none") {
    thankYouContainer.style.display = "block";
  } else {
    setTimeout(delayThankYouChange = () => { thankYouContainer.style.display = "none";}, 600);
  }
}
*/