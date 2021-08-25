// Implementare il quickstart contenuto 
// in questa API https://docs.thecatapi.com/

async function getImg() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();

    const container = document.getElementById('wrapper-container');

    data.forEach(element => {
        const img = document.createElement('img');
        img.setAttribute('src', element.url);
        container.append(img);
    });

}

document.getElementById('button').addEventListener('click', getImg);