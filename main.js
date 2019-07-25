//Random Quiz

// Global Variables
let score = 0;


//Event Listeners
document.getElementById('btn').addEventListener('click', button);

//Event Functions
function button() {
    //Input
    let flag = document.getElementById('flaganswer').value;
    let math = document.getElementById('mathanswer').value;
    let basketball = document.getElementById('nba').value;
    let animal = document.getElementById('dog').value;
    let final = document.getElementById('score').value;
    //Process
    
    if (flag =='USA') {
        document.getElementById('flag-result').innerHTML = 'Correct';
        score++;   // or score = score + 1    or even score += 1
    }  else {
        document.getElementById('flag-result').innerHTML = 'WRONG';
        score = score + 0;
    }
    
    if (math == '2') {
        document.getElementById('number-result').innerHTML = 'Correct';
        score++;
    }   else {
        document.getElementById('number-result').innerHTML = 'WRONG';
        score = score + 0;
    }
    
    if (basketball =='Raptors') {
        document.getElementById('nba-result').innerHTML = 'Correct';
        score++;
    } else {
        document.getElementById('nba-result').innerHTML = 'WRONG';
        score = score + 0;
    }
    
    if (animal =='dog') {
        document.getElementById('dog-result').innerHTML = 'Correct';
        score++;
    }  else {
        document.getElementById('dog-result').innerHTML = 'WRONG';
        score = score + 0;
    }
}