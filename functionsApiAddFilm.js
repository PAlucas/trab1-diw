let input = document.querySelector("#inputFilmes");
let dropFilmes = document.querySelector("#dropFilmes");
let arrayFilmes = new Array();
let divImagens = document.querySelector("#pics");
const apiKey = '15ff2e0c43be1c67ac849fb79c16bf8b';
let filmes = [
    {"adult":false,"backdrop_path":"/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg","genre_ids":[28,53,80],"id":864116,"original_language":"en","original_title":"A Day to Die","overview":"O ex-oficial de operações militares Connor Connolly tem um dia para pagar US$ 2 milhões em reparações a um líder de gangue local para salvar sua esposa sequestrada. Com a vida dela em jogo, Connor deve recrutar sua antiga equipe, liderada por Brice Mason, para realizar uma série de assaltos perigosos para pagar o dinheiro que ele deve e acertar contas com o chefe de polícia corrupto da cidade.  Em uma corrida contra o tempo, a equipe deve confiar em seu treinamento tático e irmandade para salvar a si mesmos e aqueles que mais importam.","popularity":2847.136,"poster_path":"/dzDEob3PyiGY25TxmeDx1yfifEP.jpg","release_date":"2022-03-04","title":"Um Dia para Morrer","video":false,"vote_average":6,"vote_count":61},
    {"adult":false,"backdrop_path":"/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg","genre_ids":[28,12,10751,35],"id":675353,"original_language":"en","original_title":"Sonic the Hedgehog 2","overview":"Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.","popularity":2984.257,"poster_path":"/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg","release_date":"2022-03-30","title":"Sonic 2: O Filme","video":false,"vote_average":7.7,"vote_count":2061},
    {"adult":false,"backdrop_path":"/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg","genre_ids":[28,12,35],"id":752623,"original_language":"en","original_title":"The Lost City","overview":"Uma romancista reclusa acredita que nada seria pior que fazer a turnê do seu livro mais recente com o modelo que ilustra a capa. Tudo muda quando a autora e o modelo sofrem uma tentativa de sequestro, e, com isso, são levados para uma surpreendente aventura na selva.","popularity":3190.602,"poster_path":"/vsX9gj7t56ZlMYKNYccskeW5adT.jpg","release_date":"2022-03-24","title":"Cidade Perdida","video":false,"vote_average":6.8,"vote_count":1182},
    {"adult":false,"backdrop_path":"/kmCBLNHsNnlDEtghSaF2nabpG2T.jpg","genre_ids":[28,878,14],"id":526896,"original_language":"en","original_title":"Morbius","overview":"Gravemente doente com um raro distúrbio sanguíneo e determinado a salvar outros sofrendo o mesmo destino, o Dr. Morbius tenta uma aposta desesperada. O que primeiramente parece ser um sucesso radical, libera uma escuridão dentro dele e transforma esse médico em um caçador.","popularity":3124.049,"poster_path":"/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg","release_date":"2022-03-30","title":"Morbius","video":false,"vote_average":6.4,"vote_count":1665},
]

function exibirFilmes(){
    $("#pics").html("");
    let Storagelocal = JSON.parse(localStorage.getItem('filmes'));
    Storagelocal.forEach((valores) =>{
        $("#pics").append(`
            <div class="col-sm pic movieTitle">
                <img class="filme_detalhes" src=https://image.tmdb.org/t/p/w500/${valores["poster_path"]} alt="${valores.title}" onclick="direcionarDestaque('${valores.id}')">
                <h5>${valores.title}</h5>
            </div>
        `)
    })
}

function iniciarPagina(){
    if(localStorage.getItem('filmes') == null){
        localStorage.setItem('filmes',JSON.stringify(filmes)); 
        exibirFilmes();
    } else {
        exibirFilmes();
    }
}

function direcionarDestaque(title){
    window.location.assign(`destaque.html?title=${title}`)
}

document.querySelector('select').addEventListener('change', function(){
    $(this).attr("select", `${$(this).val()}`);
});


function addFilmeModal(){
    if($("select").attr("select") === "Selecionar filme"){
        return alert("Selecionar filme");
    }
    if($("select").attr("select") === undefined){
        return alert("Selecionar filme");
    }
    let novoFilme = JSON.parse(localStorage.getItem('filmes'));
    novoFilme.push(arrayFilmes[$("select").attr("select")]);
    localStorage.setItem('filmes',JSON.stringify(novoFilme)); 
    alert(`${arrayFilmes[$("select").attr("select")].title} adicionado refresh para ver`)
}

input.onchange = () =>{
    let contador = 0;
    arrayFilmes = [];
    console.log(contador);
    $("#dropFilmes").empty();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${input.value}`)
    .then((res) => res.json())
    .then((res) => {
        res.results.forEach((valor) =>{
            if(contador === 0){
                contador++; 
                return $("#dropFilmes").append(`<option>Selecionar filme</option>`)
                
            } else {
                arrayFilmes.push(valor);
                contador ++;
                return $("#dropFilmes").append(`<option value="${contador - 2 }" >${valor['original_title']}</option>`)
            }
            
        })
        
    })
}
