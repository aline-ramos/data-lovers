const LOL_CARD = LOL.data;
console.log(LOL_CARD);

const LOL_VALUES = Object.values(LOL_CARD);
console.log(LOL_VALUES);

let dropFilter = "";
let dropOrder = "";

const lolTemplate = card => {
  return `<div class="card">
  <h3 class="card-title">${card.name}</h3>
  <img src="${card.splash}" alt="Imagem do personagem ${card.name}" class="card-img">
  <ul class="card-list">
    <li class="card-item">Ataque: ${card.info.attack}</li>
    <li class="card-item">Defesa: ${card.info.defense}</li>
    <li class="card-item">Magia: ${card.info.magic}</li>
    <li class="card-item">Dificuldade: ${card.info.difficulty}</li>
  </ul>
  </div>`;
};




// lista todos os cards sem nenhum filtro - begin
const LOL_CARDS = LOL_VALUES.map(card => {
  return lolTemplate(card);
});
console.log(LOL_CARDS.length);

document.querySelector(".card-content").innerHTML = LOL_CARDS.join("");
// lista todos os cards sem nenhum filtro - end




// adiciona o evento ao Filtrar por Classe - begin
document.querySelector(".drop-filter").addEventListener("change", event => {
  dropFilter = event.target.value;
  
  const LOL_CARDS = LOL_VALUES.filter(card => {
    return card.tags.indexOf(dropFilter) >= 0;
  }).map(card => {
    return lolTemplate(card);
  });
  console.log(LOL_CARDS.length);
  
  document.querySelector(".card-content").innerHTML = LOL_CARDS.join("");
});
// adiciona o evento ao Filtrar por Classe - end




// adiciona o evento ao Ordenar por - begin
document.querySelector(".drop-order").addEventListener("change", event => {
  dropOrder = event.target.value;
  
  const LOL_CARDS = LOL_VALUES.sort((cardA, cardB) => {
    return cardB.info[dropOrder] - cardA.info[dropOrder];
  }).map(card => {
    return lolTemplate(card);
  });
  console.log(LOL_CARDS.length);
  
  document.querySelector(".card-content").innerHTML = LOL_CARDS.join("");
});
// adiciona o evento ao Ordenar por - end




document.querySelectorAll(".card-img").forEach(cardImg => {
  cardImg.addEventListener("click", event => {
    console.log(event);
  });
});
