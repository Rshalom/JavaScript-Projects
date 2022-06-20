function My_Dictionary() { // Creating a dictionary of Key value pairs to be displayed using a function
    var animal = {
        name:"Lion",
        color:"Tan",
        food:"Anteloupe",
        sound:"Roar!"
    };
    delete animal.name // Deleting a KVP from the dictionary
    document.getElementById("Dictionary").innerHTML = animal.name; // Displaying a KVP that's been deleted, therefore creating an undefined result
};