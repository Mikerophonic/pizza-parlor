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
    if (pizza.size === "petite") {
        document.getElementById("size-span").innerText = pizza.size + " (8\") ~ 20.00";
    } else if (pizza.size === "medio") {
        document.getElementById("size-span").innerText = pizza.size + " (10\") ~ 35.00";
    } else {
        document.getElementById("size-span").innerText = pizza.size + " (12\") ~ 50.00"
    }
    document.getElementById("toppings-span").innerText = toppingsListAsString + " ~ " + (pizza.toppings.length * 5) + ".00 (5 ea.)";
    document.getElementById("price-span").innerText = "$" + pizza.price + ".00";
}

function handleFormSubmission(event) {
    const sizeSelection = document.querySelector("input[name='size']:checked");
    if (!sizeSelection) {
        alert("Please select a size.");
        return; 
    }
    const size = sizeSelection.value;

    const toppingSelections = document.querySelectorAll("input[name='toppings']:checked");
    const toppingsList = [];
    toppingSelections.forEach(function(topping){
        toppingsList.push(topping.value)
    });

    let newPizza = new Pizza(size, toppingsList);
    newPizza.calculatePrice();
    displayOrderDetails(newPizza);

    sizeSelection.checked = false;
    toppingSelections.forEach(topping => {
        topping.checked = false;
    });

    document.getElementById("submitBtn").removeAttribute("class");
    document.getElementById("deleteBtn").removeAttribute("class");
}

function deleteItem() {
    document.getElementById("size-span").innerText = "";
    document.getElementById("toppings-span").innerText = "";
    document.getElementById("price-span").innerText = "";
    document.getElementById("submitBtn").setAttribute("class", "hidden");
    document.getElementById("deleteBtn").setAttribute("class", "hidden");
}
  
function pressSubmit() {
    const message = document.createElement("div");
    const alert = document.createElement("img");
    alert.setAttribute("src", "images/alert-icon-1575.png");

    message.setAttribute("id", "message");
    message.innerText = "sry we ran out of everything";

    const alertContainer = document.createElement("div");
    alertContainer.setAttribute("id", "alert-container");
    alertContainer.appendChild(alert);
    alertContainer.appendChild(message);
    wrapper.style.display = "none";
    document.body.appendChild(alertContainer);

}


window.addEventListener("load", function (){
document.getElementById("addToOrderBtn").addEventListener("click", function() {
    handleFormSubmission();
    document.getElementById("submitBtn").removeAttribute("class");
    document.getElementById("deleteBtn").removeAttribute("class");
    });
    document.getElementById("deleteBtn").addEventListener("click", deleteItem);
    document.getElementById("submitBtn").addEventListener("click", pressSubmit);
    document.querySelector("h1").addEventListener("click", function() {
        window.location.reload();
    });

});
