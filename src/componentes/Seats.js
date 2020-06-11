import React from 'react'
import "./seat.css"

export default class Seats extends React.Component {
    
    constructor(props) {
      
      super(props);
        let N = 60
        this.state = {
        seat: Array.from({length: N}, (_, index) => index + 1),
        seatReserved: [7,8,9,14,56,43,23,22,12,45,56,54,32],
        seatAvailable: this.fillSeats(N),

        disponibles: 0,
        seatSeleccionado:[]
      }
    }
    componentWillMount(){
      this.setState({
        disponibles: this.props.nasientos
      })
    }
    componentWillReceiveProps(){
      this.setState({
        disponibles: this.props.nasientos
      })
    }

    
    fillSeats(N){
      let array = []
      let a = [7,8,9,14,56,43,23,22,12,45,56,54,32]
      for (let i =0; i<N; i++){
        if (! (a.indexOf(i) > -1))  array.push(i)


      }

      return array
    }
    
    onClickData(seat) {
      //Mandar dats si y solo si los asietos entas seleccionados
      if(this.state.disponibles == this.state.seatSeleccionado.length){
        
        this.props.callbackFromParent(this.state.seatSeleccionado);
      }
      //Compruebo si esta reservado
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        
      } else {
        //Compruebo si esta seleccionado
        if(this.state.seatSeleccionado.indexOf(seat) > -1 ){
          this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatSeleccionado: this.state.seatSeleccionado.filter(res => res != seat),
            
          })
        }else if(this.state.disponibles != this.state.seatSeleccionado.length ){
          this.setState({
            seatSeleccionado: this.state.seatSeleccionado.concat(seat),
            seatAvailable: this.state.seatAvailable.filter(res => res != seat),
            
          })

        }


      }
    }
    
    render() {
      return (
        <div>
          <h2 className="text-white">Escoja los asientos: </h2>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            selected = { this.state.seatSeleccionado }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
  class DrawGrid extends React.Component {
    
    dibujaGrilla(props, porFila){
      let content = [];
      let disponible = 'col-md bg-success border border-dark cuadrado'
      let reservado = 'col-md bg-danger border border-dark cuadrado'
      let seleccionado = 'col-md bg-primary border border-dark cuadrado'

      let filas = props.seat.length / porFila
      let elementosPorFila = Array.from({length: porFila}, (_, index) => index)
      
      for (let i =0; i<filas ; i++){
        
        content.push(
          <div className="row">
            {elementosPorFila.map( j => 
                        <div 
                        className={this.props.selected.indexOf(props.seat[(i*porFila)+j]) > -1? seleccionado :  
                          (this.props.available.indexOf(props.seat[(i*porFila)+j]) > -1? disponible : reservado)  }
                        key={props.seat[(i*porFila)+j]} onClick = {e => this.onClickSeat(props.seat[(i*porFila)+j])}>{props.seat[(i*porFila)+j]} </div>
                      
                        
            )}


            
          </div>
        )
      }
      return (
        <div>
            {content}
        </div>
      );

    }
    render() {
      return (
          <div className="container">
            {this.dibujaGrilla(this.props, 12)}

          </div>
      )
    }

    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
      )
    }
  }
  
  
 