import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateFecha} from '../redux/actions/testActions';

import HomePage from '../paginas/HomePage';
import PeliculaDetalle from '../paginas/PeliculaDetalle';
import EstrenosPage from '../paginas/EstrenosPage';
import Footer from './Footer';
import PromocionesPage from '../paginas/PromocionesPage'


class App extends Component{

  componentDidMount(){
    setInterval(this.props.updateFecha,1000)
  }


  render(){
    return(

      <BrowserRouter>
         <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
            <Route path="/estrenos" component={EstrenosPage} />
            <Route path="/promociones" component={PromocionesPage} />
            <Footer/>
        </div>
      </BrowserRouter>
      
    )
  }
}

function mapStateToProps({test}){
  return{test}
}


export default connect(mapStateToProps,{
  updateFecha
})(App);
