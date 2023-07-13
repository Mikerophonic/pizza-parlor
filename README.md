Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["jalapeno", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["jalapeno", "pineapple"], size: "medium" }

Describe: Pizza.prototype.addTopping()

Test: "It should add a topping to the end of the toppings array in the Pizza object."
code: myPizza.addTopping("onions")
Expected Output: Pizza {toppings: ["jalapeno", pineapple", "onions"], size: "medium"}git add