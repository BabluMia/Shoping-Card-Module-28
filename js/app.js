function updateProductNumber(product, price, isIncrace) {
  let productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncrace == true) {
    productNumber = parseInt(productNumber) + 1;
  } else {
    if (productInput.value > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
  }
  productInput.value = productNumber;

  let productTotal = document.getElementById(product + "-price");
  productTotal.innerText = productNumber * price;

  // total
  calculateTotal()
}

function getInputValue(product) {
  let productInput = document.getElementById(product +"-number");
  let productNumber = parseInt(productInput.value);
  return productNumber;
}
// calculate total
function calculateTotal() {
  let phoneTotal = getInputValue("phone") * 1219;
  let caseTotal = getInputValue("case") * 59;
  let subTotal = phoneTotal + caseTotal;
  let taxTotal = subTotal / 10 ;
  let totalPrice = subTotal + taxTotal;

  // update in html 
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-total').innerText = taxTotal
  document.getElementById('total-price').innerText = totalPrice
}
// for phone
document.getElementById("phone-plus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, false);
});

// for case
let caseValue = document.getElementById("case-price");
document.getElementById("case-plus").addEventListener("click", () => {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", () => {
  updateProductNumber("case", 59, false);
});

// subtotal
let subTotal = document.getElementById("sub-total");
