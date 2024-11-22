let boton1 = document.getElementById("boton1");
let matchesCounter = document.getElementById("matches");
let remainingCounter = document.getElementById("remaining");
let timerDisplay = document.getElementById("timer");
let selectedCards = [];
let matchedPairs = 0;
let remainingPairs = 8;
let isGameActive = false;
let timerInterval;
let seconds = 0;

function updateTimer() {
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function handleCardClick(e) {
  if (!isGameActive) return;

  const clickedCard = e.currentTarget;
  if (
    selectedCards.length < 2 &&
    !selectedCards.includes(clickedCard) &&
    !clickedCard.classList.contains("matched")
  ) {
    clickedCard.classList.add("flipped");
    selectedCards.push(clickedCard);

    if (selectedCards.length === 2) {
      document.querySelectorAll(".grid-item").forEach((card) => {
        card.classList.add("disabled");
      });

      const [card1, card2] = selectedCards;
      const img1 = card1.querySelector("img");
      const img2 = card2.querySelector("img");

      if (img1.className === img2.className) {
        matchedPairs++;
        remainingPairs--;
        matchesCounter.textContent = matchedPairs;
        remainingCounter.textContent = remainingPairs;

        card1.classList.add("matched");
        card2.classList.add("matched");

        card1.classList.add("flipped");
        card2.classList.add("flipped");

        selectedCards = [];

        setTimeout(() => {
          document
            .querySelectorAll(".grid-item:not(.matched)")
            .forEach((card) => {
              card.classList.remove("disabled");
            });
        }, 500);

        if (matchedPairs === 8) {
          clearInterval(timerInterval);
          setTimeout(() => {
            alert(
              `¡Felicitaciones! Has completado el juego en ${timerDisplay.textContent}`
            );
          }, 500);
        }
      } else {
        setTimeout(() => {
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          selectedCards = [];

          document.querySelectorAll(".grid-item").forEach((card) => {
            card.classList.remove("disabled");
          });
        }, 1000);
      }
    }
  }
}

function shuffleCards() {
  let cajas = document.querySelectorAll(".grid-item");
  let cajasArray = Array.from(cajas);

  for (let i = cajasArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cajasArray[i], cajasArray[j]] = [cajasArray[j], cajasArray[i]];
  }

  cajasArray.forEach((caja) => {
    caja.parentNode.appendChild(caja);
  });
}

boton1.addEventListener("click", () => {
  matchedPairs = 0;
  remainingPairs = 8;
  seconds = 0;
  matchesCounter.textContent = "0";
  remainingCounter.textContent = "8";
  timerDisplay.textContent = "00:00";

  document.querySelectorAll(".grid-item").forEach((card) => {
    card.classList.remove("matched", "flipped", "disabled");
  });

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  shuffleCards();

  timerInterval = setInterval(updateTimer, 1000);

  isGameActive = true;
});

document.querySelectorAll(".grid-item").forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
