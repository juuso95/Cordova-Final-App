<<<<<<< HEAD
﻿//Juuso Kivistö, 1701442
=======
﻿
>>>>>>> 5d3fea89bdaebfb898d0a544d61d524cffcbb423
//Creating a datbase
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
//Adding item in table
function addProduct() {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();
    var email = $("#txtEmail").val();
    var age = $("#txtAge").val();
    productHandler.addProduct(username, password, email, age);
    $("#txtUsername").val("");
    $("#txtPassword").val("");
    $("#txtEmail").val("");
    $("#txtAge").val("");
}
//Creating a datbase
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
//Adding item in table
function addProduct() {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();
    var email = $("#txtEmail").val();
    var age = $("#txtAge").val();
    if (!username) {
        alert("Username is required");
    } else {
        var r = confirm("Userame: " + username + "\n" + "Password: " + password + "\n" + "Email: " + email + "\n" + "Age: " + age);
        if (r == true) {
            productHandler.addProduct(username, password, email, age);
            $("#txtUsername").val("");
            $("#txtPassword").val("");
            $("#txtEmail").val("");
            $("#txtAge").val("");

            location.href = "/home.html";
        }
    }
}
<<<<<<< HEAD
function Login() {
    location.href = "/login.html";
}
=======

>>>>>>> 5d3fea89bdaebfb898d0a544d61d524cffcbb423

