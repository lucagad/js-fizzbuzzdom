
const container = document.querySelector(".container");

/*
Creo le variabili per:
1. il numero massimo da estrarre 
2. per capire se un numero è divisibile per 3
3. per capire se un numero è divisibile per 5
*/

const numberMax = 100;
const multipleThree = 3;
const multipleFive = 5;


//Ciclo For che stampa in pagina l'elemento box tante quante volte è il numero associato alla variabile "numberMax"

for (let i=1; i <= numberMax; i++){
  // Milestone 1

  if(!(i % multipleFive) && !(i % multipleThree)) {
    console.log("FizzBuzz")
  }else if(!(i % multipleThree)) {
    console.log("Fizz")
  }else if(!(i % multipleFive)) {
    console.log("Buzz")
  }else {
    console.log(i)
  }
  // /Milestone 1

  // Milestone 2
  // Inserisco nella variabile l'elemento Div

  const boxEl = document.createElement("div");
  boxEl.className = "box";

  if(!(i % multipleFive) && !(i % multipleThree)) {
    boxEl.innerHTML= "FizzBuzz";
  }else if(!(i % multipleThree)) {
    boxEl.innerHTML= "Fizz";
  } else if(!(i % multipleFive)) {
    boxEl.innerHTML= "Buzz";
  } else{
  boxEl.append(i)
  }
  // Stampo l'elemento nel container
  container.append(boxEl);
  // /Milestone 2



}