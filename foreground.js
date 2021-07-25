const nodesOnViewPort = Array.from(
  document.querySelectorAll(
    "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block"
  )
);
const firstFiveNodes = nodesOnViewPort.slice(0, 5);
console.log(firstFiveNodes);
const arrayToSend = firstFiveNodes.map((el, i) => {
  // console.log(el.querySelector(".sr-hotel__name").textContent);
  // console.log(el.querySelector("img").getAttribute("src"));
  // console.log(el.querySelector("div.bui-price-display__value").textContent);
  // console.log(el.querySelector("a").getAttribute("href"));
  return {
    title: el.querySelector(".sr-hotel__name").textContent,
    img: el.querySelector("img").getAttribute("src"),
    price: el.querySelector("div.bui-price-display__value").textContent,
    link: `https://booking.com/${el.querySelector("a").getAttribute("href")}`,
    id: i,
  };
});
console.log(arrayToSend);
// console.log(arrayToSend);
// const temp = firstFive.map((el) => {
//   return;
// });
// const firstFiveText = temp.reverse();

chrome.storage.sync.set({ arrayToSend });
