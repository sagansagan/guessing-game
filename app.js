//skapar random value
let random = Math.floor(Math.random() * 20 + 1);
// räknar antal gissningar
// för rätt gissning
let guess = 0;
let guessedNumbers = [];//array för gissade nummer
let list = document.querySelector('.list');
document.getElementById("submit").onclick = function(){
    // gissat nummer    
   let x = document.getElementById("guessField").value;
  
   if(x == random)
   {    
        document.getElementById("resultOfGuess").textContent = "Congratulations! You guessed right!!";
       
   }
   else if(x > random) //om gissat nummer är större än slumpat nummer
   {    
       guess++;
       document.getElementById("resultOfGuess").textContent = "Sorry, try a smaller number!";
       document.getElementById("guessField").value = "";
   }
   else
   {
       guess++;
       document.getElementById("resultOfGuess").textContent = "Sorry, try a greater number!";
       document.getElementById("guessField").value = "";
   }

   let li = document.createElement('li');
   li.innerText = Number(x);
   list.appendChild(li);
   
}