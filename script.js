
const  result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {
    result.innerText = originClear ? 0 : currentNumber.replace(".",",");
}

function addDigit(digit) {
    if(digit == "," && (currentNumber.includes(",") || !currentNumber))
    return;
if (restart) {
    currentNumber = digit;
    restart = false;
}
else {
    currentNumber += digit;
}

  updateResult();
}

function setOperator(newOperator) {
    if (currentNumber) {
        calculate();


        firstOperand = parseFloat(currentNumber.replace(",","."));
        currentNumber = "";
    }


    operator = newOperator;
}

function calculate() {
    if(operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentNumber.replace (",","."));
    let resultValue;

    switch (operator){
        case "+":
            resultValue = firstOperand + secondOperand;
            break;
        case "-":
            resultValue = firstOperand - secondOperand;
            break;
        case "x":
            resultValue = firstOperand * secondOperand;
            break;
        case "÷":
            resultValue = firstOperand / secondOperand;
            break;
        default:
            return;
    
    }

    if (resultValue. toString().split(".")[1]?.length > 5) {
        currentNumber = parseFloat(resultValue.toFixed(5)).toString();
    }  else{
        currentNumber = resultValue.toString();
    }

    operator = null;
    firstOperand = null;
    restart = true ;
    percentageValue = null;
    updateResult();
}

function clearCalculator() {
    currentNumber = "";
    firstOperand = null;
    operator = null;
    updateResult(true);
}

function setPorcentage() {
    let result = parseFloat(currentNumber) / 100;

    if(["+","-"].includes(operator)){
        result = result * (firstOperand || 1);
     }

     if (result.toString().split(".")[1]?.length > 5){
        result = result.toFixed(5).toString();
     }

     currentNumber = result.toString();
     updateResult();
}

buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        const buttonText = button.innerText;
        if(/^[0-9,]+$/.test(buttonText)){
            addDigit(buttonText);
        }  else if(["+","-","x","÷"].includes(buttonText)){
            setOperator (buttonText);
        }  else if (buttonText === "=") {
            calculate();
        } else if (buttonText === "C") {
            clearCalculator();
        }
          else if (buttonText === "±") {
            currentNumber = (
                parseFloat(currentNumber ||firstOperand) * -1
            ).toString();
            updateResult();
          } else if (buttonText === "%") {
            setPorcentage();
          }
    });
});

particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":12},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.04734885849793636,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":false,"anim":{"enable":true,"speed":16.783216783216783,"size_min":29.570429570429567,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4.810236182596568,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":400.8530152163807,"rotateY":400.8530152163807}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

document.querySelector('#expand-button').addEventListener('click', function() {
    document.querySelector('.calculator').classList.toggle('expanded');
});





