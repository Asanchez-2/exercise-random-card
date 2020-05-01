const cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
const cardStyles = ['spadeCard', 'diamondCard', 'heartCard', 'clubCard'];
const cardSymbols = ['♠️', '♦️', '♥️', '♣️'];
const cardValue = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const GenerateRandomCard = () => {
    
    let cardSuitsRandom = Math.floor(Math.random() * 
      (cardSuits.length));

    let cardValueRandom = Math.floor(Math.random() *
      (cardValue.length));

    return `<div class="${cardStyles[cardSuitsRandom]}">` +
      '<div>' + cardValue[cardValueRandom] + ' ' +
      cardSymbols[cardSuitsRandom] +  '</div></div>'
};

window.onload = () => {
  document.querySelector('#cardMap').innerHTML =
    GenerateRandomCard();
}
