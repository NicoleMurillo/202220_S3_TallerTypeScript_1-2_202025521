import { series } from './data.js';
//Variables obtenidas de data.ts:
var seriesTbody = document.getElementById('series');
var card = document.getElementById('card');
var card_image = document.getElementById('image-serie');
var card_tittle = document.getElementById('name-serie');
var card_text = document.getElementById('description-serie');
var card_link = document.getElementById('link-serie');
//Variables calculadas:
var avgSeasons = document.getElementById("avg-seasons");
renderSeriesInTable(series);
avgSeasons.innerHTML = "".concat(getAverageSeasons(series));
//Funciones:
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var tdElement = document.createElement("td");
        var spanElement = document.createElement("span");
        var idActual = serie.id - 1;
        trElement.classList.add('columnas-grises');
        tdElement.innerHTML = "".concat(serie.id);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        spanElement.innerHTML = "".concat(serie.name);
        spanElement.classList.add('boton');
        spanElement.onclick = function () { return seleccionSerie(idActual); };
        tdElement.appendChild(spanElement);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = "".concat(serie.channel);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = "".concat(serie.seasons);
        trElement.appendChild(tdElement);
        seriesTbody.appendChild(trElement);
    });
}
//Función que calcula el promedio de temporadas:
function getAverageSeasons(series) {
    var averageSeasons = 0;
    series.forEach(function (serie) { return averageSeasons = averageSeasons + serie.seasons; });
    var average = averageSeasons / series.length;
    return average;
}
//"Event Listener":
function seleccionSerie(infoSeries) {
    var serie = series[infoSeries];
    card.style.display = "block";
    card_image.src = serie.image;
    card_tittle.innerHTML = serie.name;
    card_text.innerHTML = serie.description;
    card_link.innerHTML = serie.link;
    card_link.href = serie.link;
}
