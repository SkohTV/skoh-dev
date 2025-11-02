let theme = localStorage.getItem('theme')

if (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  localStorage.setItem('theme', 'dark')
  theme = 'dark'
}

if (theme === 'dark') {
  document.querySelector('html').classList.add('dark')
}
