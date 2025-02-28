const SELECT_REGION = document.getElementById("region");
const SELECT_STATE = document.getElementById("state");
const SELECT_CITY = document.getElementById("city");


const regionGet = () => { 
    let region = [];
    // let url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes`;
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(res => res.json())
    .then(dado => {
        region = dado.map((dado) => 
             `<option value="${dado.id}">${dado.nome}</option>`
        );
        // Pesquisar o por que se colocar chaves ele da undefined.
        // Para questões de performance, é melhor colocar tudo dentro da variável region e depois colocar no html o conteúdo por completo
        SELECT_REGION.innerHTML += region

    })


}

const stateGet = (state) => {
    let states = [];
    SELECT_STATE.innerHTML = `<option selected disabled> Estados</option>`;

    SELECT_STATE.removeAttribute('disabled')
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${state.target.value}/estados`)
    .then(res => res.json())
    .then(dado => {
        // console.log(dado);
        states = dado.map((dado) => `<option value="${dado.id}">${dado.nome}</option>`);
        SELECT_STATE.innerHTML += states
    })
}

const cityGet = (municcityipality) => {

    let citys = [];
    let oi = (municcityipality.target.value);

    SELECT_CITY.innerHTML = `<option selected disabled> Cidades </option>`;
    SELECT_CITY.removeAttribute('disabled');
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${municcityipality.target.value}/municipios`)
    .then(res => res.json())
    .then(dado => {
        
        citys = dado.map((dado) => `<option value="${dado.id}">${dado.nome}</option>`);
        console.log(citys);
        
        SELECT_CITY.innerHTML += citys
    })
}
regionGet();