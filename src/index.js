const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);


function start(){
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector('#memory-board').innerHTML = html;

};

function blockCards(card){
  if (memoryGame.pickedCards.length < 2) {
    memoryGame.pickedCards.push(card)
    card.classList.add('turned')
  }

  if (memoryGame.pickedCards.length === 2) {
  let card1 = memoryGame.pickedCards[0]
  let card2 = memoryGame.pickedCards[1]

  let isPair = memoryGame.checkIfPair(card1.getAttribute('data-card-name'),
   card2.getAttribute('data-card-name'))


  if (isPair) {
    card1.classList.add('blocked')
    card1.classList.add('blocked')
  } else {
    setTimeout(() => {
      card1.classList.toggle("turned")
      card2.classList.toggle("turned")
    }, 1500)
    
  }
  memoryGame.pickedCards = []}

};
function updateScore(){
  document.querySelector('#pairs-clicked').innerHTML=`${memoryGame.pairsClicked}`;
  document.querySelector('#pairs-guessed').innerHTML=`${memoryGame.pairsGuessed}`;
  if (memoryGame.checkIfFinished()){
    setTimeout(() => {alert("Ganhou!")}, 250);
    play();
  }
};
function cardClicks(){
  document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    blockCards(card);
    updateScore();
  });
});
};
function resetCards(){
  document.querySelectorAll('.card').forEach(function(c){
  c.classList.remove('turned');
  c.classList.remove('blocked')});
  memoryGame.pickedCards = [];
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;}
;
function play(){
  resetCards();
  start();
  cardClicks();
};
window.addEventListener('load', (event) => {
  play();
});






/*

}

}*/

/*
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      
      
      
    }
    )
  }
  ); */