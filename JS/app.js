// Header Menu Start
function closeMenu() {
  document.querySelector("#navMenu ul").style.right = "-200px";
}
function openMenu() {
  document.querySelector("#navMenu ul").style.right = "0";
}
// Header Menu End

// Pricing Calculation
let defaultPrices = {
  aluminum: 100,
  rubber: 20,
  motorOil: 700,
  glass: 50,
  scrapMetal: 100,
  steel: 130,
};

let calculationForm = document.querySelector("#calculation_form");

calculationForm.addEventListener("submit", (e) => {
  let aluminumEle = document.getElementById("aluminum").value;
  let rubberEle = document.getElementById("rubber").value;
  let motorOilEle = document.getElementById("motorOil").value;
  let glassEle = document.getElementById("glass").value;
  let scrapMetalEle = document.getElementById("scrapMetal").value;
  let steelEle = document.getElementById("steel").value;
  let totalPriceEl = document.getElementById("total");

  e.preventDefault();

  let totalPrice =
    aluminumEle * defaultPrices.aluminum +
    rubberEle * defaultPrices.rubber +
    motorOilEle * defaultPrices.motorOil +
    glassEle * defaultPrices.glass +
    scrapMetalEle * defaultPrices.scrapMetal +
    steelEle * defaultPrices.steel;

  totalPriceEl.value = totalPrice;
});
