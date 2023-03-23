
// Get elements from HTML
let adviceText = document.getElementById('adviceContent');
let nextAdvice = document.getElementById('bttnNextOne');
let tweetBttn = document.getElementById('bttnTweet');

// Change background color random whe new advice is loaded
const changeBackground = () => {
    // Generate a random 6 character hex color value
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    // Set the background color of the page to the generated color
    document.body.style.background = `#${hexVal}`;
};

// Function to load advices
let randomAdvice = () => {
    nextAdvice.innerHTML = 'Loading advice...';
    // Fetching random advice from the advices slip API
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(result => {
        adviceText.innerHTML = '"' + result.slip.advice + '"';
        nextAdvice.innerHTML = 'Another One Please ';
        // Execute function to change background color
        changeBackground();
    });
}

// Tweet button
tweetBttn.addEventListener('click', () => {
    // tweetURL get te url to post on twitter with the var to the random advice
    let tweetURL = `https://twitter.com/intent/tweet?url=${adviceText.innerHTML}`;
    // Open a new tab to post the advice
    window.open(tweetURL, "_blank");
});

// On start execute fetch
randomAdvice();
