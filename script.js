/* change theme when available */
function setStyle(name) {
  document.getElementById("theme").href = "styles/" + name + ".css";
  if (name == 'lean')
    document.getElementById("profile_img").src = "img/profile_sw.jpg";
  else
    document.getElementById("profile_img").src = "img/profile.jpg";
}

/* change language */
function setLang(lang) {
  document.body.className = lang;
  document.documentElement.lang = lang;
}
