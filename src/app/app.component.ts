document.getElementById('generate-joke').addEventListener('click', async () => {
  const jokeBox = document.getElementById('joke');
  jokeBox.textContent = 'Завантаження...';

  try {
    const response = await fetch('https://webart.work/api/kpnu/joke');
    if (!response.ok) {
      throw new Error('Помилка отримання жарту');
    }

    const data = await response.json();
    jokeBox.textContent = data.joke;
  } catch (error) {
    jokeBox.textContent = 'Не вдалося завантажити жарт. Спробуйте ще раз!';
  }
});
