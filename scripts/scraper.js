function scrapeHTML() {
  // document.querySelector('[role="search"]').nextElementSibling.children[0].children[1].click();
  const cart = document.querySelector('header a').nextElementSibling
  // Open the modal to load it
  cart.children[0].children[1].click();

  // Get number of people in order
  const numOfPeople = cart.querySelectorAll('li').length

  // Get extra fees
  const serviceFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[1].children[1].innerText
  const deliveryFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[2].children[1].querySelectorAll('span')[1].innerText
  const extraFee = ((Number.(serviceFee.substring(1), 10) + Number.parseInt(deliveryFee.substring(1), 10)) / numOfPeople).toFixed(2)

  console.log(extraFee)

  const list = cart.querySelector('ul')
  list.querySelectorAll('li').forEach((person) => {
    const name = person.children[2].children[0].children[0].children[0].innerText
    // TODO: For each item....
    const quantity = person.children[2].children[2].children[0].children[0].children[0].value // STRING
    let price = person.children[2].children[2].children[2].children[0].children[0].children[2].innerText

    console.log(`${name}:`)
    console.log(`${price} x ${quantity}`)
  })


  // Remove yen:
  // str.substring(1);
}

// Didn't work... I don't think the order is loaded yet....
// document.addEventListener("DOMContentLoaded", {
// }
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

