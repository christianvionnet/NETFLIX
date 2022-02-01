const card_1 = document.querySelector(".landing__1"),
  card_2 = document.querySelector(".landing__2"),
  planButtons = document.querySelectorAll(".landing__plans"),
  planItems1 = document.querySelectorAll("table td:nth-of-type(2)"),
  planItems2 = document.querySelectorAll("table td:nth-of-type(3)"),
  planItems3 = document.querySelectorAll("table td:nth-of-type(4)"),
  paths = document.querySelectorAll(".landing__tr path"),
  after = document.querySelectorAll(".landing__plan div::after");

console.log(after);

card_1.style.display = "none";

planButtons.forEach((e, i) => {
  planButtons[i].addEventListener("click", (e) => {
    if (planButtons[i].textContent == "Básico") {
      paths[0].style.fill = "var(--red)";
      paths[1].style.fill = "var(--light-grey-4)";
      paths[2].style.fill = "var(--light-grey-4)";
      planItems1.forEach((e, i) => {
        planItems1[i].style.color = "var(--red)";
        planItems2[i].style.color = "var(--light-grey-4)";
        planItems3[i].style.color = "var(--light-grey-4)";
      });
    } else if (planButtons[i].textContent == "Estándar") {
      paths[1].style.fill = "var(--red)";
      paths[0].style.fill = "var(--light-grey-4)";
      paths[2].style.fill = "var(--light-grey-4)";
      planItems2.forEach((e, i) => {
        planItems1[i].style.color = "var(--light-grey-4)";
        planItems2[i].style.color = "var(--red)";
        planItems3[i].style.color = "var(--light-grey-4)";
      });
    } else if (planButtons[i].textContent == "Premium") {
      paths[2].style.fill = "var(--red)";
      paths[1].style.fill = "var(--light-grey-4)";
      paths[0].style.fill = "var(--light-grey-4)";
      planItems3.forEach((e, i) => {
        planItems1[i].style.color = "var(--light-grey-4)";
        planItems2[i].style.color = "var(--light-grey-4)";
        planItems3[i].style.color = "var(--red)";
      });
    }
  });
});
