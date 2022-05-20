'use strict';
/** Selecting Elements **/
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


/** Switching Player function **/
const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
    activePlayer=activePlayer == 0? 1 : 0;
    currentScore = 0;
}
/** Starting Conditions **/
let currentScore = 0;
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add('hidden');

/** Rolling dice functionality **/
btnRoll.addEventListener('click', function () {
    //Step 1. Generating Random dice (from 1 to 6)
    const dice = Math.trunc(Math.random()*6)+1;
    //Step 2. Displaying a dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;


    //Step 3. Check for the rolled dice
    if(dice !== 1)
    {   //Add generated value to the current score
        currentScore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
   
})

