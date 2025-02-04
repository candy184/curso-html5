function setupHistoryClicks() {
  addClicker(document.getElementById("photonext"));
  addClicker(document.getElementById("photoprev"));
}

function addClicker(link) {
  link.addEventListener("click", function (e) {
    swapPhoto(link.href);
    history.pushState(null, null, link.href);
    e.preventDefault();
  });
}

function swapPhoto(href) {
  const photoData = {
    "image1.html": { src: "image1.jpg", caption: "Imagen 1" },
    "image2.html": { src: "image2.jpg", caption: "Imagen 2" }
  };

  const fileName = href.split("/").pop();
  const newPhoto = photoData[fileName];

  if (newPhoto) {
    document.getElementById("photoimg").src = newPhoto.src;
    document.getElementById("photoimg").alt = newPhoto.caption;
    document.querySelector("figcaption").textContent = newPhoto.caption;
  }
}

window.addEventListener("popstate", function () {
  swapPhoto(location.pathname);
});

setupHistoryClicks();
