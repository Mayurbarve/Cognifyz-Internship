function changeColor() {
    var button = document.getElementById("colorButton");
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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

  function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var sum = num1 + num2;

    document.getElementById('result').innerHTML = "The sum is: " + sum;
  }
