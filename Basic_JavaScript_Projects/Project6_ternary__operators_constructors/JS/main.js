function Ride_Function() { // Ternary operator that assigns a value to a variable based on a condition
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
};

function Vote() { // Ternary operator that assesses the age input to determine which message to display based on conditions
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
};

function Vehicle(Make, Model, Year, Color) { // Object constructor with default values
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Creating instances of Object and assigning values
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { // Creating a function that calls different values from the object 
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Name, Habitat, Food) { // Object constructor
    this.Animal_Name = Name;
    this.Animal_Habitat = Habitat;
    this.Animal_Food = Food;
}

var Animal_1 = new Animal("Polar Bear", "Antarctica", "Fish"); // New instance of object
function newFunction() { // Calling values within oject
    document.getElementById("New_and_This").innerHTML = "The " + Animal_1.Animal_Name + " lives in " + Animal_1.Animal_Habitat + " and has a diet consisting of " + Animal_1.Animal_Food
}

// var this = "New Variable"; // Attempting to assign a variable with a reserved word
// document.write(this);

function nested_function() { // Minus_One function nested within main nested_function
    document.getElementById("Nest").innerHTML = Count();
    function Count() {
        Starting_point = 10;
        function Minus_One() {Starting_point -= 1};
        Minus_One();
        return Starting_point;
    }
    
}