var random1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + random1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);


var random2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + random2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);


if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randomImage1 < randomImage2) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}