function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
 }

 Pizza.prototype.calculatePrice = function() {
    let price = 0
    switch (this.size) {
        case "piccolo":
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

function displayOrderDetails() {

}

function handleFormSubmission(event) {
    event.preventDefault();
    const sizeSelection = document.querySelector("input[name='size']:checked").value;
    const toppingSelections = document.querySelector("input#new-phone-number").value;
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    listContacts(addressBook);
    document.querySelector("input#new-first-name").value = null;
    document.querySelector("input#new-last-name").value = null;
    document.querySelector("input#new-phone-number").value = null;
  }
  


  window.addEventListener("load", function (){
    document.getElementById("addToOrderBtn").addEventListener("submit", handleFormSubmission);
