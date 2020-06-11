import React from 'react'
import {Form, Button, Col, Modal} from 'react-bootstrap'
import Seats from './Seats'


export default class Formulario extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			FECHAS : ["12-06-2020","13-06-2020","14-06-2020","15-06-2020","16-06-2020"],
			FUNCIONES : ["11:00","15:00","17:00","19:00","21:00"],
			fecha: 'Escoja',
			sala: 'Escoja',
			funcion: 'Escoja',
			numeroAsientos: 0,
			errorFecha: false,
			errorSala: false,
			errorFuncion: false,
			errorNumeroAsientos: false,
			
			show: false,
			asientos :[]
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);


	}
	handleClose(){
		this.setState({show:false})
	}

	handleShow() {
		this.setState({show:true})
	}
	
	handleChange(event) {
		if(event.target.id == 'idfecha'){
			this.setState({fecha: event.target.value});
		}else if(event.target.id == 'idfuncion'){
			this.setState({funcion: event.target.value});
		}else if(event.target.id == 'idsala'){
			this.setState({sala: event.target.value});
		}else{
			this.setState({numeroAsientos: event.target.value});
		}
		
	}
	handleSubmit(event) {
		event.preventDefault();
		this.state.fecha == "Escoja" ? this.state.errorFecha = true : this.state.errorFecha = false;
		this.state.sala =="Escoja" ? this.state.errorSala = true : this.state.errorSala = false;
		this.state.funcion =="Escoja"? this.state.errorFuncion = true : this.state.errorFuncion = false;
		this.state.numeroAsientos == 0 ? this.state.errorNumeroAsientos = true : this.state.errorNumeroAsientos = false;

		if(!this.state.errorFecha && !this.state.errorSala && !this.state.errorFuncion && !this.state.errorNumeroAsientos){
			this.handleShow()
		}
		
		
	}
	myCallback = (dataFromChild) => {
		//use dataFromChild
		this.setState({asientos: dataFromChild})
	}

	render(){
		return (
		<>
		<div>
			<Form onSubmit={this.handleSubmit} className="text-white needs-validation" novalidate>
				<Form.Row>
					<Form.Group as={Col} controlId="idfecha">
					<Form.Label>Fecha:</Form.Label>
						<Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
						<option value='Escoja' seleted >Escoja</option>
						{this.state.FECHAS.map(fecha => <option value={fecha}>{fecha}</option>)}
						</Form.Control>
						{this.state.errorFecha && <div className="border border-danger bg-danger text-white mt-2 text-center">Escoja una fecha</div>}
					</Form.Group>
		
				<Form.Group as={Col} controlId="idsala">
				<Form.Label>Sala:</Form.Label>
					<Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
					<option value='Escoja' seleted>Escoja</option>
					<option value ="1">1</option>
					<option value ="2">2</option>
					<option value ="3">3</option>
					</Form.Control>
					{this.state.errorSala && <div className="border border-danger bg-danger text-white mt-2 text-center">Escoja una sala</div>}
				</Form.Group>
				</Form.Row>
			
		
				<Form.Row>
				<Form.Group as={Col} controlId="idfuncion">
				<Form.Label>Función:</Form.Label>
					<Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
					<option value='Escoja' seleted>Escoja</option>
					{this.state.FUNCIONES.map(funcion => <option value={funcion}> {funcion}</option>)}
					</Form.Control>
					{this.state.errorFuncion && <div className="border border-danger bg-danger text-white mt-2 text-center">Escoja una funcion</div>}
				</Form.Group>
			
				<Form.Group as={Col} controlId="idasientos">
					<Form.Label>Asientos: </Form.Label>
					<Form.Control as="input" type="number" placeholder="Número de asientos"
									ref={this.textInput}
									value={this.state.numeroAsientos} onChange={this.handleChange}
									/>
					
					{this.state.errorNumeroAsientos && <div className="bborder border-danger bg-danger text-white mt-2 text-center">Escoja los asientos</div>}
				</Form.Group>
				</Form.Row>
				
				<Seats callbackFromParent={this.myCallback} nasientos={this.state.numeroAsientos}/>
			    
				<div class="col text-center mt-3">
					<Button className ="center" variant="secondary" type="submit">
					Comprar
					</Button>
    			</div>
				
			</Form>
			<Modal show={this.state.show} onHide={this.handleClose}>
        		<Modal.Header closeButton>
        	  		<Modal.Title>Confirmar compra</Modal.Title>
		        </Modal.Header>
        		<Modal.Body>
					<p>Película: {this.props.pelicula}</p>
					<p>Fecha: {this.state.fecha}</p>
					<p>Función: {this.state.funcion}</p>
					<p>Sala: {this.state.sala}</p>
					<p>Número de asientos: {this.state.numeroAsientos}</p>
					<p>Asientos: {this.state.asientos.sort().join(", ")}</p>
				</Modal.Body>
        		<Modal.Footer>
          			<Button variant="secondary" onClick={this.handleClose}>
            			Cerrar
					</Button>
					<Button variant="primary" onClick={this.handleClose}>
						Continuar con el pago
					</Button>
        		</Modal.Footer>
      		</Modal>
		</div>
		</>)
	}
	  
}