"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Ryan Wahl
   Date:   4.2.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// Run the setupcart function when the window is loaded.
window.addEventListener("load", setupCart);

// Set up the cart.
function setupCart() {
      // The list of all of the buttons with a class of addbutton
      var addButtons = document.getElementsByClassName("addButton");
      // Loop through all of the buttons
      for (var i = 0; i < addButtons.length; i++) {
            // Add a click event listener to the buttons.
            addButtons[i].addEventListener("click", function (e) {
                  // Run the item function.
                  addItem(e);
            });
      }
}

/**
 * Add an item to the cart.
 * @param {Event} e - The Event parameter
 */
function addItem(e) {
      //Get the food item element
      var foodItem = e.target.nextElementSibling;
      // Get the id of the food element.
      var foodId = foodItem.id;
      // Get the description of the food item, the true clones the nodes inside it.
      var foodDescription = foodItem.cloneNode(true);
      // Get the cart box.
      var cartBox = document.getElementById("cart");
      // If the order already exists in the checkout.
      var duplicateOrder = false;
      // Loop through all of the cartbox items
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            // If the item has the same id as the cicked button.
            if (cartBox.childNodes[i].id === foodId) {
                  // Adds one to the order(s) span box.
                  cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML = parseInt(cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML) + 1;
                  // Sets duplicatedOrder to true.
                  duplicateOrder = true;
                  // Break the for loop.
                  break;
            }
      }

      // If duplicateOrder is false.
      if (duplicateOrder === false) {
            // Creates a span.
            var orderCount = document.createElement("span");
            // Sets the text content of the span to one.
            orderCount.textContent = "1";
            // Appends it to the food description.
            foodDescription.appendChild(orderCount);
            // Append the description to the cart box.
            cartBox.appendChild(foodDescription);
      }
}