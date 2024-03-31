const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const membersContainer = document.getElementById("members");

// Fetch member data from JSON file
fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        // Display member data in grid view by default
        displayMembers(data.members, "grid");
        
        // Add event listeners to buttons
        gridButton.addEventListener("click", () => displayMembers(data.members, "grid"));
        listButton.addEventListener("click", () => displayMembers(data.members, "list"));
    })
    .catch(error => console.error("Error fetching member data:", error));

// Function to display members based on view type
function displayMembers(members, viewType) {
    membersContainer.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const section = document.createElement("section");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const a = document.createElement("a");

        img.src = member.image;
        img.alt = member.name;
        h3.textContent = member.name;
        p.textContent = `Address: ${member.address}, Phone: ${member.phone}, Website: ${member.website}`;
        a.href = member.website;
        a.textContent = "Visit Website";

        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
        section.appendChild(a);

        membersContainer.appendChild(section);
    });

    // Toggle grid/list view
    membersContainer.className = viewType;
}
