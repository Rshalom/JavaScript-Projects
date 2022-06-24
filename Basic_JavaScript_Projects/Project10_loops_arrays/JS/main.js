function Call_Loop() { // While loop executes as long as condition is met
    let X = 10;
    let text = "";
    while (X > 0) {
       text += "<br>The number is " + X;
       X--;
    }
    document.getElementById("Loop").innerHTML = text;
};

function length() { // Calculates the number of characters in a string
    let text = "Encyclopedia";
    let length = text.length;
    document.getElementById("length").innerHTML = length;
};

function for_Loop() { // For loops executes for a known amount of time until condition is no longer met
    var instruments = ["Guitar", "Flute", "Piano", "Violin", "Cello", "Drums", "Trumpet"]
    var content = ""
    var Y;
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
};

function array_Function() { // An array with multiple elements
    var Color = [];
    Color[0] = "Blue";
    Color[1] = "Green";
    Color[2] = "Purple";
    Color[3] = "Red";
    Color[4] = "Orange";
    document.getElementById("Array").innerHTML = "My favorite color is " + Color[0];
};

function constant_function() { // A const variable created and modified
    const Animal = {type:"Dog", breed:"Golden Retriever", age:"Five years old", name:"Buddy"}
    Animal.age = "Eight years old";
    Animal.breed = "Poodle";
    document.getElementById("Constant").innerHTML = "My pet " + Animal.breed + " is " + Animal.age;
}

function keyword() { // let keyword used to create a block scope
    X = 7;
    document.getElementById("scope").innerHTML = X;
    {
        let X = 8
        document.getElementById("scope").innerHTML = X;
    }
};

function add() { // Return returns the results of a given statement 
    var x = 8;
    return x + 10;
}
document.getElementById("demo").innerHTML = add();

let Fruit = { // Method of an object created as a function property
    name: "lemon",
    color: "yellow",
    shape: "circle",
    flavor: "sour ",
    quote: function() {
        return "When life give you " + this.flavor + this.name + "s, make lemonade!";
    }
};
document.getElementById("quote").innerHTML = Fruit.quote();

function break_func() { // Break jumps out of a loop
    var text = ""
    for (let x = 0; x < 5; x++) {
        if (x === 3) { break; }
        text += "The number is " + x + "<br>";
    }
    document.getElementById("demo2").innerHTML = text;
}

function cont_func() { // continue skips over an iteration in a loop
    var text = ""
    for (let x = 10; x > 0; x--) {
        if (x === 7) { continue; }
        text += x + "<br>";
    }
    document.getElementById("demo3").innerHTML = text;
}