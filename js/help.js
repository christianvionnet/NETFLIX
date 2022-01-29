const buttonYes = document.querySelector("#button__yes"),
  buttonNo = document.querySelector("#button__no"),
  landing = document.querySelector(".landing"),
  landingUseful = document.querySelector(".landing__useful--container"),
  landingForm1 = document.querySelector(".landing__form--container-1"),
  landingForm2 = document.querySelector(".landing__form--container-2"),
  landingSubmits = document.querySelectorAll(".landing__submit"),
  landingThanks = document.querySelector(".landing__thanks"),
  checkButtons = document.querySelectorAll(".landing__input--2"),
  fieldContainers = document.querySelectorAll(".landing__field--container"),
  landingLabels = document.querySelectorAll(".landing__label"),
  callUsButton = document.querySelector("#call__us"),
  contactLink = document.querySelector(".contact__a"),
  contactModal = document.querySelector(".contact__modal"),
  modalClose = document.querySelector(".modal__close"),
  footerLanguage = document.querySelector(".footer__language");

landingForm1.style.display = "none";
landingForm2.style.display = "none";
landingThanks.style.display = "none";
contactModal.style.display = "none";

buttonYes.addEventListener("click", () => {
  landingUseful.style.display = "none";
  landingForm1.style.display = "flex";
});

buttonNo.addEventListener("click", () => {
  landingUseful.style.display = "none";
  landingForm2.style.display = "flex";
  landingForm2.style.flexDirection = "column";
});

landingSubmits.forEach((e, i) => {
  landingSubmits[i].addEventListener("click", (e) => {
    e.preventDefault();
    landingForm1.style.display = "none";
    landingForm2.style.display = "none";
    landingThanks.style.display = "flex";
  });
});

checkButtons.forEach((e, i) => {
  checkButtons[i].addEventListener("click", () => {
    if (checkButtons[i].classList.contains("check")) {
      fieldContainers[i].classList.remove("checked");
      checkButtons[i].classList.remove("check");
      landingLabels.forEach((e, i) => {
        landingLabels[i].style.color = "#221f1f";
      });
    } else {
      checkButtons.forEach((e, i) => {
        checkButtons[i].classList.remove("check");
        landingLabels[i].style.color = "#8b8a88";
      });
      console.log(checkButtons[i]);
      checkButtons[i].classList.add("check");
      landingLabels[i].style.color = "#221f1f";

      fieldContainers.forEach((e, i) => {
        fieldContainers[i].classList.remove("checked");
      });
      fieldContainers[i].classList.add("checked");
    }
  });
});

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
    window.location.href = "http://127.0.0.1:5500/help/help-en.html";
  } else if (footerLanguage.value == "Español") {
    window.location.href = "http://127.0.0.1:5500/help/help.html";
  }
});
