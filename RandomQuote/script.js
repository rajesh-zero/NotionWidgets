let refreshButtonTimeout;

function loadRandomQuote() {
    // Pick a random quote
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];

    // Update the quote text
    document.getElementById('quote').innerText = `"${randomQuote.quote}"`;

    // Update the author text
    document.getElementById('author').innerText = `- ${randomQuote.author}`;

    // Hide refresh button after quote loads
    hideRefreshButton();
}

function showRefreshButton() {
    clearTimeout(refreshButtonTimeout);
    document.getElementById('refresh-button').style.opacity = "1";
    refreshButtonTimeout = setTimeout(hideRefreshButton, 5000);  // Hide after 5 seconds
}

function hideRefreshButton() {
    document.getElementById('refresh-button').style.opacity = "0";
}

// Load a quote on initial page load
window.onload = loadRandomQuote;
