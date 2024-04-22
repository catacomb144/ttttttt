const febHolidays = [
    "🩺 Dr. FALAK WANI ⚕️👩‍⚕️ ,",
    "First of all, your are sweet ❤️",
    "You're so cute 🦋🧿 ",
    "And of course...",
    "My Best friend 🥰 ",
    "I will always be there for you🐾.",
    "No matter how far we are🥰",
    "You're the prettiest🧸, cutest🐼, funniest😊,",
    "Most Caring , loving , helping  🧕",
    "In one word, you're just perfect.😍",
    "I'm very happy beacuse you are with me 🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you🙇",
    "There's no one better than you❤️",
    "You're the best !👌!",
    "Or should I say, You're my favorite Glitch👾⚡",
    "You're my favorite bug🐞- a happy glitch in the system of life",
    "In the binary of Life, you're my constant1️⃣, ",
    "You're Cached in my memory 📁💿,",
    "You're my favorite API - easy to call on and always reliable🔗",
    "You're my favorite medicine💊sweetening life's bitter moments",
    "You're my favorite download in this vast network of life🌐.",
    "In the algorithm of my life, you're the optimal solution 🖧🕸️",
    "You're my favorite part of every day 🫀",
    "You're my favorite exception in a world of error handling🤖",
    "With you, everything is better💡✨.",
    "Logged in to forever 🔐",
    "Touhi chuu warya asal 🍁🌙,",
    "YOU ARE MY FAVOURITE ❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  