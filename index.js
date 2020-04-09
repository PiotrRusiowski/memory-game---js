const cardsColor = ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6", "card-7", "card-8", "card-9", "card-1", "card-2", "card-3", "card-4", "card-5", "card-6", "card-7", "card-8", "card-9"];
let cards = document.querySelectorAll(".card");
cards = [...cards];
let activeCard = ""
let activeCards = []

const clickCard = function () {
    activeCard = this
    activeCard.classList.remove("hide")

    if (activeCards.length === 0) {
        activeCards[0] = activeCard


        return
    } else {
        cards.forEach(card => {
            activeCard = this;
            activeCards[1] = activeCard
            card.removeEventListener("click", clickCard)

            console.log("2");
            setTimeout(() => {
                if (activeCards[0].className === activeCards[1].className) {
                    activeCards.forEach(card => {
                        card.classList.add("show")
                    });
                } else {
                    activeCards.forEach(card => {
                        card.classList.add("hide")
                    });

                }
                activeCards.length = 0;
                activeCard = "";

                cards.forEach((card) => {
                    card.addEventListener("click", clickCard)
                })
            }, 2000);


        });


    }


}
const init = () => {
    cards.forEach(card => {
        let index = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[index]);
        cardsColor.splice(index, 1);
    });

};

setTimeout(() => {

    cards.forEach(card => {
        card.classList.add("hide")
        card.addEventListener("click", clickCard)
    })
    console.log(cards);
}, 2000);
init()