//Question 1
(a, b) => a - b;


//Question 2

const sportGames = "https://api.rawg.io/api/games?genres=sports";


fetch(sportGames)
      .then(function(response){
            return response.json();
      })
      .then(function(json){
            for(let i = 0; i < json.results.lenght; i++){
                  console.log(json.results[i].name);
            }
      })
      .catch(function(error){
            document.location.href = "error.html";
      });


//Question 3

let catExpression = "These cats are outrageous.";
catExpression = catExpression.replace("cats", "giraffes");

//Question 4

const queryStr = document.location.search;
const param = new URLSearchParams(queryStr);

let userID;

if (param.has("userID")){
    userID = param.get("userID");
    const userIDNum = parseInt(userID);

    if(userIDNum < 10){
        document.location.href = "first.html";
    }else if(userIDNum >= 10){
        document.location.href = "second.html";
    }
}else{
      document.location.href = "third.html";
}

//Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
    container.removeChild(button);


//Question 6
function addParrots(){
const animals = document.querySelector(".animals");
const cow = document.querySelector(".cows");

const parrot = document.createElement("li");
parrot.classname = "parrots";
parrot.innerText = "Parrots";

cow.after(parrot);
};

//Question 7

const fetchThisUrl = "https://api.rawg.io/api/games/3801";
const gameUrl = `${fetchThisUrl}games/`;
const detailUrl = `${gameUrl}${3801}`;

fetch(detailUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
      const txtVal = document.querySelector(".rating");
      txtVal.innerText = `Rating: ${detai.rating}`;
    })
    .catch(function(error){
      console.dir(error);
    });
