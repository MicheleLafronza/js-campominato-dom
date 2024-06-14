// funzione che crea un elemento e aggiunge una classe
function newElementWithClass (elmnt, clss) {
    
    // creo l'elemento
    newEl = document.createElement(elmnt);

    // gli aggiungo la classe
    newEl.classList.add(clss);

    // output della funzione: elemento con classe
    return newEl;
    
}