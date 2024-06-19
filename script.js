const entry = document.getElementById("entry");
const know = document.getElementById("know");
const entries = document.getElementById("entries"); // Move entries outside the functions to make it accessible globally

entry.onclick = function newentry() {
    const data = document.createElement("div");
    data.innerHTML = `<h3>New device</h3>
    <input id="energy" placeholder="Number of watts"><br><br>
    <input id="number" placeholder="Number of devices"><br><br>
    <input id="time" placeholder="Number of hours used"><br><br>
    <input id="unit" placeholder="Bill per unit"><br><br>
    <input id="months" placeholder="Dates of the current month"><br><br>`;
    entries.appendChild(data);
}

know.onclick = function calculatedbill() {
    let totalbill = 0;
    const allData = document.querySelectorAll("#entries div"); // Select all dynamically created divs inside #entries
    allData.forEach(info => {
        const energy = info.querySelector("#energy").value;
        const time = info.querySelector('#time').value;
        const number = info.querySelector('#number').value;
        const unit = info.querySelector('#unit').value;
        const months = info.querySelector('#months').value;
        const electricitybill= energy * time * number * unit * months / 1000;
        totalbill += electricitybill
    });
    result.innerText = `The calculated bill is ${totalbill}`;
}
