const container = document.querySelector('.sectionPlantsList > .content');

const imagesFolderPath = '../assets/images/plantsImages/';

async function fetchJSON() {
    let response = await fetch('/data/plantsInfo.json');

    let result = await response.json();
    return result;
}

fetchJSON().then(result =>
    result.forEach(plant => {
        const block = document.createElement('div');

        block.className = 'blockImg';
        block.innerHTML = plant.title;
        container.appendChild(block);
    }),
);
