
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
  const boxEl = document.createElement("div");
  boxEl.className = "box";
  boxEl.append(i);

// Controllo se il numero è divisibile per 3 oppure per 5
  if(!(i % multipleThree)) {
    boxEl.classList.add("box-green");
    boxEl.innerHTML= "Fizz";
  } else if(!(i % multipleFive)) {
    boxEl.classList.add("box-yellow");
    boxEl.innerHTML= "Buzz";
  } 
  // Controllo se il numero è divisibile sia per 3 che per 5
  if(!(i % multipleFive) && !(i % multipleThree)) {
    boxEl.classList.add("box-red");
    boxEl.innerHTML= "FizzBuzz";
  } 

  // Stampo l'elemento nel container
  container.append(boxEl);

}