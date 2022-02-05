const card_1 = document.querySelector(".landing__1"),
  card_2 = document.querySelector(".landing__2"),
  planButtons = document.querySelectorAll(".landing__plans"),
  planItems1 = document.querySelectorAll("table td:nth-of-type(2)"),
  planItems2 = document.querySelectorAll("table td:nth-of-type(3)"),
  planItems3 = document.querySelectorAll("table td:nth-of-type(4)"),
  paths = document.querySelectorAll(".landing__tr path");

//------- CONDICIONES INICIALES --------
card_1.style.display = "none";

planButtons.forEach((e, i) => {
  planButtons[i].classList.remove("after");
});

planItems3.forEach((e, i) => {
  planItems3[i].style.color = "var(--red)";
});

paths[2].style.fill = "var(--red)";
planButtons[2].classList.add("after");

planButtons.forEach((e, i) => {
  planButtons[i].addEventListener("click", () => {
    if (planButtons[i].textContent == "Básico") {
      if (!planButtons[i].classList.contains("after")) {
        planButtons.forEach((e, i) => {
          planButtons[i].classList.remove("after");
        });
        planButtons[i].classList.add("after");
      }

      planItems1.forEach((e, i) => {
        planItems1[i].style.color = "var(--red)";
        planItems2[i].style.color = "var(--light-grey-4)";
        planItems3[i].style.color = "var(--light-grey-4)";
      });

      paths.forEach((e, i) => {
        paths[i].style.fill = "var(--light-grey-4)";
      });
      paths[i].style.fill = "var(--red)";
    } else if (planButtons[i].textContent == "Estándar") {
      if (!planButtons[i].classList.contains("after")) {
        planButtons.forEach((e, i) => {
          planButtons[i].classList.remove("after");
        });
        planButtons[i].classList.add("after");
      }

      planItems1.forEach((e, i) => {
        planItems2[i].style.color = "var(--red)";
        planItems1[i].style.color = "var(--light-grey-4)";
        planItems3[i].style.color = "var(--light-grey-4)";
      });

      paths.forEach((e, i) => {
        paths[i].style.fill = "var(--light-grey-4)";
      });
      paths[i].style.fill = "var(--red)";
    } else if (planButtons[i].textContent == "Premium") {
      if (!planButtons[i].classList.contains("after")) {
        planButtons.forEach((e, i) => {
          planButtons[i].classList.remove("after");
        });
        planButtons[i].classList.add("after");
      }

      planItems1.forEach((e, i) => {
        planItems3[i].style.color = "var(--red)";
        planItems2[i].style.color = "var(--light-grey-4)";
        planItems1[i].style.color = "var(--light-grey-4)";
      });

      paths.forEach((e, i) => {
        paths[i].style.fill = "var(--light-grey-4)";
      });
      paths[i].style.fill = "var(--red)";
    }
  });
});
