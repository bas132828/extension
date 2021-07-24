chrome.storage.sync.get(["firstFiveText"], function (result) {
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
