// function toggleNavbar(navBarState = false) {
//   let navlink = document.querySelector(".menu");
//   if (navBarState) {
//     const isMobile = window.innerWidth <= 800;
//     if (isMobile) {
//       navlink.style.top = "120px";
//     } else {
//       navlink.style.top = "0";
//     }
//   } else {
//     navlink.style.top = "-150vh";
//   }
// }

// toggle by click on menu btn

// when active menu icon should be close icon and normal one when closed

document.querySelector(".icons").addEventListener("click", () => {
  const icons = document.querySelector(".icons");
  let navlink = document.querySelector(".menu");
  const navPosition = Number(
    (navlink.style.top ?? "0").replace(/[a-zA-Z]/g, "")
  );
  /// returns true if open or in view
  const navBarState = navPosition >= 0;
  if (!navBarState || !navlink.style.top) {
    icons.children[0].className = "close";
    icons.children[1].className = "hamburger";
    const isMobile = window.innerWidth <= 800;
    if (isMobile) {
      navlink.style.top = "120px";
    } else {
      navlink.style.top = "0";
    }
  } else {
    icons.children[1].className = "close";
    icons.children[0].className = "hamburger";
    navlink.style.top = "-150vh";
  }
});
