Describe: Pizza()

Test: "It should return a Pizza object with two properties for size and toppings"
Code:   const myPizza = new Pizza("medium", ["jalapeno", "pineapple"], );
        myPizza;
Expected Output: Pizza {size: "medium", toppings: ["jalapeno", "pineapple"] }

Describe: Pizza.prototype.addTopping()

Test: "It should add a topping to the end of the toppings array in the Pizza object."
code: myPizza.addTopping("onions")
Expected Output: Pizza {toppings: ["jalapeno", pineapple", "onions"], size: "medium"}

Describe: Pizza.prototype.calculatePrice()

Test: "It should calculate the price based on the size property."
Code:   const myPizza = new Pizza("large", []);
        myPizza.calculatePrice()
Expected output: 16

Test: "It should calculate the price based on the size and toppings properties."
Code:   const myPizza = new Pizza("large", ["jalapeno", "pineapple"]);
        myPizza.calculatePrice()
Expected output: 20
