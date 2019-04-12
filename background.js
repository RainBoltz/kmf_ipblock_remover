
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Removing Shade & Blur...');
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("shield-box")[0].outerHTML = ""; document.getElementsByClassName("practice-container")[0].classList.remove("blur");'
  });
});
