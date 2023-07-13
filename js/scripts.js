function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
 }

 Pizza.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
 }

