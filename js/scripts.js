function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
 }

 Pizza.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
 }

 Pizza.prototype.calculatePrice = function() {
    let price = 0
    switch (this.size) {
        case "personal":
          price += 10;
          break;
        case "small":
          price += 13;
          break;
        case "medium":
          price += 16
          break;
        case "large":
          price += 19
          break;
        case "X-large":
          price += 21
          break;
        case "jumbo":
          price += 25
          break;
      }
    price += (this.toppings.length * 2)
    return price;
      
 }
