if (localStorage.getItem('theme') === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  localStorage.setItem('theme', 'dark')
}

if (localStorage.getItem('theme') === 'dark') {
  document.querySelector('html').classList.add('dark')
}

function toggleDark() {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
}
