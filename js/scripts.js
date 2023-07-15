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
      const toppingsPrice = this.toppings.length * 5;
      price += toppingsPrice;    
      this.price = price;
 }


 // User Interface logic ----- 

function displayOrderDetails(pizza) {
    const toppingsListAsString = pizza.toppings.join(", ");
    document.getElementById("size-span").innerText = pizza.size;
    document.getElementById("toppings-span").innerText = toppingsListAsString;
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

function deleteItem() {
    document.getElementById("size-span").innerText = "";
    document.getElementById("toppings-span").innerText = "";
    document.getElementById("price-span").innerText = "";
    document.getElementById("submitBtn").setAttribute("class", "hidden");
    document.getElementById("deleteBtn").setAttribute("class", "hidden");
}
  
function pressSubmit() {
    const wrapper = document.getElementById("wrapper");
    const message = document.createElement("div");
    message.setAttribute("id", "message");
    message.innerText = "sry we ran out of everything";

    wrapper.style.display = "none";
    wrapper.parentNode.insertBefore(message, wrapper.nextSibling);
}


window.addEventListener("load", function (){
document.getElementById("addToOrderBtn").addEventListener("click", function() {
    handleFormSubmission();
    document.getElementById("submitBtn").removeAttribute("class");
    document.getElementById("deleteBtn").removeAttribute("class");
    });
    document.getElementById("deleteBtn").addEventListener("click", deleteItem);
    document.getElementById("submitBtn").addEventListener("click", pressSubmit);
});
