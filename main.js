const gameArea = document.querySelector("#gameArea");
const playerAnswer = document.querySelector('#answer');
const form = document.querySelector('#form');
const scoreText = document.querySelector("#scoreText");
const solution = document.querySelector("#solution");

let answer = '';
let quesValue = '';
let score = 0;

createBoard();
createBoardEventListeners();





form.addEventListener('submit', function(event){
    event.preventDefault();
    if(playerAnswer.value === answer){
        addScore(quesValue);
        solution.innerHTML = `Congratulations! You were correct. You get ${quesValue}`;
        console.log("correct");

    }else{
        console.log("incorrect");
        solution.innerHTML = `Incorrect! The solution is: ${answer}`;
        subtractScore(quesValue);
    }

    playerAnswer.value = '';
});


function createBoardEventListeners(){
    const squares = document.querySelectorAll(`#gameArea h2`);

    const buttonPressed = e => {
        console.log(e.target.innerHTML);
        console.log(e.target.classList);  // Get ID of Clicked Element
        let x = document.getElementById(e.target.id).parentNode;
        console.log(x);
        e.target.classList.add(`clicked`);
        x.classList.add(`clicked`);
        let y = document.getElementById(e.target.id);
        y.removeEventListener('click', buttonPressed,false);
        

        fetch('jeopardy.json')
    .then(function(response){
       return response.json()
    })
    .then(function(data){
        let quesNum = Math.floor(Math.random() * 50000);
        
        let questions = data;
        let questionValue  = questions[quesNum].value
        console.log(questions[quesNum].value);
        while( questionValue.toString()!= e.target.innerHTML.toString()){ 

            console.log(questionValue);
            console.log(e.target.innerHTML);

            quesNum = Math.floor(Math.random() * 50000);
            questionValue = questions[quesNum].value

        }
        answer = questions[quesNum].answer;
        quesValue = questionValue.toString();
        document.getElementById("questionText").innerHTML = `Question: ${questions[quesNum].question}`
        console.log(data[quesNum].answer);       
        
        
    })
    .catch(function(error){
        console.log(error);
        console.log("No question");
    })
      }

    for (let square of squares) { 
        square.addEventListener("click", buttonPressed);
    }

}

function createBoard(){
    var table = document.createElement("div");
    table.classList.add(`container`);
for (var i = 1; i < 6; i++) {
    var r = document.createElement("div");
    r.classList.add(`row`);


    for (var j = 1; j < 6; j++) {

        var c = document.createElement("div");
        c.classList.add(`col`);
        c.classList.add("square");

        
       c.classList.add(`${i},${j}`);
  
        r.appendChild(c);
        setBoad(`${i},${j}`, c);   
       
    }
    table.appendChild(r);
}
gameArea.appendChild(table);
}

function setImage(value, imgQuerySelector, coords) {
    var h2 = document.createElement("h2");
    h2.innerHTML = value;
    h2.setAttribute(`id`, `${coords}`);

    // This next line will just add it to the <body> tag
    imgQuerySelector.appendChild(h2);
}   
function setBoad(classCoords, querSel){
    let coords = getCoord(classCoords);

    if(coords[0] === "1" && coords[1] ==="1"){
        setImage("$100", querSel, classCoords);
    }else if(coords[0] === "1" && coords[1] ==="2"){
        setImage("$100", querSel, classCoords);
    }else if(coords[0] === "1" && coords[1] ==="3"){
        setImage("$100", querSel, classCoords);
    }else if(coords[0] === "1" && coords[1] ==="4"){
        setImage("$100", querSel, classCoords);
    }else if(coords[0] === "1" && coords[1] ==="5"){
        setImage("$100", querSel, classCoords);
    }else if(coords[0] === "2" && coords[1] ==="1"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "2" && coords[1] ==="2"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "2" && coords[1] ==="3"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "2" && coords[1] ==="4"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "2" && coords[1] ==="5"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "3" && coords[1] ==="1"){
        setImage("$400", querSel, classCoords);
    }else if(coords[0] === "3" && coords[1] ==="2"){
        setImage("$400", querSel, classCoords);
    }else if(coords[0] === "3" && coords[1] ==="3"){
        setImage("$200", querSel, classCoords);
    }else if(coords[0] === "3" && coords[1] ==="4"){
        setImage("$400", querSel, classCoords);
    }else if(coords[0] === "3" && coords[1] ==="5"){
        setImage("$400", querSel, classCoords);
    }else if(coords[0] === "4" && coords[1] ==="1"){
        setImage("$600", querSel, classCoords);
    }else if(coords[0] === "4" && coords[1] ==="2"){
        setImage("$600", querSel, classCoords);
    }else if(coords[0] === "4" && coords[1] ==="3"){
        setImage("$600", querSel, classCoords);
    }else if(coords[0] === "4" && coords[1] ==="4"){
        setImage("$600", querSel, classCoords);
    }else if(coords[0] === "4" && coords[1] ==="5"){
        setImage("$600", querSel, classCoords);
    }else if(coords[0] === "5" && coords[1] ==="1"){
        setImage("$800", querSel, classCoords);
    }else if(coords[0] === "5" && coords[1] ==="2"){
        setImage("$800", querSel, classCoords);
    }else if(coords[0] === "5" && coords[1] ==="3"){
        setImage("$800", querSel, classCoords);
    }else if(coords[0] === "5" && coords[1] ==="4"){
        setImage("$800", querSel, classCoords);
    }else if(coords[0] === "5" && coords[1] ==="5"){
        setImage("$800", querSel, classCoords);
    }
};

function addScore(val){
    let valSubstring = val.substring(1);
    let numVal = Number(valSubstring);
    score += numVal;
    scoreText.innerHTML = `Your Score: ${score}`;
}

function subtractScore(val){
    console.log(val);
    let valSubstring = val.substring(1);
    console.log(valSubstring);
    let numVal = Number(valSubstring);
    score -= numVal;
    scoreText.innerHTML = `Your Score: ${score}`;
}

function getCoord(classCoords){
    let coords = classCoords.split(",");
    return coords;
}


