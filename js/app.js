// ================== Elements ==================
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playButton = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");
const currentTime = document.querySelector(".current-time");
const processBar = document.querySelector(".process-bar");
const musicsContainer = document.querySelector(".musics-container");
const volumeBtn = document.querySelector(".volume-handler button");
const volumeIcon = volumeBtn.querySelector("i");

// ================== Musics Data ==================
const musics = [
  {
    id: 1,
    title: "پژواک‌های نیمه‌شب - لونا اسکای",
    src: "./public/audios/1.mp3",
    cover: "./public/images/1.jpg",
  },
  {
    id: 2,
    title: "امواج فردا - افق نقره‌ای",
    src: "./public/audios/2.mp3",
    cover: "./public/images/2.jpg",
  },
  {
    id: 3,
    title: "خاکسترهای فروزان - دره اسکارلت",
    src: "./public/audios/3.mp3",
    cover: "./public/images/3.jpg",
  },
  {
    id: 4,
    title: "خاکسترهای فروزان - دره اسکارلت",
    src: "./public/audios/4.mp3",
    cover: "./public/images/4.jpg",
  },
  {
    id: 5,
    title: "زمزمه‌های باد - اورلیا نایت",
    src: "./public/audios/5.mp3",
    cover: "./public/images/5.png",
  },
  {
    id: 6,
    title: "تعقیب غروب - خیال طلایی",
    src: "./public/audios/6.mp3",
    cover: "./public/images/6.jpg",
  },
];

// ================== Render Musics ==================
function showMusics() {
  musics.forEach((musicObj) => {
    musicsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <article class="music-card">
        <header>
          <img src="${musicObj.cover}" alt="کاور موزیک" />
          <div class="play-music">
            <button class="play-btn" data-src="${musicObj.src}">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </header>
        <main>
          <p>${musicObj.title}</p>
        </main>
      </article>
      `
    );
  });
}

showMusics();

// ================== Play Music ==================
function resetPlayIcons() {
  document.querySelectorAll(".play-btn i").forEach((icon) => {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  });
}

musicsContainer.addEventListener("click", (e) => {
  const playBtn = e.target.closest(".play-btn");
  if (!playBtn) return;

  const src = playBtn.dataset.src;
  const icon = playBtn.querySelector("i");

  if (music.src.includes(src) && !music.paused) {
    music.pause();
    icon.classList.replace("fa-pause", "fa-play");
    playIcon.classList.replace("fa-pause", "fa-play");
    return;
  }

  music.src = src;
  music.play();

  resetPlayIcons();
  icon.classList.replace("fa-play", "fa-pause");
  playIcon.classList.replace("fa-play", "fa-pause");
});

// ================== Main Play Button ==================
playButton.addEventListener("click", () => {
  if (!music.src) return;

  if (music.paused) {
    music.play();
    playIcon.classList.replace("fa-play", "fa-pause");
  } else {
    music.pause();
    playIcon.classList.replace("fa-pause", "fa-play");
    resetPlayIcons();
  }
});

// ================== Volume ==================
let previousVolume = music.volume || 1; // برای ذخیره ولوم قبل از Mute

// تنظیم صدا با کلیک روی نوار
volumeCard.addEventListener("click", (e) => {
  const percent = e.offsetX / volumeCard.offsetWidth;
  music.volume = percent;
  volume.style.width = percent * 100 + "%";

  // اگر صدا قبلاً Mute بوده، آیکن برگرده
  if (music.muted && percent > 0) {
    music.muted = false;
    volumeIcon.classList.replace("fa-volume-up-mute", "fa-volume-up");
  }
});

// Mute / Unmute با کلیک روی آیکن
volumeBtn.addEventListener("click", () => {
  if (!music.muted) {
    previousVolume = music.volume; // ذخیره ولوم قبل از Mute
    music.muted = true;
    volumeIcon.classList.replace("fa-volume-up", "fa-volume-up-mute");
    volume.style.width = "0%";
  } else {
    music.muted = false;
    volumeIcon.classList.replace("fa-volume-up-mute", "fa-volume-up");
    volume.style.width = previousVolume * 100 + "%";
  }
});

// ================== Progress ==================
music.addEventListener("timeupdate", () => {
  if (!music.duration) return;
  const percent = (music.currentTime / music.duration) * 100;
  currentTime.style.width = percent + "%";
});

processBar.addEventListener("click", (e) => {
  if (!music.duration) return;
  const percent = e.offsetX / processBar.offsetWidth;
  music.currentTime = percent * music.duration;
});
