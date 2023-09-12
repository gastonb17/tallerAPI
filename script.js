document.addEventListener("DOMContentLoaded", function () {

    let searchBar = document.getElementById("buscador");
    let boton = document.getElementById("btn-busqueda");
    let contenedor = document.getElementById("contenedor");

    function buscaAnime() {
        const searchAnime = searchBar.value.trim();
        if (searchAnime === '') {
            return;
        }

        fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
            .then(response => response.json())
            .then(data => {
                displayData(data);              
                
            });
    };

    function displayData(anime) {
        let arrayAnime = anime.data

        const card = document.createElement('div');        

        for (let i = 0; i < arrayAnime.length; i++) {

            card.innerHTML += `
            <div class="row mt-5 contenedor-anime">
                <div class="col-3">
                    <img src=${arrayAnime[i].images.jpg.image_url}>
                </div>
                <div class="col-9">
                    <h2 class="mt-3">${arrayAnime[i].title}</h2>
                    <div class="scroll">
                        <p>${arrayAnime[i].synopsis}</p>
                        <p>Episodes: ${arrayAnime[i].episodes}</p>
                    </div>
                </div>
            </div>
            `;
        };
        contenedor.innerHTML = ''; 
        contenedor.appendChild(card);
    };

    boton.addEventListener("click", buscaAnime);
});



