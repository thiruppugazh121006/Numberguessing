let attempts = 0;

function submitGuess() {
  const guess = document.getElementById("guessInput").value;

  fetch('/guess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ guess: Number(guess) })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").textContent = data.message;
    attempts = data.attempts;
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
  });
}
