const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  const fetchCurrentTime = async () => {
    const response = await fetch('https://amp.dev/documentation/examples/api/time');
    const data = await response.json();
    const div = document.getElementById('time');
    document.body.textContent = data.time;
  }
  fetchCurrentTime();
})
