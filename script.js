/* change theme when available */
function setStyle(name) {
  document.getElementById("theme").href = "styles/" + name + ".css";

  return;
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme-Wechsel
  document.querySelectorAll('a[data-theme]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const theme = link.getAttribute('data-theme');
      setStyle(theme);
    });
  });
});