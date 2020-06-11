import React from 'react'
import styled from 'styled-components'

const ContenedorSearch = styled.div` 
	padding:5px;
	border: 1px solid white;
	width: 260px;
`
const InputSearch = styled.input` 
	background:none;
	border:none;
	height:22px;
	color:yellow;
	&:focus{
		outline:none;
	}
	&::placeholder{
		color:#FFCA28;
	}
	`
const BotonClear = styled.a`                                                
	color:  white;
`

export default ({onChangeSearch,clear,search_text})=>(
	<div className="my-auto form-inline my-2 my-lg-0 text-white">
		<i className="fa fa-search fa-lg mr-2" aria-hidden="true"></i>
			<input className="form-control mr-2" type="search" placeholder="Buscar" onChange={onChangeSearch} value={search_text}/>
		<button href="#" className="btn text-white"onClick={clear}><i className="fa fa-close fa-lg" aria-hidden="true"></i></button>
	</div>

	)
