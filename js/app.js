/*

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

*/

// MILESTONE 2

// commento la parte di immagini da rendere dinamica
// creo l'array con l'address delle varie immagini
let addresses = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"];

// creo elemento container
// const containerElement = document.querySelector(".carousel");

const containerCarouselElement = document.querySelector(".tc-carousel");
const containerThumbnailElement = document.querySelector(".tc-thumbnails");

// ciclo for per iniettare HTML con le immagini
for(let index = 0 ; index<addresses.length ; index++){
  containerCarouselElement.innerHTML += `<img class="picture d-none" src="${addresses[index]}" alt="">`;
  containerThumbnailElement.innerHTML += `<img class="thumbnail thumb-dark" src="${addresses[index]}" alt="">`;
  // console.log(addresses[index]);
}

// aggiungo i bottoni alla fine del codice html
containerThumbnailElement.innerHTML +=
`
<div class="button button_top"><i class="fa-solid fa-arrow-up"></i></div>
<div class="button button_down"><i class="fa-solid fa-arrow-down"></i></div>
`;

// creo elemento buttone su
const upButtonElement = document.querySelector(".button_top");
// creo elemento bottone giù
const downButtonElement = document.querySelector(".button_down");
// creo array di elementi
const allPicturesElement = document.getElementsByClassName("picture");
const allThumbnailsElement = document.getElementsByClassName("thumbnail");

// attribuisco la classe d-block alla prima immagine
allPicturesElement[0].classList.replace("d-none", "d-block");
//attribuisco la classe thumb-light alla prima immagine
allThumbnailsElement[0].classList.replace("thumb-dark", "thumb-light");
// creo un contatore per le immaigini visualizzate
let counter = 0;  //integer number

// attribuisco l'event listener ai due bottoni
downButtonElement.addEventListener("click", function(){
if(counter === addresses.length -1){  //se si è alla fine dell'array
  // tolgo la visibilità all'ultima
  allPicturesElement[addresses.length-1].classList.replace("d-block", "d-none");
  allThumbnailsElement[addresses.length-1].classList.replace("thumb-light", "thumb-dark");
  // metto la visibilità alla prima
  allPicturesElement[0].classList.replace("d-none", "d-block");
  allThumbnailsElement[0].classList.replace("thumb-dark", "thumb-light");
  counter = 0;
  // console.log("reset order");
}else{
  allPicturesElement[counter].classList.replace("d-block", "d-none");
  allPicturesElement[counter+1].classList.replace("d-none", "d-block");
  allThumbnailsElement[counter].classList.replace("thumb-light", "thumb-dark");
  allThumbnailsElement[counter+1].classList.replace("thumb-dark", "thumb-light");
  // aumento il counter
  counter++; 
  // console.log(`Il counter vale ${counter}.`);
}
})

upButtonElement.addEventListener("click", function(){
  if(counter === 0){  //se si è all'inizio dell'array
    // tolgo la visibilità alla prima
    allPicturesElement[0].classList.replace("d-block", "d-none");
    // metto la visibilità all'ultima
    allPicturesElement[addresses.length-1].classList.replace("d-none", "d-block");
    allThumbnailsElement[0].classList.replace("thumb-light", "thumb-dark");
    allThumbnailsElement[addresses.length-1].classList.replace("thumb-dark", "thumb-light");

    counter = addresses.length-1;
    // console.log("reset order");
  }else{
    allPicturesElement[counter].classList.replace("d-block", "d-none");
    allPicturesElement[counter-1].classList.replace("d-none", "d-block");
    allThumbnailsElement[counter].classList.replace("thumb-light", "thumb-dark");
    allThumbnailsElement[counter-1].classList.replace("thumb-dark", "thumb-light");
    // riduco il counter
    counter--;
  }
  })


