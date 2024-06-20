const baseURL = "https://deckofcardsapi.com/api/deck/";
const btn = document.querySelector('#draw-btn');
const cardDiv = document.querySelector('#card-container');
let cardsLeft = 52;
const newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => {
        console.log(`${res.data.deck_id}`);
        deckID = res.data.deck_id;
    })
    .catch(err => {
        console.log(err)
    });

function drawCard(dID) {
    cardList= []
    axios.get(`${baseURL}/${dID}/draw/?count=1`)
        .then(res=>{
            cardList.push(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
            return axios.get(`${baseURL}/${dID}/draw/?count=1`);
            // console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
        }).then(res=>{
            cardList.push(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
            showCards(cardList);
        }).catch(err => {
            console.log(err);
        })
}

function showCards(cardList){
    let i = 0;
    while (i < cardList.length){
        console.log(cardList[i])
        i++;
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    drawCard(deckID);
})