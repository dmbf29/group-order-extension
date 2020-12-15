chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
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

function scrapeHTML() {
  document.style.backgroundColor = 'red';
  const serviceCharge = document.querySelector('#main-content > div.b5.b6.b7.b8.p8.bc.f1 > div.k2.pc > ul > li:nth-child(3) > div:nth-child(2) > span')
  const deliveryCharge = document.querySelector('#delivery-charge')
  console.log(serviceCharge)
  console.log(deliveryCharge)
}
