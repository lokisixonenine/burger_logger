    DROP DATABASE IF EXISTS burgers_db;
    CREATE DATABASE burgers_db;

    USE burgers_db;

    CREATE TABLE burgers (
        id INT AUTO_INCREMENT NOT NULL,
        burger_name VARCHAR (35) NOT NULL,
        devoured BOOLEAN NOT NULL,
        PRIMARY KEY(id)
    );

    INSERT INTO burgers (burger_name, devoured)
    VALUES ("Basic Burger", true),
    ("Cheese Burger", true),
    ("Veggie Burger", false),
    ("Bacon Burger", false),
    ("Turkey Burger", false)