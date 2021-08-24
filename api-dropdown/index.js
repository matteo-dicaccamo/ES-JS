// <!-- /*
//  * Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo
//  *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù 
//  *  effettua una chiamata all'api recuperando un elemento con il tag selezionato
//  *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento
//  *  formattati in questo modo "tag1 - tag2 - tag3"
// */ -->

// <!-- https://cataas.com/api/tags -->

async function getTags() {

    const tags = await fetch('https://cataas.com/api/tags');
    const result = await tags.json();

    const newArray = result.slice(4, 9);

    const arrayTags = [...newArray, ...result.slice(14, 19)];

    // console.log(arrayTags);

    const container = document.getElementById('dropdown');

    for (let i = 0; i < arrayTags.length; ++i) {
        const option = document.createElement('option');
        option.innerText = arrayTags[i];
        container.append(option);
    }


    container.addEventListener('change', () => {

        console.log(container.value);

    })


}

getTags();