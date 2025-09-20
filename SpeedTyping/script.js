const typingText = document.querySelector(".typing-text");
const inputField = document.querySelector(".input-field");
const timeTag = document.querySelector(".time b");
const mistakeTag = document.querySelector(".mistake b");
const wpmTag = document.querySelector(".wpm b");
const cpmTag = document.querySelector(".cpm b");
const resetBtn = document.querySelector(".reset-btn");

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed test helps improve your keyboard accuracy.",
  "Practice daily to increase your typing speed and efficiency."
];

let timer, maxTime = 60, timeLeft = maxTime;
let charIndex = 0, mistakes = 0, isTyping = false;

function loadParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[randomIndex].split("").forEach(char => {
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inputField.value.split("")[charIndex];

  if (charIndex < characters.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect", "active");
        characters[charIndex].classList.add("active");
      }
    } else {
      if (characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      characters[charIndex].classList.remove("active");
      charIndex++;
      if (charIndex < characters.length) {
        characters[charIndex].classList.add("active");
      }
    }

    let wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = wpm;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inputField.value = "";
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = 0;
  isTyping = false;
  inputField.value = "";
  timeTag.innerText = timeLeft;
  mistakeTag.innerText = 0;
  wpmTag.innerText = 0;
  cpmTag.innerText = 0;
}

inputField.addEventListener("input", initTyping);
resetBtn.addEventListener("click", resetGame);

loadParagraph();
