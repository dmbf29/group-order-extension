function scrapeHTML() {
  // document.querySelector('[role="search"]').nextElementSibling.children[0].children[1].click();
  const cart = document.querySelector('header a').nextElementSibling
  // Open the modal to load it
  cart.children[0].children[1].click();

  // Get number of people in order
  const numOfPeople = cart.querySelectorAll('li').length

  // Get extra fees
  const serviceFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[1].children[1].innerText.substring(1)
  const deliveryFee = document.querySelector('main').children[1].children[3].querySelectorAll('li')[2].children[1].querySelectorAll('span')[1].innerText.substring(1)
  const extraFee = ((Number.parseInt(serviceFee, 10) + Number.parseInt(deliveryFee, 10)) / numOfPeople ).toFixed(2)

  console.log(extraFee)

  const list = cart.querySelector('ul')
  list.querySelectorAll('li').forEach((person) => {
    const name = person.children[2].children[0].children[0].children[0].innerText
    // TODO: For each item....
    const quantity = Number.parseInt(person.children[2].children[2].children[0].children[0].children[0].value, 10) // STRING
    let price = Number.parseInt(person.children[2].children[2].children[2].children[0].children[0].children[2].innerText.substring(1), 10);
    const total = quantity * price

    // show for each person
    console.log(`${name}:`)
    console.log(`¥${total} + ¥${extraFee} => ¥${total + extraFee}`)
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

