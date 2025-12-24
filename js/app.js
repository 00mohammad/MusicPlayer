// ================== DATA ==================
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

const playlist = [];
let currentMusicSrc = null;

// ================== ELEMENTS ==================
const music = document.querySelector("audio");
const playButton = document.querySelector(".play-button");
const playIcon = document.querySelector(".play-icon");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");
const processBar = document.querySelector(".process-bar");
const currentTimeBar = document.querySelector(".current-time");

// ================== SHOW MUSICS ==================
function showMusics() {
  const musicsContainer = document.querySelector(".musics-container");
  musicsContainer.innerHTML = "";

  musics.forEach((musicObj) => {
    musicsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <article class="music-card">
        <header>
          <img src="${musicObj.cover}" alt="کاور موزیک" />
          <div class="play-music">
            <button class="play-music-btn play-btn" data-src="${musicObj.src}">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </header>
        <main>
          <p>${musicObj.title}</p>
        </main>
        <footer>
          <button class="bookmark ${musicObj.isInPlaylist ? "bookmarked" : ""}"
            onclick="addToPlaylist(${musicObj.id})">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </footer>
      </article>
      `
    );
  });

  initPlayButtons();
}

// ================== PLAY BUTTONS ==================
function initPlayButtons() {
  const playBtns = document.querySelectorAll(".play-btn");

  playBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const src = btn.dataset.src;

      if (currentMusicSrc !== src) {
        currentMusicSrc = src;
        music.src = src;
        music.play();
        resetAllPlayIcons();
        btn.querySelector("i").classList.replace("fa-play", "fa-pause");
        currentTimeBar.style.width = "0%";
      } else {
        togglePlayPause();
      }

      syncMainPlayIcon();
    });
  });
}

// ================== MAIN PLAY BUTTON ==================
playButton.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (!music.src) return;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }

  syncMainPlayIcon();
  resetAllPlayIcons();
}

// ================== SYNC ICONS ==================
function syncMainPlayIcon() {
  if (music.paused) {
    playIcon.classList.replace("fa-pause", "fa-play");
  } else {
    playIcon.classList.replace("fa-play", "fa-pause");
  }
}

function resetAllPlayIcons() {
  document.querySelectorAll(".play-btn i").forEach((icon) => {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  });
}

// ================== PROGRESS BAR ==================
music.addEventListener("timeupdate", () => {
  if (!music.duration) return;
  const percent = (music.currentTime / music.duration) * 100;
  currentTimeBar.style.width = `${percent}%`;
});

processBar.addEventListener("click", (e) => {
  if (!music.duration) return;
  const width = processBar.offsetWidth;
  music.currentTime = (e.offsetX / width) * music.duration;
});

// ================== VOLUME ==================
volumeCard.addEventListener("click", (e) => {
  const width = volumeCard.offsetWidth;
  const vol = e.offsetX / width;
  music.volume = Math.min(Math.max(vol, 0), 1);
  volume.style.width = `${vol * 100}%`;
});

// ================== MUSIC END ==================
music.addEventListener("ended", () => {
  playIcon.classList.replace("fa-pause", "fa-play");
  currentTimeBar.style.width = "0%";
  resetAllPlayIcons();
});

// ================== PLAYLIST ==================
function addToPlaylist(id) {
  if (playlist.some((m) => m.id === id)) return;

  const musicItem = musics.find((m) => m.id === id);
  playlist.push(musicItem);
  musicItem.isInPlaylist = true;

  showPlaylist();
  showMusics();
}

function showPlaylist() {
  const playlistContainer = document.querySelector(".playlist");
  playlistContainer.innerHTML = "";

  playlist.forEach((music) => {
    playlistContainer.insertAdjacentHTML(
      "beforeend",
      `
      <article class="music-card">
        <header>
          <img src="${music.cover}" />
          <button class="play-btn" data-src="${music.src}">
            <i class="fa-solid fa-play"></i>
          </button>
        </header>
        <main><p>${music.title}</p></main>
      </article>
      `
    );
  });

  initPlayButtons();
}

// ================== INIT ==================
showMusics();
