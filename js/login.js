const footerLanguage = document.querySelector(".footer__language");

footerLanguage.addEventListener("change", () => {
  console.log(footerLanguage.value);
  if (footerLanguage.value == "English") {
    window.location.href = "http://127.0.0.1:5500/login/login-en.html";
  } else if (footerLanguage.value == "Español") {
    window.location.href = "http://127.0.0.1:5500/login/login.html";
  }
});
