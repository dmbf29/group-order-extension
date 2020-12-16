function scrapeHTML() {
  // document.querySelector('[role="search"]').nextElementSibling.children[0].children[1].click();
  const cart = document.querySelector('header a').nextElementSibling
  // Open the modal to load it
  cart.children[0].children[1].click();

  // Get number of people in order
  const numOfPeople = cart.querySelectorAll('li').length

  // Get extra fees
  const serviceFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[1].children[1].innerText.substring(1).replace(/,/g, "");
  const deliveryFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[2].children[1].querySelectorAll('span')[1].innerText.substring(1).replace(/,/g, "");
  const extraFee = ((Number.parseInt(serviceFee, 10) + Number.parseInt(deliveryFee, 10)) / numOfPeople ).toFixed(2)

  const list = cart.querySelector('ul')
  const liElements = cart.querySelector('ul').children
  // cart.querySelector('ul').children.forEach((person) => {
  for (let person of liElements) {
    if (person.tagName === "LI") {
      const name = person.children[2].children[0].children[0].children[0].innerText
      const items = [person.children[2].children[2]]
      let total = 0
      let quantity = 0
      let price = 0
      // For each item....
      hrs = person.children[2].querySelectorAll('hr')
      if (hrs.length > 0 ) {
        hrs.forEach((hr) => {
          items.push(hr.nextElementSibling)
        })
      }

      console.log(`${name}:`)
      items.forEach((item) => {
        quantity = Number.parseInt(item.children[0].children[0].children[0].value, 10) // STRING
        price = Number.parseInt(item.children[2].children[0].children[0].children[2].innerText.substring(1).replace(/,/g, ""), 10);
        total += (quantity * price)
      })
      console.log(`¥${total} + ¥${extraFee} => ¥${total + extraFee}`)
    }
  }
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

