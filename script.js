const entry = document.getElementById("entry");
const know = document.getElementById("know");
const entries = document.getElementById("entries");

entry.onclick = function newentry() {
    const data = document.createElement("div");
    data.classList.add("entry");  // Add a class for easier styling and selection
    data.innerHTML = `<h3>New device</h3>
    <input class="energy" placeholder="Number of watts"><br><br>
    <input class="number" placeholder="Number of devices"><br><br>
    <input class="time" placeholder="Number of hours used"><br><br>
    <input class="unit" placeholder="Bill per unit"><br><br>
    <input class="months" placeholder="Dates of the current month"><br><br>
    <button class="delete">Delete</button><br><br>`;
    entries.appendChild(data);

    // Add event listener to the delete button
    data.querySelector(".delete").onclick = function() {
        entries.removeChild(data);
    };
}

know.onclick = function calculatedbill() {
    let totalbill = 0;
    const allData = document.querySelectorAll("#entries .entry");
    allData.forEach(info => {
        const energy = info.querySelector(".energy").value;
        const time = info.querySelector('.time').value;
        const number = info.querySelector('.number').value;
        const unit = info.querySelector('.unit').value;
        const months = info.querySelector('.months').value;
        const electricitybill = energy * time * number * unit * months / 1000;
        totalbill += electricitybill;
    });
    document.getElementById("result").innerText = `The calculated bill is ${totalbill}`;
}
