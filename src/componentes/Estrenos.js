import React from 'react'
import {Link} from 'react-router-dom'
const urlbaseImage = 'https://image.tmdb.org/t/p/w154'


export default ({peliculas, path})=>{
	var mensaje = "";
	console.log(path)
	if (path === "/"){
		mensaje = "Comprar"
	}else{
		mensaje="Ir a la película"
	}
	return(
	<div className="row row-cols-1 row-cols-md-6">
		{
		peliculas.map(pelicula=>(
			<div className="col mb-4">
				<div className="card h-100 bg-dark border-white rounded" >
					<img src={urlbaseImage+ pelicula.poster_path} className="card-img-top" alt="..."/>
					<div className="card-body d-flex flex-column">
						<h5 className="card-title text-white">{pelicula.title}</h5>
						<p className="card-text text-white">{pelicula.overview.substring(0,100) + "...."}</p>
						
						<Link className="btn btn-light mt-auto" key={pelicula.id} 
								to={
									{
										pathname: `/detalles/${pelicula.id}`,
										propiedades : {
											path : path
										}

									}}
									>{mensaje}</Link>
					</div>
				</div>
			</div>
				
			))
		}

	</div>
	)
	}
