import React from 'react';
import Header from '../componentes/Header';
import Estrenos from '../componentes/Estrenos';
import Funciones from '../componentes/Funciones';
import {connect} from 'react-redux';
import {getEstrenos,getProximosEstrenos} from '../redux/actions/moviesAction';

import SearchResults from '../componentes/SearchResults'

class HomePage extends React.Component{

	componentDidMount(){
		this.props.getEstrenos()
		this.props.getProximosEstrenos()
	}

	renderResults = ()=>{
		const {data} = this.props.search
		if(data.length === 0){
			return(
				<div>
					<h2 className="text-white">Cartelera:</h2>
					<Estrenos peliculas={this.props.estrenos.data.slice(0, 6)} path={this.props.match.path}/>
					<h2 className="text-white">Funciones:</h2>
					<Funciones/>
				</div>
			)
		}else{
			return(
					<SearchResults data={this.props.search.data}/>
				)
		}
	}

	render(){
		return(
				<div>
					<Header path={this.props.match.path}/>
					{this.renderResults()}
				</div>
		)
	}
}

function mapStateToProps({test,estrenos,proximos_estrenos,search}){
	return{
		estrenos,proximos_estrenos,search
	}
}

export default connect(mapStateToProps,{
	getEstrenos,getProximosEstrenos
})(HomePage);
