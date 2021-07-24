const names = Array.from(document.querySelectorAll(".sr-hotel__title"));
const firstFive = names.slice(0, 5);

const temp = firstFive.map((el) => {
  return el.innerText.split(" ").slice(0, -4).join(" ");
});
const firstFiveText = temp.reverse();

chrome.storage.sync.set({ firstFiveText });
