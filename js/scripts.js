function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
 }

 Pizza.prototype.calculatePrice = function() {
    let price = 0
    switch (this.size) {
        case "petite":
          price = 20;
          break;
        case "medio":
          price = 35;
          break;
        case "grande":
          price = 50
          break;
      }
      console.log(this.toppings.length)
      const toppingsPrice = this.toppings.length * 5;
      console.log(toppingsPrice)

      price += toppingsPrice;    
      this.price = price;
 }


 // User Interface logic ----- 

function displayOrderDetails(pizza) {
    const toppingsListAsString = pizza.toppings.join(", ");
    document.getElementById("size-span").innerText = pizza.size;
    document.getElementById("toppings-span").innerText =toppingsListAsString;
    document.getElementById("price-span").innerText = "$" + pizza.price;
}

function handleFormSubmission(event) {
    const sizeSelection = document.querySelector("input[name='size']:checked").value;
    const toppingSelections = document.querySelectorAll("input[name='toppings']:checked")
    const toppingsList = [];
    toppingSelections.forEach(function(topping){
        toppingsList.push(topping.value)
    });
    let newPizza = new Pizza(sizeSelection, toppingsList);
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
