import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import axios from 'axios';
import Restaurante from './../../Components/Restaurante/Restaurante';
import classes from './Restaurantes.css';

class Restaurantes extends Component{
    state={
        restaurantes: [],
        loading: true
    }

    render(){
        if(this.state.loading){
            return(
                <div>
                    <h2>Cargando restaurantes...</h2>
                </div>
            )
        } else {
            return(
                <div className={classes.container}>
                    <div className={classes.restaurantes}>
                        {this.state.restaurantes.map((restaurantes) =>(
                            this.renderRestaurantes(restaurantes)
                        ))}
                    </div>
                </div>
            );
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/juancho20sp/orderFastServer/restaurantes')
        .then(response => {
            let tempArray = [...this.state.restaurantes];
            
            response = response.data.map((restaurante) => 
                tempArray.push(restaurante)
            );

            this.setState({
                restaurantes: tempArray,
                loading: false
            });
        })
        .catch(error => {
            console.log(error)
            this.setState({
                loading: false
            });
        })
    }

    renderRestaurantes(restaurante){
        return(
            <Restaurante key={restaurante.id} nombre={restaurante.nombre}
                desc={restaurante.descripcion} openRestaurante = {this.openRestaurante.bind(this, (restaurante.id - 1))}></Restaurante>
        )
    }

    openRestaurante(restIndex){
        console.log("Abriendo: " + this.state.restaurantes[restIndex].nombre )
    }
}

export default Restaurantes;