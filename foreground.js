const ce_container = document.createElement("div");
// const ce_name = document.createElement("div");

// ce_container.appendChild(ce_name);
document.querySelector("body").append(ce_container);
ce_container.classList.add("ce_container--flex-container");
// ce_name.classList.add("ce_container--name");

const names = Array.from(document.querySelectorAll(".sr-hotel__title"));
const firstFive = names.slice(0, 5);
firstFive.forEach((el) => {
  const textNeeded = el.innerText.split(" ").slice(0, -4).join(" ");
  const html = `
  <ul class='ce_container--name'>
 <li> ${textNeeded} </li>
</ul> `;
  ce_container.insertAdjacentHTML("afterbegin", html);
});

// ce_name.textContent = firstFive;

// firstFive.forEach((el) => {
//    document.createElement("div")..textContent
//   ce_name = el.textContent;
// });
