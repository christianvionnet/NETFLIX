const btn = document.querySelectorAll(".faq__btn");
const li = document.querySelectorAll(".faq__li");
const english = document.querySelector(".header__lang-1");
const español = document.querySelector(".header__lang-0");
const headerLanguage = document.querySelector(".header__language");
const footerLanguage = document.querySelector(".footer__language");

btn.forEach((v, i) => {
  btn[i].addEventListener("click", () => {
    if (li[i].classList.contains("active")) {
      li[i].classList.remove("active");
    } else {
      li.forEach((v, i) => {
        li[i].classList.remove("active");
      });
      li[i].classList.add("active");
    }
  });
});

headerLanguage.addEventListener("change", () => {
  console.log(headerLanguage.value);
  if (headerLanguage.value == "English") {
    window.location.href = "http://127.0.0.1:5500/index-en.html";
  } else if (headerLanguage.value == "Español") {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
});

footerLanguage.addEventListener("change", () => {
  console.log(footerLanguage.value);
  if (footerLanguage.value == "English") {
    window.location.href = "http://127.0.0.1:5500/index-en.html";
  } else if (footerLanguage.value == "Español") {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
});
