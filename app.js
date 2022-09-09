// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

const askButton = document.getElementById('ask-button');
const resetButton = document.getElementById('reset-button');

const askContainer = document.getElementById('ask-container');
const fortuneContainer = document.getElementById('fortune-container');

askButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    askContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    askContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
