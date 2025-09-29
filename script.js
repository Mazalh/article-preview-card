const shareBtn = document.getElementById("share-btn");
const shareMenu = document.getElementById("share-menu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
});
