function scrapeHTML() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape' }); // Sends a message (object) to the first tab (tabs[0])
  });
}

document.getElementById('build').addEventListener('click', event => scrapeHTML());

function scrapeHTML() {
  // const serviceCharge = document.querySelector('#main-content > div.b5.b6.b7.b8.p8.bc.f1 > div.k2.pc > ul > li:nth-child(3) > div:nth-child(2) > span')
  // const deliveryCharge = document.querySelector('#delivery-charge')
  // console.log(serviceCharge)
  // console.log(deliveryCharge)
  const list = document.querySelector('[role="search"]').nextElementSibling.children[1].children[0].children[2].querySelector('ul')
  console.log(list)
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.action === 'scrape') scrapeHTML();
  }
);
