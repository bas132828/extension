// const ce_container = document.createElement("div");
// document.querySelector("body").append(ce_container);
// ce_container.classList.add("ce_container--flex-container");

const names = Array.from(document.querySelectorAll(".sr-hotel__title"));
const firstFive = names.slice(0, 5);

const firstFiveText = firstFive.map((el) => {
  return el.innerText.split(" ").slice(0, -4).join(" ");
});
// firstFive.forEach((el, i) => {
//   const textNeeded = el.innerText.split(" ").slice(0, -4).join(" ");
//   const html = `
//     <ul class='ce_container--name'>
//         <li> ${textNeeded} </li>
//         <input type='text' id='id-${i}'> </input>
//     </ul>
//     <button class='change-text--button' id='id-button -${i}'>Change this</button >
//     `;
//   ce_container.insertAdjacentHTML("afterbegin", html);
// });
// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//   console.log(response.farewell);
// });
console.log(firstFiveText);

chrome.storage.sync.set({ firstFiveText });
