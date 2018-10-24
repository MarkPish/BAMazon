# Bamazon Overview
This is a CLI app similar to Amazon, using an SQL database. This is a command line Node.js app utilizing MySQL database storage. 
Bamazon takes orders from customers and depletes inventory from "stores" stock, simulating an online storefront. 
​
The following NPM Packages are installed to run this app:
​
* [dotenv](https://www.npmjs.com/package/dotenv)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)
* [table](https://www.npmjs.com/package/table)
​
### Customer View Function Overview
 In order for this application to function properly, I used mySQL to create a database to keep all of the store's inventory, which I called `bamazon`. I then created a Table inside of that database called `products`.
​
* The products table has each of the following columns:
​
  * item_id (unique id for each product)
​
  * product_name (Name of product)
​
  * department_name
​
  * price (cost to customer)
​
  * stock_quantity (how much of the product is available in stores)
​
I then populated the Bamazon database with 10 different products "for sale"
​
* I created a Node application called `bamazonCustomer.js`. Running the application will first display all of the items available for sale with the ids, names, and prices of products
​
* The app should then prompt users with two messages.
​
  * Name of ID customer would like to buy
  * How many units of the product they would like to buy.
  
* After the customer has placed an order, Bamazon application checks if the store has enough of the product to meet the customer's request.
​
  * If not, the app Bamazon will log the phrase `Insufficient quantity!`, and then prevent the order from going through.
​
* However, if the store _does_ have enough of the product, then Bamazon would fulfill the customer's order.
 
 * When a customer places a order, the SQL database is updated to reflect the remaining quantity.
 * Once the update goes through the total price will then be displayed to the customer.
 
 ### Screenshots will go here
 * Example for BAMazon table of products (Working)
 ![Product Table image](/assets/images/BAMazonTable.png)
 
 ### Link to Video Walkthrough will go here...maybe
 
 ### Link to Deployed Bamazon Github Application
  https://MarkPish.github.io/bamazon/
