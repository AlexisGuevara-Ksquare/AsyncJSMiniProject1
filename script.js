
let adviceText = document.getElementById('adviceContent');

let randomAdvice = () => {
    // Fetching random advice from the advices slip API
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(result => {
        console.log(result);
        adviceText.innerHTML = '"' + result.slip.advice + '"';
    });
}

randomAdvice();