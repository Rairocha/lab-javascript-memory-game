class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards == undefined) { return undefined };
    for (let i = 0; i < this.cards.length; i++) {
      
      let randomPosition = Math.floor(Math.random() * i);
      [ this.cards[randomPosition],  this.cards[i]] = [ this.cards[i],  this.cards[randomPosition]];
    }
    return  this.cards
  };

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1==card2){this.pairsGuessed++};
    return card1==card2;
  }

  checkIfFinished() {
    return (this.cards.length/2) == this.pairsGuessed
  }
}
