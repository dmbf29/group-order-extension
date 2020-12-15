function scrapeHTML() {
  // const serviceCharge = document.querySelector('#main-content > div.b5.b6.b7.b8.p8.bc.f1 > div.k2.pc > ul > li:nth-child(3) > div:nth-child(2) > span')
  // const deliveryCharge = document.querySelector('#delivery-charge')
  // console.log(serviceCharge)
  // console.log(deliveryCharge)
  document.querySelector('[role="search"]').nextElementSibling.children[0].children[1].click();
  const list = document.querySelector('[role="search"]').nextElementSibling.children[1].children[0].children[2].querySelector('ul')
  console.log(list)
}

// Didn't work... I don't think the order is loaded yet....
// document.addEventListener("DOMContentLoaded", {
// }
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.action === 'scrape') scrapeHTML();
  }
);

// Our image replacement script
// function cheesify() {
//   document.querySelectorAll('img').forEach( (img) => {
//     img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
//     img.srcset = img.src;
//   })
// }

