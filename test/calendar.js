// Get the current date
let currentDate = new Date();

// Function to generate calendar
function generateCalendar(year, month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    // Clear previous calendar
    document.getElementById("calendar").innerHTML = "";

    // Create calendar header
    let calendarHeader = document.createElement("div");
    calendarHeader.classList.add("calendar-header");
    calendarHeader.innerHTML = `
        <button id="prevMonth">&lt;</button>
        <h3>${monthNames[month]} ${year}</h3>
        <button id="nextMonth">&gt;</button>
    `;
    document.getElementById("calendar").appendChild(calendarHeader);

    // Create calendar table
    let calendarTable = document.createElement("table");
    calendarTable.id = "calendarTable";
    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    tableHead.innerHTML = `
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;
    calendarTable.appendChild(tableHead);
    calendarTable.appendChild(tableBody);
    document.getElementById("calendar").appendChild(calendarTable);

    // Get the first day of the month
    let firstDay = new Date(year, month, 1).getDay();

    // Get the number of days in the month
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create calendar cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }
        tableBody.appendChild(row);
    }
}

// Display current month calendar
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Event listeners for navigating months
document.getElementById("prevMonth").addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("nextMonth").addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
