function scrapeHTML() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape' }); // Sends a message (object) to the first tab (tabs[0])
  });
}

document.getElementById('build').addEventListener('click', event => scrapeHTML());

