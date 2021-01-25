import React from 'react';


export default function Aleatorio(props) {
    const {min, max} = props;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong>{min}
            </p>
            <p>
                <strong>Valor Máximo: </strong>{max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong>{parseInt(Math.random() * (max - min)) + min}
            </p>
        </div>
    );
}