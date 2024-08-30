 let container = document.querySelector(".container");
 let heightInput = document.querySelector(".container .height input");
 let weightInput = document.querySelector(".container .height input");
 let calculateBtn= document.querySelector(".container .calculate-btn");
 let bmiTxt = document.querySelector(".container .result-box .bmi h3");
 let resultBox = document.querySelector(".container .result-box");

 let health_status = document.querySelector(".container .result-box .result");

 let calculateBmi = (){
    container. style.height = "555px";
    resultBox.style.display = "block";

    let weightValue = weightInput.value;
    let heightValue = heightInput.value;

    let bmi = (weightValue / Math.pow((heightValue / 100),2)).toFixed
    (1);

    if (bmi < 18.5){
        health_status.innerHTML = "you are <span>Normal weight</span>"
        health_status.style.color = "#ffc44d"
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        health_status.innerHTML = "you are <span>Normal weight</span>"
        health_status.style.color = "#4Ac38D"
    } else if (bmi >= 25 && bmi <= 29){
        health_status.innerHTML = "you are <span>Over Weight</span>"
        health_status.style.color = "#ffc88D"

    }else{

        health_status.innerHTML = "you are <span>Obese</span>"
        health_status.style.color = "#ff5e57"
        

    }
    bmiTxt.innerHTML = bmi;
 }

 calculateBtn .addEventListener((){
    if(heightInput.value !='' && weightInput.value != ""){
        calculateBmi();
    }

 })



 