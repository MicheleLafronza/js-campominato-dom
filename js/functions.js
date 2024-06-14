// funzione che crea un elemento e aggiunge una classe
function newElementWithClass (elmnt, clss) {
    
    // creo l'elemento
    newEl = document.createElement(elmnt);

    // gli aggiungo la classe
    newEl.classList.add(clss);

    // output della funzione: elemento con classe
    return newEl;

}

// funzione che genera un numero random con un minimo e un massimo inclusi
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// funzione che genera una lista di numeri univoci da 1 a 16
function uniqueNumbersList () {
    // creo array
    const numList = [];

    while (numList.length < 16) {
        // funzione per generare numero random
        let num = rndNum(1, 16);

        // check se il numero non c'è già nella lista, viene pushato
        if (numList.includes(num) === false) {
            numList.push(num);
        }
    }

    return numList;
}