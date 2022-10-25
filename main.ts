import { Serie } from './Serie.js';
import { series } from './data.js';


//Variables obtenidas de data.ts:

let seriesTbody: HTMLElement = document.getElementById('series')!;
let card: HTMLElement = document.getElementById('card')!;
let card_image: HTMLImageElement = document.getElementById('image-serie')! as HTMLImageElement;
let card_tittle: HTMLElement = document.getElementById('name-serie')!;
let card_text: HTMLElement = document.getElementById('description-serie')!;
let card_link: HTMLAnchorElement = document.getElementById('link-serie')! as HTMLAnchorElement;


//Variables calculadas:

const avgSeasons: HTMLElement = document.getElementById("avg-seasons")!;

renderSeriesInTable(series);
avgSeasons.innerHTML = `${getAverageSeasons(series)}`


//Funciones:

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {

    let trElement = document.createElement("tr");
    let tdElement = document.createElement("td");
    let spanElement = document.createElement("span");
    let idActual = serie.id - 1

    trElement.classList.add('columnas-grises');

    tdElement.innerHTML = `${serie.id}`;
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    spanElement.innerHTML = `${serie.name}`;
    spanElement.classList.add('boton');
    spanElement.onclick = () => seleccionSerie(idActual);
    tdElement.appendChild(spanElement);
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.channel}`;
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.seasons}`;
    trElement.appendChild(tdElement);
    seriesTbody.appendChild(trElement);
  });
}


//Función que calcula el promedio de temporadas:

function getAverageSeasons(series: Serie[]): number {
  let averageSeasons: number = 0;
  series.forEach((serie) => averageSeasons = averageSeasons + serie.seasons);
  let promedio: number = averageSeasons / series.length;
  return promedio;
}


//"Event Listener":

function seleccionSerie(infoSeries: any) {
  let serie = series[infoSeries];

  card.style.display = "block";
  card_image.src = serie.image;
  card_tittle.innerHTML = serie.name;
  card_text.innerHTML = serie.description;
  card_link.innerHTML = serie.link;
  card_link.href = serie.link;
}


