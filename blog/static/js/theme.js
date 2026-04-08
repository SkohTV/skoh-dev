let theme = localStorage.getItem('theme')

if (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  localStorage.setItem('theme', 'dark')
  theme = 'dark'
}

if (theme === 'dark') {
  document.querySelector('html').classList.add('dark')
}

function toggleDark() {
    if (theme == 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      theme = 'light'
    }
}
