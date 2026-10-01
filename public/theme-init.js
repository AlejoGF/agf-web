// Aplica el tema antes de que cargue React para evitar el parpadeo.
// Debe usar la misma clave que src/context/ThemeProvider.jsx.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('agf-theme');
    var theme =
      saved === 'light' || saved === 'dark'
        ? saved
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    root.dataset.theme = theme;
  } catch {
    root.dataset.theme = 'light';
  }
})();
