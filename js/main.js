// creo la costante bottone
const button = document.getElementById("play");

// creo la costante contenitore
const container = document.getElementById("contenitore");

// evento click pulsante gioca
button.addEventListener("click",

    function() {

        // svuotiamo il container
        container.innerHTML= " ";

        // aggiungo la classe container al contenitore per farlo comparire
        container.classList.add("container");

        // aggiungo array con numeri bombe | argomenti: numero massimo bombe, numero random minimo, e numero random massimo che dipende dalla difficoltà
        const bombs = uniqueNumbersList(16, 1 , 100);
        console.log(bombs);

        // creo variabile per il punteggio finale
        let points = 0;

        // creo variabile del div di risposta finale
        let endGame = document.querySelector(".esito-finale-hide");

        // controllo se la risposta finale è già visibile, nel caso rimuovo la classe per rendere invisibile
        if (endGame.classList.contains("esito-finale-active")) {
            endGame.classList.remove("esito-finale-active");
        }

        // creo ciclo per far inserire elementi nel container
        for (let i=1; i <=100; i++) {

            // variabile con funzione che aggiunge elemento e classe
            let boxDiv = newElementWithClass("div", "box");

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
                    
                    // se il box clickato non è nella lista delle bombe
                    if (!(bombs.includes(i))) {
                        // aggiungo la classe safe che colora di azzurro
                        boxDiv.classList.add("safe");
                        console.log("La cella cliccata è la numero: " + i);
                        // aumento il punteggio
                        points++;
                        
                    } else {
                        // altrimenti aggiungo al classe bomb che colora di rosso
                        boxDiv.classList.add("bomb")
                        console.log("La cella cliccata è una bomba: " + i);
                        // mostro il div con l'esito finale e il punteggio
                        endGame.classList.add("esito-finale-active");
                        endGame.innerHTML=`Oh no, hai colpito una bomba! Il tuo punteggio è di: ${points}`
                    }

                    // aggiungo sempre nel click, un caso rarissimo di utente che vince evitando tutte le bombe
                    if (points === (100 - bombs.length)) {
                        endGame.classList.add("esito-finale-active");
                        endGame.innerHTML=`E' incredibile, hai evitato tutte le bombe, sei nell'olimpo dei migliori. Hai totalizzato il punteggio massimo di: ${points}`

                    }

                }
            )

        }

        
    }


)