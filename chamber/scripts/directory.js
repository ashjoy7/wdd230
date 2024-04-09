const container = document.getElementById('container');

function displayGrid(companies) {
    container.innerHTML = '';
    companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${company.image}" alt="${company.name}">
            <h3>${company.name}</h3>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <p><strong>Membership Level:</strong> ${company.membership_level}</p>
            <p>${company.other_info}</p>
        `;
        container.appendChild(card);
    });
}

function displayList(companies) {
    container.innerHTML = '';
    const list = document.createElement('ul');
    companies.forEach(company => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${company.name}</h3>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <p><strong>Membership Level:</strong> ${company.membership_level}</p>
            <p>${company.other_info}</p>
        `;
        list.appendChild(listItem);
    });
    container.appendChild(list);
}

document.getElementById('grid').addEventListener('click', async () => {
    const response = await fetch('data/members.json');
    const companies = await response.json();
    displayGrid(companies);
});

document.getElementById('list').addEventListener('click', async () => {
    const response = await fetch('data/members.json');
    const companies = await response.json();
    displayList(companies);
});

// Display grid by default
fetch('data/members.json')
    .then(response => response.json())
    .then(companies => displayGrid(companies))
    .catch(error => console.error('Error fetching data:', error));
