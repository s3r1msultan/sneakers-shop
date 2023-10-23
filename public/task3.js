function startTimer() {
  const durationInput = document.getElementById("duration");
  const timerDisplay = document.getElementById("timer");

  const duration = parseInt(durationInput.value);

  if (isNaN(duration) || duration <= 0) {
    alert("Please enter a valid positive duration.");
    return;
  }

  let remainingTime = duration;

  const timerInterval = setInterval(function () {
    if (remainingTime === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
      alert("Time's up!");
    } else {
      timerDisplay.textContent = remainingTime;
    }
    remainingTime--;
  }, 1000);
}
