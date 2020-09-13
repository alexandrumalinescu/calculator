

function calcul(event){
  var firstNumber = parseFloat(document.querySelector('#firstNumber').value);
  var secondNumber = parseFloat(document.querySelector('#secondNumber').value);
  var operation = document.querySelector('#operation').value;
  var result; 
  
  if(operation === "add")
  {
    result = firstNumber + secondNumber;
  }
  else if(operation === "min"){
   result = firstNumber - secondNumber;
  }
  else if(operation === "multiply"){
     result = firstNumber * secondNumber;
  }
  else if(operation === "divide"){
     result = firstNumber / secondNumber;
  }
  document.getElementById("result").innerText = result;
  
}



var playBtn = document.getElementById("Calculate");
playBtn.addEventListener("click", calcul);

 /// console.log(calcul());