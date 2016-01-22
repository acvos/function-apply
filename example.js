var apply = require("./index");

var configuration = [{
    id: 12345,
    name: "very",
    email: "doge@doge.com"
}, {
    email: "doge@doge.com",
    name: "such",
    id: 3456
}, {
    name: "much",
    email: "doge@doge.com",
    id: 67890
}]

function createUser(id, name, email) {
    return {
        test: function () {
            console.log(id + ": " + name + " <" + email + ">");
        }
    }
}

// Use constructor function to generate model objects based on the configuration array
var users = configuration.map(apply(createUser));

// Test our models
users.forEach(function (user) {
    user.test();
});