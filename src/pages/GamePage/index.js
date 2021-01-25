import React from 'react'
import "./styles.css"

export default function GamePage() {
    return (
        <div className="gamepage__container">
            <h1>
                The Last Of Us II
            </h1>
            <div className="gamepage__img">
                <figure>
                    <img alt="titulo" src={"https://sm.ign.com/t/ign_es/screenshot/default/tlou2-wp-duality-1920x1080-002b-1_cz37.1280.jpg"} />
                </figure>
            </div>
            <form>
                <p class="clasification__starts">
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label for="radio5">★</label>
                </p>
            </form>
            <p>
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32
            </p>


        </div>
    )
}
