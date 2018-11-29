<<<<<<< HEAD
﻿//Juuso Kivistö, 1701442
var productHandler = {
=======
﻿var productHandler = {
>>>>>>> 5d3fea89bdaebfb898d0a544d61d524cffcbb423
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addProduct: function (username, password, email, age) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into informations(username, password, email, age) values(?, ?, ?, ?)",
                    [username, password, email, age],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add informations error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}