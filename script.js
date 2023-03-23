
let adviceText = document.getElementById('adviceContent');
let nextAdvice = document.getElementById('bttnNextOne');

// Function to load advices
let randomAdvice = () => {
    nextAdvice.innerHTML = 'Loading advice...';
    // Fetching random advice from the advices slip API
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(result => {
        console.log(result);
        adviceText.innerHTML = '"' + result.slip.advice + '"';
        nextAdvice.innerHTML = 'Another One Please ';

    });
}

randomAdvice();
