Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["jalapeno", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["jalapeno", "pineapple"], size: "medium" }

Describe: Pizza.prototype.addTopping()
code: myPizza.addTopping("onions")
Expected Output: Pizza {toppings: ["jalapeno", pineapple", "onions"], size: "medium"}