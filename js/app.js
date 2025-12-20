// const playBtns = document.querySelectorAll(".play-btn");
// const music = document.querySelector("audio");
// const playIcon = document.querySelector(".play-icon");
// const playButton = document.querySelector(".play-button");
// const volumeCard = document.querySelector(".volume-card");
// const volume = document.querySelector(".volume");
// const currentTime = document.querySelector(".current-time");
// const processBar = document.querySelector(".process-bar");

// playBtns.forEach(function (playBtn) {
//   playBtn.addEventListener("click", function () {
//     const mainMusicSrc = playBtn.dataset.src;
//     music.setAttribute("src", mainMusicSrc);
//     music.play();

//     if (playIcon.className.includes("fa-play")) {
//       playIcon.classList.remove("fa-play");
//       playIcon.classList.add("fa-pause");
//     }

//     playBtns.forEach(function (playBtn) {
//       const playOrPauseIcon = playBtn.querySelector("i");
//       playOrPauseIcon.classList.remove("fa-pause");
//       playOrPauseIcon.classList.add("fa-play");
//     });

//     const playOrPauseIcon = playBtn.querySelector("i");
//     playOrPauseIcon.classList.remove("fa-play");
//     playOrPauseIcon.classList.add("fa-pause");
//   });
// });

// playButton.addEventListener("click", function () {
//   if (playIcon.className.includes("fa-play")) {
//     music.play();
//     playIcon.classList.remove("fa-play");
//     playIcon.classList.add("fa-pause");
//   } else {
//     music.pause();
//     playIcon.classList.remove("fa-pause");
//     playIcon.classList.add("fa-play");
//   }

//   const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
//   if (musicPauseIcon) {
//     musicPauseIcon.classList.remove("fa-pause");
//     musicPauseIcon.classList.add("fa-play");
//   }
// });

// volumeCard.addEventListener("click", function (event) {
//   music.volume = event.offsetX / volumeCard.offsetWidth;
//   volume.style.width = event.offsetX + "px";
// });

// // حرکت نوار زمان
// music.addEventListener("timeupdate", function () {
//   if (!music.duration) return;
//   const percent = (music.currentTime / music.duration) * 100;
//   currentTime.style.width = percent + "%";
// });

// // کلیک روی نوار زمان
// processBar.addEventListener("click", function (event) {
//   if (!music.duration) return;
//   const percent = event.offsetX / processBar.offsetWidth;
//   music.currentTime = percent * music.duration;
// });

// const musics = [
//   {
//     id: 1,
//     title: "پژواک‌های نیمه‌شب - لونا اسکای",
//     src: "./public/audios/1.mp3",
//     cover: "./public/images/1.jpg",
//   },
//   {
//     id: 2,
//     title: "امواج فردا - افق نقره‌ای",
//     src: "./public/audios/2.mp3",
//     cover: "./public/images/2.jpg",
//   },
//   {
//     id: 3,
//     title: "خاکسترهای فروزان - دره اسکارلت",
//     src: "./public/audios/3.mp3",
//     cover: "./public/images/3.jpg",
//   },
//   {
//     id: 4,
//     title: "خاکسترهای فروزان - دره اسکارلت",
//     src: "./public/audios/4.mp3",
//     cover: "./public/images/4.jpg",
//   },
//   {
//     id: 5,
//     title: "زمزمه‌های باد - اورلیا نایت",
//     src: "./public/audios/5.mp3",
//     cover: "./public/images/5.png",
//   },
//   {
//     id: 6,
//     title: "تعقیب غروب - خیال طلایی",
//     src: "./public/audios/6.mp3",
//     cover: "./public/images/6.jpg",
//   },
// ];

// function showMusics() {
//   const musicsContainer = document.querySelector(".musics-container");

//   musics.forEach(function (musicObj) {
//     musicsContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//       <article class="music-card">
//         <header>
//           <img src="${musicObj.cover}" alt="کاور موزیک" />
//           <div class="play-music">
//             <button class="play-music-btn play-btn" data-src="${musicObj.src}">
//               <i class="fa-solid fa-play"></i>
//             </button>
//           </div>
//         </header>
//         <main>
//           <p>${musicObj.title}</p>
//         </main>
//         <footer>
//           <button class="bookmark">
//             <i class="fa-regular fa-bookmark"></i>
//           </button>
//         </footer>
//       </article>
//       `
//     );
//   });

//   const playBtns = document.querySelectorAll(".play-btn");
//   const music = document.querySelector("audio");
//   const playIcon = document.querySelector(".play-icon");
//   const playButton = document.querySelector(".play-button");
//   const volumeCard = document.querySelector(".volume-card");
//   const volume = document.querySelector(".volume");

//   playBtns.forEach(function (playBtn) {
//     playBtn.addEventListener("click", function (event) {
//       const mainMusicSrc = event.target.dataset.src;
//       music.setAttribute("src", mainMusicSrc);
//       music.play();

//       if (playIcon.className.includes("fa-play")) {
//         playIcon.classList.remove("fa-play");
//         playIcon.classList.add("fa-pause");
//       }

//       playBtns.forEach(function (playBtn) {
//         const playOrPauseIcon = playBtn.querySelector("i");
//         playOrPauseIcon.classList.remove("fa-pause");
//         playOrPauseIcon.classList.add("fa-play");
//       });

//       const playOrPauseIcon = playBtn.querySelector("i");
//       playOrPauseIcon.classList.remove("fa-play");
//       playOrPauseIcon.classList.add("fa-pause");
//     });
//   });

//   playButton.addEventListener("click", function () {
//     if (playIcon.className.includes("fa-play")) {
//       music.play();
//       playIcon.classList.remove("fa-play");
//       playIcon.classList.add("fa-pause");
//     } else {
//       music.pause();
//       playIcon.classList.remove("fa-pause");
//       playIcon.classList.add("fa-play");
//     }

//     const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
//     if (musicPauseIcon) {
//       musicPauseIcon.classList.remove("fa-pause");
//       musicPauseIcon.classList.add("fa-play");
//     }
//   });

//   volumeCard.addEventListener("click", function (event) {
//     music.volume = event.offsetX / 100;
//     volume.style.width = `${event.offsetX}px`;
//   });
// }
