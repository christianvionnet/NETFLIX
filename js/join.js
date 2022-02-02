const card_1 = document.querySelector(".landing__1"),
  card_2 = document.querySelector(".landing__2"),
  planButtons = document.querySelectorAll(".landing__plans"),
  planItems1 = document.querySelectorAll("table td:nth-of-type(2)"),
  planItems2 = document.querySelectorAll("table td:nth-of-type(3)"),
  planItems3 = document.querySelectorAll("table td:nth-of-type(4)"),
  paths = document.querySelectorAll(".landing__tr path"),
  after = document.querySelectorAll(".after");

//------- CONDICIONES INICIALES --------
card_1.style.display = "none";

after.forEach((e, i) => {
  after[i].classList.remove("after");
});

planItems3.forEach((e, i) => {
  planItems3[i].style.color = "var(--red)";
});

paths[2].style.fill = "var(--red)";
after[2].classList.add("after");

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

// planButtons.forEach((e,i) => {
// })

// planButtons.forEach((e, i) => {
//   planButtons[i].addEventListener("click", (e) => {
//     if (!after[i].classList.contains("after")) {
//       after[i].classList.add("after");
//     } else {
//       after.forEach((e, i) => {
//         after[i].classList.remove("after");
//       });
//     }
//     if (planButtons[i].textContent == "Básico") {
//       paths[0].style.fill = "var(--red)";
//       paths[1].style.fill = "var(--light-grey-4)";
//       paths[2].style.fill = "var(--light-grey-4)";

//       planItems1.forEach((e, i) => {
//         planItems1[i].style.color = "var(--red)";
//         planItems2[i].style.color = "var(--light-grey-4)";
//         planItems3[i].style.color = "var(--light-grey-4)";
//         planButtons[i].style.opacity = "0.6";
//       });
//     } else if (planButtons[i].textContent == "Estándar") {
//       paths[1].style.fill = "var(--red)";
//       paths[0].style.fill = "var(--light-grey-4)";
//       paths[2].style.fill = "var(--light-grey-4)";

//       planItems2.forEach((e, i) => {
//         planItems1[i].style.color = "var(--light-grey-4)";
//         planItems2[i].style.color = "var(--red)";
//         planItems3[i].style.color = "var(--light-grey-4)";
//       });
//     } else if (planButtons[i].textContent == "Premium") {
//       paths[2].style.fill = "var(--red)";
//       paths[1].style.fill = "var(--light-grey-4)";
//       paths[0].style.fill = "var(--light-grey-4)";
//       planItems3.forEach((e, i) => {
//         planItems1[i].style.color = "var(--light-grey-4)";
//         planItems2[i].style.color = "var(--light-grey-4)";
//         planItems3[i].style.color = "var(--red)";
//       });
//     }
//   });
// });
