// console.log("from front");

// const logo = document.querySelector(
//   "#b2indexPage > header > nav.bui-header__bar > div.bui-group.bui-button-group.bui-group--inline.bui-group--align-end.bui-group--vertical-align-middle > div:nth-child(2) > button > span > div > img"
// );
// console.log(logo);
// logo.style.width = 0;
// logo.style.transition = "4s";

// const field = document.querySelector("#ss");
// console.log(field);

// const card = document.querySelector(
//   "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block.sr_flex_layout.sr_item--highlighted.with_dates"
// );
// const cards = document.querySelector("#hotellist_inner");
// const cardsArr = Array.from(cards.children);
// console.log(cardsArr);

const names = Array.from(document.querySelectorAll(".sr-hotel__title"));
const firstFive = names.slice(0, 5);
console.log(firstFive);
firstFive.forEach((el) => console.log(el.innerText));
