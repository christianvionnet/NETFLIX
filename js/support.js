const callUsButton = document.querySelector("#call__us"),
  contactLink = document.querySelector(".contact__a"),
  contactModal = document.querySelector(".contact__modal"),
  modalClose = document.querySelector(".modal__close"),
  footerLanguage = document.querySelector(".footer__language");

contactModal.style.display = "none";

callUsButton.addEventListener("click", () => {
  contactModal.style.display = "flex";
  callUsButton.style.backgroundColor = "#B6B5B2";
  contactLink.style.color = "#FFF";
  callUsButton.style.border = "1px solid #B6B5B2";
  setTimeout(() => {
    window.location.href = "#contact__modal--container";
  }, 200);
});

modalClose.addEventListener("click", () => {
  contactModal.style.display = "none";
  callUsButton.style.backgroundColor = "#FFF";
  contactLink.style.color = "#4C4948";
  callUsButton.style.border = "1px solid #8C8C8C";
});

footerLanguage.addEventListener("change", () => {
  console.log(footerLanguage.value);
  if (footerLanguage.value == "English") {
    window.location.href = "http://127.0.0.1:5500/support/support-en.html";
  } else if (footerLanguage.value == "Español") {
    window.location.href = "http://127.0.0.1:5500/support/support.html";
  }
});
