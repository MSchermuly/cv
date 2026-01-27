/* change theme when available */
function setStyle(name) {
  document.getElementById("theme").href = "styles/" + name + ".css";
}

/* change language */
function setLang(lang) {
  document.body.className = lang;
  document.documentElement.lang = lang;
}
