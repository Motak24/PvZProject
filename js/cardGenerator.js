const plantsContainer = document.querySelector('.sectionPlantsList > .content');
const zombiesContainer = document.querySelector(
    '.sectionZombiesList > .content',
);

const imagesPlantsBaseFolderPath = '/assets/images/plantsImages/';
const imagesZombiesBaseFolderPath = '/assets/images/zombiesImages/';

const plantsDataPath = '/data/plantsInfo.json';
const zombiesDataPah = '/data/zombiesInfo.json';

async function fetchJSON(dataPath) {
    let response = await fetch(dataPath);

    let result = await response.json();
    return result;
}

fetchJSON(plantsDataPath).then(result =>
    result.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plantCard';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'plantCard_header';
        const image = document.createElement('img');
        image.className = 'plantCard_header_image';
        image.src = imagesPlantsBaseFolderPath + plant.imagePath;
        image.alt = plant.title;
        const title = document.createElement('h4');
        title.innerHTML = plant.title;
        cardHeader.appendChild(image);
        cardHeader.appendChild(title);
        card.appendChild(cardHeader);

        const cardContent = document.createElement('div');
        cardContent.className = 'plantCard_content';
        card.appendChild(cardContent);

        const infoBlock = document.createElement('div');
        infoBlock.className = 'plantCard_content_infoBlock';
        const description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = plant.description;
        const stats = document.createElement('div');
        stats.className = 'stats';
        plant.stats.forEach(stat => {
            const statField = document.createElement('p');
            statField.className = 'stat';
            statField.innerHTML = stat.name + ': ';
            const value = document.createElement('span');
            value.className = 'stat_description';
            value.innerHTML = stat.value;
            statField.appendChild(value);
            stats.appendChild(statField);
        });
        const biography = document.createElement('p');
        biography.className = 'biography';
        biography.innerHTML = plant.bio;
        cardContent.appendChild(infoBlock);
        infoBlock.appendChild(description);
        infoBlock.appendChild(stats);
        infoBlock.appendChild(biography);

        plantsContainer.appendChild(card);
    }),
);
