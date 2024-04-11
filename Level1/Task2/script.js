//Button Color
const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = randomColor;
});

//Calculator
function addNumbers() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 + num2;
      document.getElementById('result').innerText = `Result: ${result}`;
    }

//Greeting Popup
function displayGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    
    var greetingMessage;
    
     if (currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }
    
    alert(greetingMessage);
    }
    
displayGreeting();
      