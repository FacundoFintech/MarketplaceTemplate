import React from 'react'
import { useState } from 'react'
import {Row,Col,FormControl, InputGroup, Modal, Button, Form, Container, Card, CloseButton} from 'react-bootstrap'

const AddLevels = (props) => {

    const [datos, setDatos] = React.useState({
        nombre: '',
        valor: ''
      });
    
      
      const [saveChanges, setSaveChanges] = useState(false);
      const [estados, setEstados] = useState([]);
    
      const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
      }
    
      const enviarDatos = (e) => {
        e.preventDefault()
        setEstados(nuevosStats => [...nuevosStats, datos])
      }
    
      const mostrarLevels = () => {
        setSaveChanges(true)
      }




  return (
    <div>
    <Modal.Dialog  centered>
        <Modal.Header>
          <Modal.Title>Add Levels</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Numerical traits that show as a progress bar.</p>


          <Form onSubmit={enviarDatos}>
            <Row>
              <Col>
              <Form.Label as="h5">Name</Form.Label>
              </Col>
              <Col>
              <Form.Label as="h5">Value</Form.Label>
              </Col>
            </Row>

            <Row>


              <Col>
                <FormControl
                  type="text"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="e.g. Speed"
                  name="nombre"
                  onChange={handleChange}
                 />
              </Col>

              <br/>
            
              <Col>
                <FormControl
                  type="number"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="e.g. 1"
                  name="valor"
                  max="5"
                  min="1"
                  onChange={handleChange}
                />
              </Col>


              <Col>

              <InputGroup.Text className="mb-4">
                <Col>
                  Of
                </Col>
                <Col>
                  5
                </Col>
              </InputGroup.Text>
          
              </Col>
              
            </Row>


          <Row>

          </Row>


            <br/>


            <Modal.Footer>
            <Row>
              <Col>
                <Button id="mintButton" className="btn-main" type='submit' onClick={mostrarLevels}>Save changes</Button>
              </Col>
              <Col>
                <Button id="mintButton" className="btn-main" onClick={props.closeLevels}>Close</Button>
              </Col>

            </Row>
            </Modal.Footer>
      
      
        </Form>

        
       </Modal.Body>

      </Modal.Dialog> 



    {

     saveChanges ?
    
     <Container>
      <br/>
       <h4>Levels</h4>
       <br/>
                        
        {estados.map(c =>
        <div classname="contenedorcard">
        <Col>
         <Card
          border="dark"
          style={{ width: '12rem' }}
          className="text-center"
          bg="light"
          >
         <CloseButton/>
         <Card.Body>
          <Card.Title style={{ textTransform: 'uppercase' }}>Name</Card.Title>
          <Card.Subtitle>{c.nombre}</Card.Subtitle>
          <br/>
          <Card.Title style={{ textTransform: 'uppercase' }}>Value</Card.Title>
          <Card.Subtitle>{c.valor}</Card.Subtitle>
          </Card.Body>
        </Card>
        </Col>
        <br/>
        </div> )}


      </Container>
    
    : null

   }


</div>
  )
}

export default AddLevels;