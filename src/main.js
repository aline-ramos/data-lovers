const LOL_ITEMS = LOL.data;
// console.log(LOL_ITEMS);

const renderHTML = (e) => {
  const dropFilter = e.target.value;
  console.log(dropFilter);
  
  const LOL_CARDS = Object.values(LOL_ITEMS).filter(card => card.tags.includes(dropFilter) || !dropFilter).map(card => {
    return `<div class="card">
    <h3 class="card-title">${card.name}</h3>
    <img src="${card.splash}" alt="Imagem do personagem ${card.name}" class="card-img">
    </div>`;
  });
  
  // console.log(LOL_CARDS);
  
  if (dropFilter !== undefined) {
    document.querySelector(".card-subtitle").innerHTML = `Foram encontrados ${LOL_CARDS.length} itens de ${dropFilter}`;
  }
  
  document.querySelector(".card-content").innerHTML = LOL_CARDS.join("");
}

window.addEventListener("load", renderHTML);

document.querySelector(".drop-filter").addEventListener("change", renderHTML);