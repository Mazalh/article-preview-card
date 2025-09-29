function toggleSharePanel() {
  const panel = document.getElementById('backpanelshare');
  panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
}

// Клік на іконки (тільки для демонстрації)
document.querySelector('.facebooklogo').addEventListener('click', () => alert('Facebook'));
document.querySelector('.instagramlogo').addEventListener('click', () => alert('Instagram'));
document.querySelector('.copyurl').addEventListener('click', () => alert('Скопійовано!'));
