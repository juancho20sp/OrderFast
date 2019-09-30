import React from 'react';
import classes from './Anuncio.css';

let Anuncio = (props) =>{
    return(
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <p>{props.content}</p>

            <div className={classes.subContainer}>
                {props.subsection.map((subItem) =>(
                    <div className={classes.subItem}>
                        <p className={classes.subtitle}>{subItem.title}</p>
                        <p>{subItem.description}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )    
}

export default Anuncio;