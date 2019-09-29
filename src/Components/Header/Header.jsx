import React, {Component} from 'react';
import Navbar from './../Navbar/Navbar';
import classes from './Header.css';

class Header extends Component{
    state ={

    }

    render(){
        return(
            <div>
               <h1 className={classes.title}>OrderFast!</h1>
               <Navbar></Navbar>
            </div>
        );
    }
}

export default Header;

