const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

//Show new quote
function newQuote() {
  //Pick a random quote for API quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if author field is blank --> replace with 'unkown'
  if (!quote.author) {
    authorText.textContent = "uknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {}
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On load
getQuotes();
// loading();

//if we used the "quotes.js" file, we can delete all the code in this file (since we aren't
//fetching naything from an API anymore, its just a bunch of static data)

// this is all the code we would need:

// function newQuote() {
//     const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     console.log(quote);
//   }

// newQuote();
