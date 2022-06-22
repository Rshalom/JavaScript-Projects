function concat() { // Connecting strings using concat method
    var part_1 = "This is now ";
    var part_2 = "a full sentence.";
    var full_sentence = part_1.concat(part_2);
    document.getElementById("sentence").innerHTML = full_sentence;
};

function Slice() { // Extracting a section of the string using slice method
    var sentence = "This is now a full sentence.";
    var slice = sentence.slice(14, 18);
    document.getElementById("slice").innerHTML = slice;
};

function upper() { // Makes a string into all uppercase
    var sentence = "This is now a full sentence.";
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
};

function search() { // Searches and returns the index of a specified character or word
    var sentence = "This is now a full sentence.";
    var search = sentence.search('u');
    document.getElementById("search").innerHTML = search;
};

function to_string() { // Converts a number to a string
    x = 200;
    document.getElementById("string").innerHTML = x.toString();
}

function precision() { // Formats a number to a specific length
    x = 25.123456;
    document.getElementById("precision").innerHTML = x.toPrecision(2);
}

function fixed() { // Converts a number to a string and rounds it off to a specified number of decimals
    var x = 3.14;
    document.getElementById("fixed").innerHTML = x.toFixed(6);
}

function final() { // Displays the primitive value of a string
    var x = "This is a string";
    var result = x.valueOf();
    document.getElementById("text").innerHTML = result;
}