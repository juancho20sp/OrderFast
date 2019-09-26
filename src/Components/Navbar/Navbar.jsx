import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './../../Views/Home/Home';
import Restaurantes from './../../Views/Restaurantes/Restaurantes';
import Nosotros from './../../Views/Nosotros/Nosotros';
import classes from './Navbar.css';

class Header extends Component{
    state ={

    }

    render(){
        return(            
            <BrowserRouter>
                <nav className={classes.menu}>
                    <li><Link to = "/">Inicio</Link></li>
                    <li><Link to = "/restaurantes">Restaurantes</Link></li>
                    <li><Link to = "/nosotros">Nosotros</Link></li>
                </nav>

                <Route path="/" exact render={() =>(
                    <Home></Home>
                )}></Route>

                <Route path="/restaurantes" exact render={() =>(
                    <Restaurantes></Restaurantes>
                )}></Route>

                <Route path="/nosotros" exact render={() =>(
                    <Nosotros></Nosotros>
                )}></Route>
            </BrowserRouter>            
        );
    }
}

export default Header;