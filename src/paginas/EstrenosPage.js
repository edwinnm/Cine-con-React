import React from 'react';
import Header from '../componentes/Header';
import {connect} from 'react-redux';
import Estrenos from '../componentes/Estrenos';
import {getEstrenos,getProximosEstrenos} from '../redux/actions/moviesAction';


class EstrenosPage extends React.Component{
	
	componentDidMount(){
		this.props.getEstrenos()
		this.props.getProximosEstrenos()
		
	}

	render(){
		return(
			<div>
			<Header path={this.props.match.path}/>
			<Estrenos peliculas={this.props.proximos_estrenos.data} path={this.props.match.path} />
			</div>
			);
	}
}
function mapStateToProps({test,estrenos,proximos_estrenos,search}){
	return{

		estrenos,proximos_estrenos,search
	}
}

export default connect(mapStateToProps,{
	getEstrenos,getProximosEstrenos
})(EstrenosPage);
