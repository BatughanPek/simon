
let quotes = [
    "That's one small step for a man, a giant leap for mankind.",
    "The love of money is the root of all evil.",
    "The only thing we have to fear is fear itself.",
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "He who travels the fastest who travels alone.",
    "To be, or not to be, that is the question.",
    "Keep calm and carry on.",
    "I came, I saw, I conquered.",
    "I think, therefore I am.",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
]

let random = Math.floor(10 * Math.random())
function printQuote() {
    document.getElementById('quotebox').innerHTML = quotes[random];
}
printQuote()