// CONSUME LA API

fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.results.forEach(personaje => {

            document.getElementById("personajes").innerHTML += `

                <div class="col-md-3 mb-4">

                    <div class="card h-100">

                        <img src="${personaje.image}" class="card-img-top">

                        <div class="card-body text-dark">

                            <h5 class="card-title">
                                ${personaje.name}
                            </h5>

                            <p>
                                ${personaje.species}
                            </p>

                            <p>
                                ${personaje.status}
                            </p>

                        </div>

                    </div>

                </div>

            `;
        });

    });


// FUNCION BOTON

function GenerarPersonaje() {

    fetch("https://rickandmortyapi.com/api/character")
        .then(respuesta => respuesta.json())
        .then(datos => {

            let numeroAleatorio =
                Math.floor(Math.random() * datos.results.length);

            document.getElementById("nombre").innerText =
                datos.results[numeroAleatorio].name;

            document.getElementById("id_personaje").innerText =
                "ID: " + datos.results[numeroAleatorio].id;

            document.getElementById("imagen").src =
                datos.results[numeroAleatorio].image;

        });

}