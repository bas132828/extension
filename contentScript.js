const city = document.querySelector("#ss");
const dateStart = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(2) > div > div > div > div > div.sb-date-field__display"
);

const dateEnd = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(3) > div > div > div > div > div.sb-date-field__display"
);

const buttonSubmit = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__button > div.sb-searchbox-submit-col.-submit-button > button"
);
const buttonClose = document.querySelector(
  "#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__input-group.xp__search > div:nth-child(11) > div.c-autocomplete.sb-destination.-with-clear.region_second_line > button"
);
buttonClose.click();
city.value = "Кельн";

buttonSubmit.click();
