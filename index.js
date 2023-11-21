const dateInput = document.getElementById('dateInput');
const moodInput = document.getElementById('moodInput');
const notesInput = document.getElementById('notesInput');
const saveMoodBtn = document.getElementById('saveMoodBtn');
const moodHistory = document.getElementById('moodHistory');

saveMoodBtn.addEventListener('click', saveMood);

function saveMood() {
  const date = dateInput.value;
  const mood = moodInput.value;
  const notes = notesInput.value.trim();

  const moodItem = document.createElement('div');
  moodItem.classList.add('moodItem');
  moodItem.innerHTML = `
    <span>Date: ${date}</span>
    <span>Mood: ${mood}</span>
    <p>${notes}</p>
  `;
  moodHistory.appendChild(moodItem);

  clearInputs();
}

function clearInputs() {
  dateInput.value = '';
  moodInput.value = 'happy';
  notesInput.value = '';
}
