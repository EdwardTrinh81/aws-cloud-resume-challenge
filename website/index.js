const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://tj0iagl0od.execute-api.us-east-1.amazonaws.com/Prod/put");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
