const plantsContainer = document.querySelector('.sectionPlantsList > .content');
const zombiesContainer = document.querySelector(
    '.sectionZombiesList > .content',
);

const imagesPlantsBaseFolderPath = '/assets/images/plantsImages/';
const imagesZombiesBaseFolderPath = '/assets/images/zombiesImages/';

const plantsDataPath = '/data/plantsInfo.json';
const zombiesDataPath = '/data/zombiesInfo.json';

async function fetchJSON(dataPath) {
    let response = await fetch(dataPath);

    let result = await response.json();
    return result;
}

fetchJSON(plantsDataPath).then(result =>
    result.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plantCard';
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'plantCard-wrapper';
        card.appendChild(cardWrapper);

        const cardHeader = document.createElement('div');
        cardHeader.className = 'plantCard_header';
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'plantCard_header_image-wrapper';
        const image = document.createElement('img');
        image.className = 'plantCard_header_image';
        image.src = imagesPlantsBaseFolderPath + plant.imagePath;
        image.alt = plant.title;
        image.draggable = false;
        const title = document.createElement('h4');
        title.className = 'title';
        title.innerHTML = plant.title.toUpperCase();
        imageWrapper.appendChild(image);
        cardHeader.appendChild(imageWrapper);
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

        const plantCardFooter = document.createElement('div');
        plantCardFooter.className = 'plantCard_content_footer';

        const price = document.createElement('p');
        price.className = 'price';
        price.innerHTML = 'Цена: ';
        const priceValue = document.createElement('span');
        priceValue.className = 'info-value';
        priceValue.innerHTML = plant.price;
        price.appendChild(priceValue);

        const reload = document.createElement('p');
        reload.className = 'reload';
        reload.innerHTML = 'Зарядка: ';
        const reloadValue = document.createElement('span');
        reloadValue.className = 'info-value';
        reloadValue.innerHTML = plant.reload;
        reload.appendChild(reloadValue);

        plantCardFooter.appendChild(price);
        plantCardFooter.appendChild(reload);
        cardContent.appendChild(plantCardFooter);

        plantsContainer.appendChild(card);
    }),
);

fetchJSON(zombiesDataPath).then(result =>
    result.forEach(zombie => {
        const card = document.createElement('div');
        card.className = 'zombieCard';
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'zombieCard-wrapper';
        card.appendChild(cardWrapper);

        const cardHeader = document.createElement('div');
        cardHeader.className = 'zombieCard_header';
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'zombieCard_header_image-wrapper';
        const image = document.createElement('img');
        image.className = 'zombieCard_header_image';
        image.src = imagesZombiesBaseFolderPath + zombie.imagePath;
        image.alt = zombie.title;
        image.draggable = false;
        const title = document.createElement('h4');
        title.className = 'title';
        title.innerHTML = zombie.title.toUpperCase();
        imageWrapper.appendChild(image);
        cardHeader.appendChild(imageWrapper);
        cardHeader.appendChild(title);
        card.appendChild(cardHeader);

        const cardContent = document.createElement('div');
        cardContent.className = 'zombieCard_content';
        card.appendChild(cardContent);

        const infoBlock = document.createElement('div');
        infoBlock.className = 'zombieCard_content_infoBlock';
        const description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = zombie.description;
        const stats = document.createElement('div');
        stats.className = 'stats';
        zombie.stats.forEach(stat => {
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
        biography.innerHTML = zombie.bio;
        cardContent.appendChild(infoBlock);
        infoBlock.appendChild(description);
        infoBlock.appendChild(stats);
        infoBlock.appendChild(biography);

        const zombieCardFooter = document.createElement('div');
        zombieCardFooter.className = 'zombieCard_content_footer';

        const speed = document.createElement('p');
        speed.className = 'speed';
        speed.innerHTML = 'Скорость: ';
        const speedValue = document.createElement('span');
        speedValue.className = 'info-value';
        speedValue.innerHTML = zombie.speed;
        speed.appendChild(speedValue);

        zombieCardFooter.appendChild(speed);
        cardContent.appendChild(zombieCardFooter);

        zombiesContainer.appendChild(card);
    }),
);
