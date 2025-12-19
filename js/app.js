const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playButton = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");
const currentTime = document.querySelector(".current-time");
const processBar = document.querySelector(".process-bar");

playBtns.forEach(function (playBtn) {
  playBtn.addEventListener("click", function () {
    const mainMusicSrc = playBtn.dataset.src;
    music.setAttribute("src", mainMusicSrc);
    music.play();

    if (playIcon.className.includes("fa-play")) {
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    }

    playBtns.forEach(function (playBtn) {
      const playOrPauseIcon = playBtn.querySelector("i");
      playOrPauseIcon.classList.remove("fa-pause");
      playOrPauseIcon.classList.add("fa-play");
    });

    const playOrPauseIcon = playBtn.querySelector("i");
    playOrPauseIcon.classList.remove("fa-play");
    playOrPauseIcon.classList.add("fa-pause");
  });
});

playButton.addEventListener("click", function () {
  if (playIcon.className.includes("fa-play")) {
    music.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    music.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }

  const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
  if (musicPauseIcon) {
    musicPauseIcon.classList.remove("fa-pause");
    musicPauseIcon.classList.add("fa-play");
  }
});

volumeCard.addEventListener("click", function (event) {
  music.volume = event.offsetX / volumeCard.offsetWidth;
  volume.style.width = event.offsetX + "px";
});

// حرکت نوار زمان
music.addEventListener("timeupdate", function () {
  if (!music.duration) return;
  const percent = (music.currentTime / music.duration) * 100;
  currentTime.style.width = percent + "%";
});

// کلیک روی نوار زمان
processBar.addEventListener("click", function (event) {
  if (!music.duration) return;
  const percent = event.offsetX / processBar.offsetWidth;
  music.currentTime = percent * music.duration;
});
