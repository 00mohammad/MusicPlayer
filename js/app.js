const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playButton = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");

playBtns.forEach(function (playBtn) {
  playBtn.addEventListener("click", function (event) {
    const mainMusicSrc = event.target.dataset.src;
    music.setAttribute("src", mainMusicSrc);
    music.play();
    if (playIcon.className.includes("fa-play")) {
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    }
  });
});

playButton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    music.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
  playBtns.forEach(function (playBtn) {
    const playOrpauseIcon = playBtn.querySelector("i");
    playOrpauseIcon.className = remove("fa-pause");
    playOrpauseIcon.className = add("fa-play");
  });
  
  const playOrpauseIcon = playBtn.querySelector("i");
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
});

volumeCard.addEventListener("click", function (event) {
  music.volume = event.offsetX / 100;
  volume.style.width = `${event.offsetX}px`;
});
