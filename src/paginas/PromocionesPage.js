import React from 'react';
import Header from '../componentes/Header';
import cine from '../img/Captura.JPG';
import cine2 from '../img/Captura2.JPG';
import cine3 from '../img/Captura3.JPG';
import promo from '../img/cine.jpg';


export default class PromocionesPage extends React.Component{

	render(){
		return(
			<div>
			<Header path={this.props.match.path}/>
			<h2 className="text-white text-center display-3">TU CINE SIEMPRE PIENSA EN TI</h2>
			<div className="container">
				<div className="row mt-3">
					<div className="col">
						<img src={promo} className="card-img-top border rounded" alt="..." align="center"/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-md-6">
						<img src={cine} className="card-img-top border rounded" alt="..."/>
					</div>
            		<div className="col-md-6 my-auto">
						
						<p className="text-white text-center h3">Disfruta de nuestras promociones, 
						al ser cliente tienes acceso a varios beneficios no dejes 
						pasar esta opotunidad afiliate y obten tu tarjeta</p>
					</div>
				</div>
				
				<div className="row mt-3">
					<div className="col-md-6 my-auto">
						<p className="text-white text-center h3 ">Para todos nuestros clientes tenemos
						horarios especiales con precios increibles. Mira las mejores peliculas
						en nustro nuevo horario vermount, aproveha el tiempo y disfruta de tu 
						pelicula favorita</p>
					</div>
					<div className="col-md-6">
						<img src={cine2} className="card-img-top border rounded" alt="..." align="center"/>
					</div>
				</div>
				
				<div className="row mt-3">
					<div className="col-md-6">
						<img src={cine3} className="card-img-top border rounded" alt="..."/>
					</div>
					<div className="col-md-6 my-auto">
						<p className="text-white text-center h3 ">Ver películas es uno de los mejores planes para
						 pasar el tiempo libre con tus seres queridos. Si quieres agasajarte y mejorar 
						 la experiencia del cine que mejor que hacerlo con los deliciosos helados SUNYEY.
						 Encuentralos en tus sabores favoritos.</p>
					</div>
				</div>
			</div>
			</div>
			);
	}
}

