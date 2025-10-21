// 修复crxjs热重载不能会忽略css的bug
// import './index.css'
// 图标动态高亮显示
// contentScript.js
console.log('加载contentScript.js');
chrome.runtime.sendMessage({ action: "pageLoaded" });
// 页面元素
let pageUserName = document.getElementById('svpn_name')as HTMLInputElement;
let pageUserPwd = document.getElementById('input_pwd')as HTMLInputElement;
// 勾选同意按钮
let checkbox = document.getElementById('checkbox')as HTMLInputElement;
if (checkbox) {
  checkbox.checked = true;
}
// 监听popup.html发送过来的消息
chrome.runtime.onMessage.addListener(function (request): boolean {
  if (request.action === "callContentScriptFunctionInitLogin") {
    // 在这里执行content script中的方法，并将结果发送回popup.html
    // 例如：
    // console.log('callContentScriptFunctionInitLogin',request.data);
    // 给页面的 input 赋值
    if (pageUserName) {
      pageUserName.value = request.data.username;
    }
    if (pageUserPwd) {
      pageUserPwd.value = request.data.password;
    }
    // 点击登录按钮
    const loginButton = document.getElementById('logButton') as HTMLButtonElement;
    if (loginButton) {
      loginButton.click();
    }
  }
  return true; // 返回 true 表示异步响应
});


console.log('加载contentScript.jsend');
