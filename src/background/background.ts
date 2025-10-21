// background.js
// 图标在指定页面动态高亮显示
console.log('background.js');
let contentScriptLoadedTabs = new Set();

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'contentScriptLoaded') {
    if (sender.tab) {
      contentScriptLoadedTabs.add(sender.tab.id);
    }
  }
  return true
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setIcon({ path: "logo/icon38_gray.png" });
});

chrome.runtime.onMessage.addListener((message) => {
  console.log('非目标页面图标置灰显示message', message.action);

  if (message.action === "pageLoaded") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url && tabs[0].url.includes("/por/login_psw.csp")) {
        console.log('目标页面图标高亮显示');
        chrome.action.setIcon({ path: "logo/icon38.png" });
      } else {
        console.log('非目标页面图标置灰显示');
        chrome.action.setIcon({ path: "logo/icon38_gray.png" });
      }
    });
  }
  return true
});

