/*                                      *
 *  Creare un timer per una bomba       *
 *  la bomba esploderà dopo un          *
 *  numero di secondi random            *
 *  da uno a 10. Stampare countdown     *
 *  e alla fine stampare l'esplosione   *
 */


let seconds = Math.floor(Math.random() * (10 - 1) + 1);

const timer = () => {
    console.log(`Mancano ${seconds} secondi all'esplosione della bomba`);

    if (seconds === 0) {
        console.log("BOOM!");
        clearInterval(id);
    }
    --seconds;
};

const id = setInterval(() => timer(), 1000);