if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // REMOVE ITEMS FROM CART WITH REMOVE BUTTON
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");

  // LOOP THROUGH REMOVE BUTTONS
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("btn-addToCart");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartCliked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  // CALL UPDATE CART FUNCTION
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

// GET TITLE IMAGE AND PRICE FROM ADD TO CART BUTTON WHEN CLICKED
function addToCartCliked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("cart-item-img")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart!");
      return;
    }
  }
  var cartRowContents = `<div class="cart-column cart-items">
  <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
  </div>
  <div class="cart-item cart-item-title">
    <span>${title}</span>
  </div>
<div class="cart-price-container">
<span class="cart-price cart-column">${price}</span>
</div>
<div class="cart-quantity-container cart-column">
<input class="cart-quantity-input" type="number" value="1">
</div>
<div class="btn-danger-container">
<button class="btn btn-danger" type="button">&times;</button>
</div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

// UPDATE CART FUNCTION
function updateCartTotal() {
  // DRILL DOWN THROUGH ELEMENTS TO GET TO cart-price ELEMENT
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;

  // LOOP THROUGH EACH CART ROW TO GET PRICE AND QUANTITY
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    // CONVERT STRING TO FLOAT (NUMBER) AND REPLACE $ WITH NOTHING ("")
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  // ROUND TO 2 DECIMAL PLACES
  total = Math.round(total * 100) / 100;
  // INSERT PRICE INTO CART TOTAL AND ADD BACK DOLLAR SIGN "$"
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

/******************
 MODAL
 *****************/
const openModalButtons = document.querySelectorAll('[data-modal-target');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
