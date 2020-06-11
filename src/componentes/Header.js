import React from 'react'
import Search from './Search'
import {connect} from 'react-redux'
import {getBusqueda,clearSearch} from '../redux/actions/moviesAction';
import Logo from '../img/cine.png'
import {Link} from 'react-router-dom'

class Header extends React.Component{

	state={
		search_text:""
	}

	onChangeSearch = evt =>{
		const {value} = evt.target

		if(value){
			this.props.getBusqueda(value)
			this.setState({
				search_text:value
			})
		}else{
			this.onClearTextSearch()
		}
		
	}

	onClearTextSearch = ()=>{
		this.setState({
			search_text:""
		})
		this.props.clearSearch()
	}

	render(){
		var activa = "nav-item nav-link active"
		var inactiva = "nav-item nav-link"
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
				<img src={Logo} alt="logo app" width="100" height="75"/>
				
				<div className="navbar-nav">
					<Link className={this.props.path === "/" ? activa : inactiva} to={"/"}>Inicio</Link>
					<Link className={this.props.path === "/estrenos" ? activa : inactiva} to={"/estrenos"}>Estrenos</Link>
					<Link className={this.props.path === "/promociones" ? activa : inactiva} to={"/promociones"}>Promociones</Link>

				</div>
				
				{ this.props.path === "/" && 
				<Search onChangeSearch = {this.onChangeSearch}
				clear={this.onClearTextSearch }
				search_text={this.state.search_text}
				/>}
			
				
			</nav>
		)
	}
}

function mapStateToProps({test}){
	return{test}
}

export default connect(mapStateToProps,{
	getBusqueda,clearSearch
})(Header)