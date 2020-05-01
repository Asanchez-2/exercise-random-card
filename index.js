var cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
var cardValue = [
    '1','2', '3', '4', 
    '5', '6', '7', '8', 
    '9', '10', 'J', 'Q', 'K'];

const GenerateRandomCard = () => {
    
    let cardSuitsRandom = Math.floor(Math.random() * (cardSuits.length));
    console.log(cardSuitsRandom);

    let cardValueRandom = Math.floor(Math.random()  * (cardValue.length));

    return  cardSuits[cardSuitsRandom] + cardValue [cardValueRandom] + cardSuits[cardSuitsRandom]
};
window.onload = () => {
    document.querySelector('#allCard').innerHTML = GenerateRandomCard();
}