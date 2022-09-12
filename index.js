
// random()number is from 0 to 0.99999999
// so if I want to get 1 to 6 I have to let it *6 and then the number become 0-5.9999
// and then I used floor to let the number becom integer number, now the number from 0-5
// and after it I add 1, the number from 0-5 to 1-6
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

// let the 1-6 go through the dice1.png to dice5.png
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";

// display pictures from images folder
var randomDice1 = randomImage1;
var randomDice2 = randomImage2;

// select img part in html file
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// let the images equal to src which is in the html
image1.setAttribute("src", randomDice1);
image2.setAttribute("src", randomDice2);

// set the different words when player win
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins 👏 !";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins ✌ !";
} else{
    document.querySelector("h1").innerHTML = "🤝 Draw !";
}



