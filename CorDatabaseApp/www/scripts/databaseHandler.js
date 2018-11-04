﻿var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase("UserManager.db", "1.0", "Account database", 1000000);
        this.db.transaction(
            function(tx) {
                //Run SQL Here
                tx.executeSql(
                    "create table if not exists informations(_id int primary key, username text, password text, email text, age integer)", [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " + error.message);
                    }
                );
            },
            function (error) {
                console.log("Transaction error:" + error.message);
            },
            function () {
                console.log("Create DB transaction completed successfully:");
            },
        );
    }
}