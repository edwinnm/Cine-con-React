import React, {useState} from 'react'
import './estilos.css'
const urlbaseImage = 'https://image.tmdb.org/t/p/w780/'

export default ({pelicula})=>{
	const [fontSize , setFontSize]= useState('')

	if(pelicula.hasOwnProperty('genres')){
		var generos = Object.values(pelicula.genres)
		return(
			<div className={"container-fluid" + fontSize}>
				<div className="row bg-dark" >
					<div className="col-md-4 my-auto">
						<img src={urlbaseImage+ pelicula.backdrop_path} className="card-img-top" alt="..."/>
					</div>
					<div className="col-md-8 text-white">
						<div className="row">
							<div className="col-7"> 
								<h1>{pelicula.title}</h1>
								
							</div>
							<div className="col-5">
								<button className="btn btn-secondary mr-4" onClick={() => setFontSize(' bigger')}><i class="fa fa-text-height" aria-hidden="true"></i> <strong>++</strong></button>
								<button className="btn btn-secondary" onClick={() => setFontSize(' smaller')}><i class="fa fa-text-height" aria-hidden="true"></i> <strong>--</strong></button>
							</div>
						</div>
						<div className="row">
							<p className="col"> <strong>Título original:</strong> {pelicula.original_title}</p>
						</div>
						<div className="row">
							<p className="col-4"><strong>Año:</strong> {pelicula.release_date}</p>
							<p className="col-4"><strong>Duración:</strong> {pelicula.runtime} min</p>
						</div>
						<p> <strong>Géneros:</strong> {generos.map (genero => genero['name']).join(", ") }</p>
						<p> <strong>Sinópsis:</strong> {pelicula.overview}</p>
						<p> <strong>Valoración:</strong> {pelicula.vote_average}/10</p>
					</div>
			    </div>
			</div>
			)
	}else{
		return(<p>Cargando...</p>)
	}
	}
