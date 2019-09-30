import React, {Component} from 'react';
import axios from 'axios';
import Anuncio from './../../Components/Anuncio/Anuncio';
import classes from './Home.css';

class Home extends Component{
    state = {
        info: [],
        loading: true,
        selected: 0
    }

    render(){
        if(this.state.loading){
            return(
                <div>
                    <h3>Cargando...</h3>
                </div>
            )
        } else {
            return(
                <div>
                    {this.renderAnuncios(this.state.info[this.state.selected])}
                   <div className={classes.btnContainer}>
                       <a onClick={this.chooseItem.bind(this, 1)} className={classes.btn}>Restaurantes</a>
                       <a onClick={this.chooseItem.bind(this, 2)} className={classes.btn}>Cafés</a>
                   </div>
                </div>
            )
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/juancho20sp/OrderFastServer/anuncios')
            .then(response =>{
                let tempArray = [...this.state.info];

                response = response.data.map((anuncio) => (
                    tempArray.push(anuncio)
                )); 

                this.setState({
                    info: tempArray,
                    loading: false
                });

                console.log(this.state.info)
            })
            .catch(error =>{
                console.log(error);

                this.setState({
                    loading: false
                })
            })        
    }

    renderAnuncios(anuncio){
        return(
            <Anuncio key={anuncio.id} title={anuncio.title}
                content={anuncio.description} subsection={anuncio.subsection}></Anuncio>
        )
    }

    chooseItem(itemClicked){
        if(itemClicked === 1){
            this.setState({
                selected: 0
            })
        }
        if(itemClicked === 2){
            this.setState({
                selected: 1
            })
        }
    }
}

export default Home;