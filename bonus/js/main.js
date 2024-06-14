// creo la costante bottone
const button = document.getElementById("play");

// creo la costante contenitore
const container = document.getElementById("contenitore");

// creo costante selettore difficoltà
const inputLevel = document.getElementById("difficolta");



// evento click pulsante gioca
button.addEventListener("click",

    function() {

        // variabile da usare successivamente per disattivare il click al termine della partita
        let enable = true;

        // svuotiamo il container
        container.innerHTML= " ";

        // aggiungo la classe container al contenitore per farlo comparire
        container.classList.add("container");

        // prendo il dato della difficoltà
        let level = parseInt(inputLevel.value);

        // personalizzo la classe con il livello di difficoltà dato
        let classDiff;

        // if else per cambiare la classe
        if (level === 100) {
            classDiff = "box-100";
        } else if (level === 81) {
            classDiff = "box-81";
        } else {
            classDiff = "box-49";
        }

        // aggiungo array con numeri bombe | argomenti: numero massimo bombe, numero random minimo, e numero random massimo che dipende dalla difficoltà
        const bombs = uniqueNumbersList(16, 1 , level);
        console.log(bombs);

        // creo variabile per il punteggio finale
        let points = 0;

        // creo variabile del div di risposta finale
        let endGame = document.querySelector(".esito-finale-hide");

        // controllo se la risposta finale è già visibile, nel caso rimuovo la classe per rendere invisibile
        if (endGame.classList.contains("esito-finale-active")) {
            endGame.classList.remove("esito-finale-active");
        }

        // creo array di numeri già clickati mi serve anche da reset
        const clickati = [];

        // creo ciclo per far inserire elementi nel container
        for (let i=1; i <=level; i++) {

            // variabile con funzione che aggiunge elemento e classe
            let boxDiv = newElementWithClass("div", classDiff);

            // aggiungo il numero dentro al div sempre con la stessa funzione
            let boxNum = newElementWithClass("div", "number");

            // inserisco il div box nel container
            container.append(boxDiv);

            // inserisco il numero nel box
            boxDiv.append(boxNum);

            // inserisco il testo nel div col numero
            boxNum.innerHTML=(i);

            
            
            // associo al boxdiv l'evento di click che determina gli esiti della partita
            boxDiv.addEventListener("click",
                function () {

                    // se il box clickato non è nella lista delle bombe e non è già stato clickato
                    if (!(bombs.includes(i)) && !(clickati.includes(i)) && enable === true) {
                        // aggiungo la classe safe che colora di azzurro
                        boxDiv.classList.add("safe");
                        // aumento il punteggio
                        points++;
                        // aggiungo a clickati
                        clickati.push(i);         

                    } else if (bombs.includes(i) && enable === true) {
                        // altrimenti aggiungo al classe bomb che colora di rosso
                        boxDiv.classList.add("bomb");
                        // mostro il div con l'esito finale e il punteggio
                        endGame.classList.add("esito-finale-active");
                        endGame.innerHTML=`Oh no, hai colpito una bomba! Il tuo punteggio è di: ${points}`;
                        // variabile per disattivare altri click
                        enable = false;
                    }

                    // aggiungo sempre nel click, un caso rarissimo di utente che vince evitando tutte le bombe
                    if (points === (level - bombs.length) && enable === true) {
                        endGame.classList.add("esito-finale-active");
                        endGame.innerHTML=`E' incredibile, hai evitato tutte le bombe, sei nell'olimpo dei migliori. Hai totalizzato il punteggio massimo di: ${points}`;
                        // variabile per disattivare altri click
                        enable = false;
                    }

                }
            )

        }
        
        
    }
    

)


