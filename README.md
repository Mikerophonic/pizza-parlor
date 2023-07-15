# Pizza & Parlor

#### By _**Michael G Connelly**_

#### simple pizza ordering web application

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This was created as my fourth independent project for Epicodus, Intermediate Javascript course section: Object-Oriented JavaScript. The goal was to create a website for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. 


## Setup/Installation Requirements

* Clone this repository to your local machine: $ git clone https://github.com/Mikerophonic/pizza-parlor.git
* Open index.html in a web browser.

[Github Pages - Pizza & Parlor](https://mikerophonic.github.io/pizza-parlor)

## Known Bugs

* No known bugs.

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for size and toppings"
Code:   const myPizza = new Pizza("grande", ["avocado", "roast pumpkin"], );
        myPizza;
Expected Output: Pizza {size: "grande", toppings: ["avocado", "roast pumpkin"] }


Describe: Pizza.prototype.calculatePrice()

Test: "It should calculate the price based on the size property."
Code:   const myPizza = new Pizza("grande", []);
        myPizza.calculatePrice()
Expected output: 50

Test: "It should calculate the price based on the size and toppings properties."
Code:   const myPizza = new Pizza("grande", ["avocado", "roast pumpkin"]);
        myPizza.calculatePrice()
Expected output: 60

Test: "It should create a new property for the Pizza called price."
Code:   const myPizza = new Pizza("grande", ["avocado", "roast pumpkin"]);
        myPizza.calculatePrice();
        myPizza.price;
Expected output: 23

## License


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Copyright (c) _2023_ _Michael G Connelly_

