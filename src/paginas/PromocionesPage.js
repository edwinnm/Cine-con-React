import React from 'react';
import Header from '../componentes/Header';


export default class PromocionesPage extends React.Component{

	render(){
		return(
			<div>
			<Header path={this.props.match.path}/>
			<h2>Soy PROMOCIONES</h2>
			</div>
			);
	}
}

