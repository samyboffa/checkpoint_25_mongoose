const mongoose = require("mongoose");
let PersonModel = require("./src/models/person");

let persons = [
    {
        name: "samy",
        age: 30,
        favouriteFood: ["burger", "burritos", "cheesecake", "donuts", "steack"],
    },
    {
        name: "kenda",
        age: 2,
        favouriteFood: ["ships", "cheese", "mosli", "pizza", "olives"],
    },
    {
        name: "amal",
        age: 28,
        favouriteFood: ["madmouja", "cake", "cheesecake", "donuts", "crepe"],
    },
    {
        name: "amine",
        age: 15,
        favouriteFood: ["cake", "burritos", "mosli", "loubia"],
    },
    {
        name: "ahmed",
        age: 45,
        favouriteFood: ["burger", "sandwich", "cheesecake", "chicken", "ojja"],
    },
    {
        name: "hatem",
        age: 22,
        favouriteFood: ["burger", "mosli", "loubia", "donuts", "ojja"],
    },
];

mongoose
    .connect("mongodb://127.0.0.1:27017/myapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection error");
    });
//inserting people in the dataBase
/*
persons.map((person) => {
    let toAdd = new PersonModel(person);
    toAdd
        .save()
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});*/

//displaying all the people
/*
PersonModel.find()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
*/
//searching only one by one of the favourite food
/*
PersonModel.findOne({
    favouriteFood: "ojja",
})
    .then((doc) => console.log(doc))
    .catch((err) => console.log("error"));
*/
//Find By ID
/*
PersonModel.findById("6049fa579eb5ee25ec84797e")
    .then((doc) => console.log(doc))
    .catch((err) => console.log("err"));
*/
///////////////////find edit and save
/*
PersonModel.findById("6049fa579eb5ee25ec84797d")
    .then((doc) => {
        doc.favouriteFood.push("hamburger");
        doc.save();
    })
    .catch((err) => console.log("error"));
*/
//findone and update
/*
PersonModel.findOneAndUpdate(
    {
        name: "samy",
    },
    {
        age: 20,
    },
    {
        new: true,
    }
)
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });
*/
//find One and remove
/*
PersonModel.findOneAndRemove({
    name: "hatem",
})
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });
*/
//delete many
//adding persons with the same name to delete them
/*
let mary3 = new PersonModel({
    name: "mary",
    age: 15,
    favouriteFood: ["cake", "burritos", "mosli", "loubia"],
});
let mary2 = new PersonModel({
    name: "mary",
    age: 45,
    favouriteFood: ["burger", "sandwich", "cheesecake", "chicken", "ojja"],
});
let mary = new PersonModel({
    name: "mary",
    age: 22,
    favouriteFood: ["burger", "mosli", "loubia", "donuts", "ojja"],
});
mary.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
mary2
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
mary3
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
*/
/*
PersonModel.remove({
    name: "mary",
})
    .then((done) => console.log(done))
    .catch((err) => console.log("error"));
*/
//Chain Search Query Helpers
/*
PersonModel.find({
    favouriteFood: "burritos",
})
    .limit(2)
    .sort({ name: 1 })
    .select({ age: false })
    .exec()
    .then((docs) => {
        console.log(docs);
    })
    .catch((err) => {
        console.error(err);
    });
*/
