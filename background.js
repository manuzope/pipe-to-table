chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertPipeToTable",
    title: "Convert Pipe-Separated to Table",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertPipeToTable") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
