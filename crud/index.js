/*																							
 * 	Scrivere un semplice script che simuli le chiamate CRUD (CREATE, READ, UPDATE, DELETE) permetta di 	*
 * 	ricercare un elemento per id, filtrare per città e di riordinare gli utenti per età in maniera		*
 * 	ascendente che discendente																			*
 */

const response = {
    pagination: {
        pagelen: 3,
        currentPage: 1,
        totalPage: 2
    },
    data: [{
            id: 1,
            name: 'nome',
            surname: 'cognome',
            age: 20,
            username: 'username',
            location: {
                address: 'Via Roma 10',
                city: 'Roma'
            }
        },
        {
            id: 2,
            name: 'elis',
            surname: 'gatto',
            age: 5,
            username: 'elis',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 3,
            name: 'boh',
            surname: 'bohboh',
            age: 23,
            username: 'bohbohboh',
            location: {
                address: 'Via Roma 10',
                city: 'Milano'
            }
        },
        {
            id: 4,
            name: 'gabriele',
            surname: 'bilello',
            age: 25,
            username: 'gabriele',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 5,
            name: 'nessuna',
            surname: 'idea',
            age: 4,
            username: 'nessunaIdea',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 6,
            name: 'asd',
            surname: 'ddfdsf',
            age: 43,
            username: 'asdsadasd',
            location: {
                address: 'Via Roma 10',
                city: 'Catania'
            }
        },
    ]
};


// const dataFromResponse = []; oppure
let data;

// extract data from response obj
const getAll = () => ({ data } = response);
getAll();

//READ data by id parameter
const getById = id => data.find(person => person.id === id);
//console.log(getById(4));

//DELETE data by id parameter
const deleteById = id => {
    const personById = getById(id);
    const newData = [];

    for (let i = 0; i < data.length; ++i) {
        if (data[i] === personById) {
            continue;
        }
        newData.push(data[i]);
    }
    data = newData;
};
// deleteById(2);
// console.log(data);

//filterByCity
const filterByCity = city => data.filter(person => person.location.city === city);
filterByCity('Palermo');
// console.log(filterByCity('Palermo'));

//ordinare utenti (discendente)
const orderUserDesc = () => data.sort((a, b) => b.age - a.age);
// orderUserDesc();
// console.log(data);

// ordinare utenti (ascendente)
const orderUserAsc = () => data.sort((a, b) => a.age - b.age);
// orderUserAsc();
// console.log(data);

// //UPDATE obj by id from new obj
objToUpdate = {
    name: 'nuovoOggetto',
    surname: 'daAggiornare',
    age: 1,
    username: 'senzaId',
    location: { address: 'Via Roma 11', city: 'Pavia' }
}

const updateById = (idToUpdate, newObjToUpdate) => {
    // let personToUpdate = getById(idToUpdate);
    for (const personToUpdate of data) {
        if (personToUpdate.id === idToUpdate) {
            personToUpdate.name = newObjToUpdate.name;
            personToUpdate.surname = newObjToUpdate.surname;
            personToUpdate.age = newObjToUpdate.age;
            personToUpdate.username = newObjToUpdate.username;
            personToUpdate.location = newObjToUpdate.location;
            break;
        }
    }

}

updateById(1, objToUpdate);
console.log(data);