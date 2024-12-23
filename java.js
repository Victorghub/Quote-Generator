const quote = [
    "The intelligent man finds almost everything ridiculous, the sensible man hardly anything.",
    "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.",
    "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    "People who have what they want are fond of telling people who havent what they want that they really don't want it.",
    "An idealist is a person who helps other people to be prosperous.",
    "Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in.",
    "Pain is inevitable; suffering is optional.",
    "There's no secret about success. Did you ever know a successful man who didn't tell you about it?"
]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")



function generateQuote() {
    if (usedIndexes.size >= quote.length) {
        usedIndexes.clear()
    }

    while (true) {
    const randomIdx = Math.floor(Math.random() * quote.length)

    if (usedIndexes.has(randomIdx)) continue 

    const quotes = quote[randomIdx]
    quoteElement.innerHTML = quotes;
    usedIndexes.add(randomIdx)
    break
}
}

