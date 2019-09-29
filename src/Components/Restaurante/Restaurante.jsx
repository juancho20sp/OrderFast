import React from 'react';
import {Link, Route} from 'react-router-dom';
import classes from './Restaurante.css';
import FullRestaurante from '../FullRestaurante/FullRestaurante';

let Restaurante = (props) =>{
    return(
        <div className={classes.container}>
            <div onClick={props.openRestaurante}>
                <h2>{props.nombre}</h2>
                <p>{props.desc}</p>
            </div> 
        </div>
    )
}

export default Restaurante;