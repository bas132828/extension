let color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`color changed on ${color}`);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  //   console.log(tabId, changeInfo, tab);
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: {
          tabId,
        },
        files: ["./foreground.js"],
      })
      .then(() => {
        console.log("injected the foreground script");
      })
      .catch((e) => console.log(e));
  }
});
