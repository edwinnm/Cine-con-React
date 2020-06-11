import React from 'react';
import {connect} from 'react-redux';
import Header from '../componentes/Header';
import Destaque from '../componentes/Destaque';
import Cast from '../componentes/Cast';
// acciones 
import{getCreditos,getPeliculaDetalle} from '../redux/actions/moviesAction'
import Formulario from '../componentes/Formulario';

class PeliculaDetalle extends React.Component{

	state = {
		pelicula:""
	}
	componentWillMount(){

	}

	componentDidMount(){
		const {peliculaid} = this.props.match.params
		this.props.getPeliculaDetalle(peliculaid)
		this.props.getCreditos(peliculaid)
		if(this.props.location.hasOwnProperty('propiedades') ){
			let savedState =  JSON.stringify(this.props.location.propiedades.path)
			localStorage.setItem('myState', savedState);
		}

}


	render(){
		
		return(
			<div>
				<Header fecha={this.props.test.fecha} />
				<Destaque pelicula={this.props.pelicula_detalle.data}></Destaque>
				<Cast cast={this.props.creditos.data}></Cast>
				{ JSON.parse(localStorage.getItem('myState')) === "/" && <Formulario pelicula={this.props.pelicula_detalle.data.title}/>}

				
				
			</div>
			);
	}
}

function mapStateToProps({creditos,pelicula_detalle,test}){
	return{creditos,pelicula_detalle,test}
}

export default connect(mapStateToProps,{
	getCreditos,getPeliculaDetalle
})(PeliculaDetalle)