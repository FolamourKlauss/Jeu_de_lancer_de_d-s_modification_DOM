

//Création de la div dealer

var divDealer = document.createElement("div");
divDealer.id = 'dealer';
divDealer.className = 'board';




//insertion div dealer après la div player
document.getElementById('app').append(divDealer);

//Tirer un nombre aléatoire

function diceRoll(boardSelector = "player") {
    var randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log("voici le nombre aléatoire",randomNumber);
    //Création de la div dice
    var newDiv = document.createElement("div");
    newDiv.className = 'dice';
    //insertion de la div dice dans la div id  player
    document.getElementById(boardSelector).appendChild(newDiv);

    newDiv.style = `background-position: -${String(randomNumber -1)}00px 0px`;
};

 var userRequest;

do {
    if (userRequest = parseInt(prompt("Hello combien veux-tu lancer de dés ??"))) {
        console.log(userRequest);
    }else{
    alert('Peux-tu entrer un nombre s"il-te-plait?');
    }
    
} while (isNaN(userRequest));


console.log("voici le nombre de lancer", userRequest);
for(let roll = 0; roll < userRequest; roll++) {
    console.log("lancer");
    diceRoll("player");
    diceRoll("dealer");
};



