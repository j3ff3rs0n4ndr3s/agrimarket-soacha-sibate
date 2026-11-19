document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.favorite').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-favorite');
      button.textContent = button.classList.contains('is-favorite') ? '♥' : '♡';
      button.setAttribute('aria-pressed', button.classList.contains('is-favorite') ? 'true' : 'false');
    });
  });
});
