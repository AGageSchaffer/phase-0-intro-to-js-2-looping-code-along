// Code your solutions in this file
function writeCards(cards) {
    const newCards = []
    for (let i = 0; i < cards.length; i++)
    newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`) 
    return newCards
}
writeCards()

function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown)}
    return countDown
}