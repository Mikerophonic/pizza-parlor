function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
 }

 Pizza.prototype.calculatePrice = function() {
    let price = 0
    switch (this.size) {
        case "petite":
          price += 20;
          break;
        case "medio":
          price += 30;
          break;
        case "grande":
          price += 40
          break;
      }
    price += (this.toppings.length * 5)
    this.price = price;
    return price;
 }


 // User Interface logic ----- 

function displayOrderDetails(pizza) {
    document.getElementById("size-span").innerText = pizza.size;
    document.getElementById("toppings-span").innerText = pizza.toppings;
    document.getElementById("price-span").innerText = "$" + pizza.price;
}

function handleFormSubmission(event) {
    const sizeSelection = document.querySelector("input[name='size']:checked").value;
    const toppingSelections = document.querySelectorAll("input[name='toppings']:checked")
    const toppingsList = [];
    toppingSelections.forEach(function(topping){
        toppingsList.push(topping.value)
    });
    const toppingsListAsString = toppingsList.join(", ");
    let newPizza = new Pizza(sizeSelection, toppingsListAsString);
    newPizza.calculatePrice();
    displayOrderDetails(newPizza);
     document.querySelector("input[name='size']:checked").checked = false;
    toppingSelections.forEach(topping => {
      topping.checked = false;
    });
  }
  


  window.addEventListener("load", function (){
    document.getElementById("addToOrderBtn").addEventListener("click", function() {
        handleFormSubmission();
        document.getElementById("submitBtn").removeAttribute("class");
        document.getElementById("deleteBtn").removeAttribute("class");

    });
  });
