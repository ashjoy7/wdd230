document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Filter members with silver or gold membership levels
            const qualifiedMembers = data.filter(member => member.membership_level === "Silver" || member.membership_level === "Gold");
            
            // Shuffle the array of qualified members
            const shuffledMembers = shuffle(qualifiedMembers);

            // Display up to three randomly selected qualified members in spotlight advertisements
            const spotlightContainer = document.querySelector(".spotlight-advertisements");
            for (let i = 0; i < Math.min(3, shuffledMembers.length); i++) {
                const member = shuffledMembers[i];
                const advertisement = createAdvertisement(member);
                spotlightContainer.appendChild(advertisement);
            }
        })
        .catch(error => console.error("Error fetching members:", error));
});

// Function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create HTML for advertisement
function createAdvertisement(member) {
    const advertisement = document.createElement("div");
    advertisement.classList.add("advertisement");

    // Populate advertisement content
    advertisement.innerHTML = `
        <div class="advertisement-content">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.other_info}</p>
            <a href="${member.website}" class="button">Visit Website</a>
        </div>
    `;

    return advertisement;
}
