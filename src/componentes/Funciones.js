import React from 'react'
import {Tab, Row, Col, ListGroup, Table} from 'react-bootstrap'

const FUNCIONES = {
  sala1 : {
    pelicula1 :{
      nombre: "Bloodshot",
      horario: "16:00",
      tipo: "2D" 
    },
    pelicula2 :{
      nombre: "Una Noche Larga",
      horario:"18:20",
      tipo: "2D"
    },
    pelicula3 : {
      nombre: "La corazonada",
      horario:"21:00",
      tipo: "2D"
    }
  },
  sala2 : {
    pelicula1 :{
      nombre: "La corazonada",
      horario:"15:00",
      tipo: "3D"
    },
    pelicula2 :{
      nombre: "La llamada de lo salvaje",
      horario:"17:00",
      tipo: "2D"
    },
    pelicula3 : {
      nombre: "La caza",
      horario:"19:00",
      tipo: "2D"
    }
  },
  sala3 : {
    pelicula1 :{
      nombre: "Onward",
      horario:"14:00",
      tipo: "3D"
    },
    pelicula2 :{
      nombre: "Bloodshot",
      horario:"16:00",
      tipo: "2D"
    },
    pelicula3 : {
      nombre: "La llamada de lo salvaje",
      horario:"18:00",
      tipo: "3D"
    }
  }
}

const SALAS = Object.keys(FUNCIONES)
const PELICULAS = Object.entries(FUNCIONES)


function _renderListGroup (sala){
  return (
    <ListGroup.Item action href={ "#"+sala}>
      {sala.charAt(0).toUpperCase() + sala.substr(1,sala.length-2)+ " "+sala.substr(-1)}
    </ListGroup.Item>

  )
}

function _renderTab (sala){
  return (
    
    <Tab.Pane eventKey={"#"+Object.values(sala)[0]}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-white">Pelicula</th>
            <th className="text-white">Horario</th>
            <th className="text-white">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(Object.values(sala)[1]).map(pelicula =>
                    <tr>
                      <td  className="text-white">{pelicula["nombre"]}</td>
                      <td  className="text-white">{pelicula["horario"]}</td>
                      <td  className="text-white">{pelicula["tipo"]}</td>
                  </tr>          
                  )}
        </tbody>
      </Table>
    </Tab.Pane>
  )
}



export default ()=>(
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#sala1">
  <Row>
    <Col sm={4}>
    <ListGroup>
    {SALAS.map (sala => _renderListGroup(sala))}
    </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        {PELICULAS.map (sala => _renderTab(sala))}
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
	
	)




