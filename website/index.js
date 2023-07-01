const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://x9e07j8feb.execute-api.us-east-1.amazonaws.com/Prod/put");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
