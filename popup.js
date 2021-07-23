// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });
// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
/*
const ce_container = document.createElement("div");
document.querySelector("body").append(ce_container);
ce_container.classList.add("ce_container--flex-container");

const names = Array.from(document.querySelectorAll(".sr-hotel__title"));
const firstFive = names.slice(0, 5);
firstFive.forEach((el, i) => {
  const textNeeded = el.innerText.split(" ").slice(0, -4).join(" ");
  const html = `
    <ul class='ce_container--name'>
        <li> ${textNeeded} </li>
        <input type='text' id='id-${i}'> </input>
    </ul> 
    <button class='change-text--button' id='id-button -${i}'>Change this</button >
    `;
  ce_container.insertAdjacentHTML("afterbegin", html);
});
*/
chrome.storage.sync.get(["firstFiveText"], function (result) {
  console.log(result);
  result.firstFiveText.forEach((el, i) => {
    const html = `
      <ul class='ce_container--name'>
          <li> ${el} </li>
          <button class='change-text--button' id='id-button-${i}'>Get this hotel</button >
      </ul>
      `;
    document
      .querySelector(".popup_container")
      .insertAdjacentHTML("afterbegin", html);
  });
});
