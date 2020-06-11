import React from 'react'
import styled from 'styled-components'
import Logo from '../img/user.png'

const urlbaseImage = 'https://image.tmdb.org/t/p/w185'

const Container = styled.div` 
	border:3px solid white;
	margin:2px;
`
const Foto = styled.img` 
`


export default ({actor})=>(
	<Container>
		<Foto src={actor.profile_path ? urlbaseImage+actor.profile_path : Logo}  width="185" height="250"></Foto>
		<div className="bg-dark text-white text-center">{actor.name}</div>
	</Container>
	)