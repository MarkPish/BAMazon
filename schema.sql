CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from Products;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Game of Thrones: Season 6", "ENTERTAINMENT",27.99,25),
    ("Sony 90in Plasma TV", "ELECTRONICS",3700.99,6),
    ("Men's Levi's 501 jeans", "CLOTHING",29.99,60),
    ("CheezIts", "GROCERY",3.29,24),
    ("Cetaphil Body Lotion", "HEALTH & BODY",4.99,20),
    ("The Blues Brothers", "ENTERTAINMENT",8.99,6),
    ("Yeti 10qt Cooler", "SPORTING GOODS",69.99,10);
  
CREATE TABLE Departments(
    DepartmentID MEDIUMINT AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    OverHeadCosts DECIMAL(10,2) NOT NULL,
    TotalSales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(DepartmentID);

INSERT INTO Departments(DepartmentName, OverHeadCosts, TotalSales)
VALUES ('ENTERTAINMENT', 100000.00, 27000.00),
    ('GROCERY', 15000.00, 11000.00),
    ('CLOTHING', 55000.00, 21000.00),
    ('HOME', 40000.00, 29000.00),
    ('SPORTING GOODS', 18000.00, 10000.00),
    ('HEALTH & BODY', 7500.00, 3900.00),
    ('ELECTRONICS', 69000.00, 41000.00),
    ('CHILDREN', 50000.00, 37000.00);
)
