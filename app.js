var card = document.querySelector(".card");
var mouse = document.querySelector(".mouse");
var heading = document.querySelector("h1");

const offsetX = -15;
const offsetY = -15;

// card.addEventListener("mousemove", function (e) {
//   mouse.style.top = e.clientY + offsetY + "px";
//   mouse.style.left = e.clientX + offsetX + "px";
// });

card.addEventListener("mousemove", function (e) {
  mouse.style.top = `${e.clientY + offsetY}px`;
  mouse.style.left = `${e.clientX + offsetX}px`;
});

const span_text = heading.textContent;
heading.textContent = "";
span_text.split("").forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  heading.appendChild(span);
});

const letters = document.querySelectorAll("h1 span");
letters.forEach((letter) => {
  letter.addEventListener("mouseover", function () {
    letter.style.color = "white";
    heading.style.zIndex = "100";
    mouse.style.transform = "scale(2)";
  });
  letter.addEventListener("mouseout", function () {
    letter.style.color = "initial";
    letter.style.zIndex = "initial";
    mouse.style.transform = "initial";
  });
});
