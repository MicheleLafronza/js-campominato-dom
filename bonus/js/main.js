// creo la costante bottone
const button = document.getElementById("play");

// creo la costante contenitore
const container = document.getElementById("contenitore");

// creo costante selettore difficoltà
const inputLevel = document.getElementById("difficolta")

// evento click pulsante gioca
button.addEventListener("click",

    function() {

        // svuotiamo il container
        container.innerHTML= " ";

        // aggiungo la classe container al contenitore per farlo comparire
        container.classList.add("container");

        // prendo il dato della difficoltà
        let level = parseInt(inputLevel.value);
        console.log(level);

        // personalizzo la classe con il livello di difficoltà dato
        let classDiff;

        // if else per cambiare la classe
        if (level === 100) {
            classDiff = "box-100"
        } else if (level === 81) {
            classDiff = "box-81"
        } else {
            classDiff = "box-49"
        }
        
        // creo ciclo per far comparire tot elementi nel container
        for (let i=1; i <=level; i++) {

            // variabile con funzione che aggiunge elemento e classe
            let boxDiv = newElementWithClass("div", classDiff);

            // associo al div l'evento di click
            boxDiv.addEventListener("click",
                function () {
                    boxDiv.classList.add("clicked")
                    console.log("La cella cliccata è la numero: " + i);
                }
            )

            // aggiungo il numero dentro al div sempre con la stessa funzione
            let boxNum = newElementWithClass("div", "number");

            // inserisco il div box nel container
            container.append(boxDiv);

            // inserisco il numero nel box
            boxDiv.append(boxNum);

            // inserisco il testo nel div col numero
            boxNum.innerHTML=(i);
        }

        
    }


)