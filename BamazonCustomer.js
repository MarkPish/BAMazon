const mySQL = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "Bamazon"
});

connection.connect(function(err){
    if (err){
       // console.log(err);
        //console.log("There is an error");
    }
});

// display all of the items available for sale 
function start(){
    // prints items for sale and their details
    connection.query('SELECT * FROM Products', function(err, res){
        if(err) throw err; 
        console.table(res);
        console.log('<<<<<<<<<<<-- Welcome to BAMazon -->>>>>>>>>>>');
        console.log('----------------------------------------------');
    
        for (var i = 0; i < res.length; i++){
            console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: $" +res[i].Price + " | " + "Stock Quantity: " + res[i].StockQuantity + " | ")
            console.log('--------------------------------------------------------------------------------------------------')
            
        }
    }

)}


console.log(' ');
inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        validate: function(value){
            if(isNaN(value) == false && parseInt(value) <= response.length && parseInt(value) > 0){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "qty",
        message: "How many would you like to purchase?",
        validate: function(value){
            if(isNaN(value)){
                return false;
            } else {
                return true; 
            }
        }
    }
]).then(function(ans) {
    var whatToBuy = (ans,id)-1;
    var howManyToBuy = parseInt(ans.qty);
    var grandTotal = parseFloat(((res[whatToBuy].Price)*howManyToBuy).toFixed(2));
// verify inventory is sufficient
if(res[whatToBuy].StockQuantity >= howManyToBuy){
    connection.query("UPDATE Products SET ? WHERE ?", [
    {StockQuantity: (res[whatToBuy].StockQuantity - howManyToBuy)},
{ItemID: ans.id}
], function(err, result){
    if(err) throw err;
    console.log("Your order has been processed. Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 2 days.");

});


    // // Query db to confirm that the given item ID exists in the specific numbers
    // var queryStr = 'SELECT * FROM products WHERE ?';

    connection.query("SELECT * FROM Departments", function(err, deptRes) {
        if (err) throw err;
        var index;
        for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){
                index = i;
            }
        }

        
    }
    )
})