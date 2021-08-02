const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let message;
let productIndex;

// if (!search || null){
//     message = `Sorry, we only have ${inStock.join(", ")} `
// }

// else if(inStock.includes(search.toLowerCase())){
//     message = `Yes, we have ${search}. it's #${inStock.indexOf(search) + 1} on the list `
// }
   
// Another Way ======
if ( search ) {
    search = search.toLowerCase();
    productIndex = inStock.indexOf(search);
  }
  if ( !search ) {
    message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
  } else if ( productIndex !== -1 ) {
    message = `Yes, we have <strong>${search}</strong>. It's #${productIndex + 1} on the list!`;
  } else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;
  }
document.getElementById("main").innerHTML= message;