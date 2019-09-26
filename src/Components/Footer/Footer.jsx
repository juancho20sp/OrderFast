import React from 'react';
import classes from './Footer.css';

var Footer = () =>{
    return(
        <div className={classes.container}> 
            <p>Creado por Juan David Cabrera, Juan David Murillo y Kevin Roa.</p>
            <p>Todos los derechos reservados &copy;.</p>
            <p>OrderFast! 2019.</p>
        </div>
    );
}

export default Footer;