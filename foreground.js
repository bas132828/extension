console.log("from front");

const logo = document.querySelector(
  "#b2indexPage > header > nav.bui-header__bar > div.bui-group.bui-button-group.bui-group--inline.bui-group--align-end.bui-group--vertical-align-middle > div:nth-child(2) > button > span > div > img"
);
console.log(logo);
logo.style.width = 0;
logo.style.transition = "4s";
