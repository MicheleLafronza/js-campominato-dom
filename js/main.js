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

        // aggiungo array con numeri bombe
        const bombs = uniqueNumbersList(16, 1 , 100);
        console.log(bombs);

        // creo ciclo per far comparire tot elementi nel container
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

            // associo al div l'evento di click
            boxDiv.addEventListener("click",
                function () {
                    
                    if (bombs.includes(i)) {
                        boxDiv.classList.add("bomb")
                        console.log("La cella cliccata è la numero: " + i);
                    } else {
                        boxDiv.classList.add("safe")
                        console.log("La cella cliccata è la numero: " + i);
                    }

                }
            )

        }

        
    }


)