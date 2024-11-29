const drinksInput = document.getElementById("drinksInput");
const appetizersInput = document.getElementById("appetizersInput");
const mainCourseInput = document.getElementById("mainCourseInput");
const dessertInput = document.getElementById("dessertInput");

const orderTable = document.getElementById("orderTable");

function addOrder () {
    const row = orderTable.insertRow();

    const drinksCell = row.insertCell();
    const appetizerCell = row.insertCell();
    const mainCourseCell = row.insertCell();
    const dessertCell = row.insertCell();
    const actionsCell = row.insertCell();
    
    drinksCell.innerText = drinksInput.value;
    appetizerCell.innerText = appetizersInput.value;
    mainCourseCell.innerText = mainCourseInput.value;
    dessertCell.innerText = dessertInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        row.remove();
    });
    actionsCell.appendChild(deleteBtn);
}