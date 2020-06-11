import React from 'react'
import styled from 'styled-components'
import Actor from './Actor'

const Container = styled.div` 
	display:flex;
	overflow:scroll;
`

export default ({cast})=>{
	if(cast){
		return(

		<div>	
			<br/>
			
			<h2 className="text-white">Reparto:</h2>
			<Container>
				{
					cast.map(actor=> <Actor actor={actor} />)
				}
			</Container>
			<br/>

		</div>
			)
	}else{
		return(
			<div>Cargando...</div>
			)
	}
}