function addHamburgerMenuHandler() {
  const hamburgerEl = document.getElementById("burger");
  hamburgerEl.addEventListener("click", function (event) {
    event.preventDefault();
    const navbarDropdownElArr = [
      ...document.getElementsByClassName("dropdown"),
    ];
    //const navbar = document.querySelector("nav");
    navbarDropdownElArr.forEach((el) => {
      console.log(el.style);
      if (el.style.display === "block") {
        el.style.setProperty("display", "none");
        //navbar.style.setProperty("height", "auto");
      } else {
        el.style.setProperty("display", "block");
        //navbar.style.setProperty("height", "100%");
        //console.log(navbar);
      }
    });
  });
}

export default addHamburgerMenuHandler;
