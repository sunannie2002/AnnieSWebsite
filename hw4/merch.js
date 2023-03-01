const prices = [100, 13, 16.2, 10.05];
const checkoutButton = document.getElementById("checkout");
const creditDisplay = document.getElementById("creditamount");
const couponCode = document.getElementById("couponcode");
const reciept = document.getElementById("receipt");

const unicornPriceElement = document.getElementById("unicornPrice");
const unicornImage = document.getElementById("unicornImage");
const unicornCheckbox = document.getElementById("unicornCheckbox");
const unicornPrice = prices[0];

const dinoPriceElement = document.getElementById("dinoPrice");
const dinoImage = document.getElementById("dinoImage");
const dinoCheckbox = document.getElementById("dinoCheckbox");
const dinoPrice = prices[1];

const elephantPriceElement = document.getElementById("elephantPrice");
const elephantImage = document.getElementById("elephantImage");
const elephantCheckbox = document.getElementById("elephantCheckbox");
const elephantPrice = prices[2];

const sharkPriceElement = document.getElementById("sharkPrice");
const sharkImage = document.getElementById("sharkImage");
const sharkCheckbox = document.getElementById("sharkCheckbox");
const sharkPrice = prices[3];

function setupProduct(price, imageElement, priceElement, checkboxElement) {
  imageElement.addEventListener("click", function () {
    checkboxElement.checked = !checkboxElement.checked;
  });
  priceElement.innerText = "$" + price;
}

let credit = 20.0;

for (const value of [
  {
    checkboxElement: dinoCheckbox,
    imageElement: dinoImage,
    priceElement: dinoPriceElement,
    price: dinoPrice,
  },
  {
    checkboxElement: elephantCheckbox,
    imageElement: elephantImage,
    priceElement: elephantPriceElement,
    price: elephantPrice,
  },
  {
    checkboxElement: sharkCheckbox,
    imageElement: sharkImage,
    priceElement: sharkPriceElement,
    price: sharkPrice,
  },
  {
    checkboxElement: unicornCheckbox,
    imageElement: unicornImage,
    priceElement: unicornPriceElement,
    price: unicornPrice,
  },
]) {
  setupProduct(
    value.price,
    value.imageElement,
    value.priceElement,
    value.checkboxElement
  );
}

creditDisplay.innerText = "Your credit: $" + credit.toFixed(2);

document
  .getElementById("couponcode")
  .addEventListener("keypress", update_credit);
document.getElementById("checkout").addEventListener("click", update_credit);
function update_credit() {
  if (document.getElementById("couponcode").value === "COUPON5") {
    credit = credit + 5;
    creditDisplay.innerText = "Your credit: $" + credit.toFixed(2);
  } else if (document.getElementById("couponcode").value === "COUPON10") {
    credit = credit + 10;
    creditDisplay.innerText = "Your credit: $" + credit.toFixed(2);
  } else if (document.getElementById("couponcode").value === "COUPON20") {
    credit = credit + 20;
    creditDisplay.innerText = "Your credit: $" + credit.toFixed(2);
  } else {
    document.getElementById("couponcode").value = "";
  }
}

function wantToBuy() {
  let items = [];
  if (unicornCheckbox.checked) {
    items.push(unicornPrice);
  }
  if (dinoCheckbox.checked) {
    items.push(dinoPrice);
  }
  if (elephantCheckbox.checked) {
    items.push(elephantPrice);
  }
  if (sharkCheckbox.checked) {
    items.push(sharkPrice);
  }
  return items;
}

function list_total(wantToBuy) {
  return wantToBuy.reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);
}
function sales_total(wantToBuy) {
  const total = list_total(wantToBuy) * 1.0725;
  const round_down = Math.floor(total * 100) / 100;
  if (round_down > credit) {
    alert("You have insufficient credit for this purchase.");
  } else {
    credit = credit - round_down;
    creditDisplay.innerText = "Your credit: $" + credit.toFixed(2);
    reciept.innerText =
      "  $" +
      list_total(wantToBuy).toFixed(2) +
      "\n" +
      "+ sales tax (7.25%)\n= $" +
      round_down.toFixed(2);
    if (unicornCheckbox.checked) {
      unicornCheckbox.disabled = true;
    }
    if (dinoCheckbox.checked) {
      dinoCheckbox.disabled = true;
    }
    if (elephantCheckbox.checked) {
      elephantCheckbox.disabled = true;
    }
    if (sharkCheckbox.checked) {
      sharkCheckbox.disabled = true;
    }
  }
}

checkoutButton.addEventListener("click", function () {
  sales_total(wantToBuy());
});
