const popupContainer = document.getElementById('popup-container');
const popupBtn = document.getElementById('popup-btn');
const closeBtn = document.getElementById('close-btn');

function showPopup() {
  popupContainer.style.opacity = 0;
  popupContainer.style.display = 'block';
  let i = 0;
  let interval = setInterval(() => {
    i += 0.05;
    popupContainer.style.opacity = i;
    if (i >= 1) {
      clearInterval(interval);
    }
  }, 10);
}

function closePopup() {
  popupContainer.style.opacity = 1;
  let i = 1;
  let interval = setInterval(() => {
    i -= 0.05;
    popupContainer.style.opacity = i;
    if (i <= 0) {
      clearInterval(interval);
      popupContainer.style.display = 'none';
    }
  }, 10);
}
popupBtn.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);