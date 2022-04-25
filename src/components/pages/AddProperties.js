import React from 'react'
import "./addProperties.css"
import { useState } from 'react'
import {Row,Col,FormControl, InputGroup, Modal, Button, Card, Form, Container,CloseButton} from 'react-bootstrap'


const AddProperties = (props) => {

    const [datos, setDatos] = React.useState({
        tipo: '',
        nombre: ''

    });

  const [saveChanges, setSaveChanges] = useState(false);

  const [propiedades, setPropiedades] = useState([]);

  const [clearInput, setClearInput] = useState("");

    

  const handleChange = (e) => {
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })

    setClearInput(e.target.value)
  }

  const enviarDatos = (e) => {
    e.preventDefault()
    setPropiedades(nuevasProps => [...nuevasProps, datos])
  }

  
  const mostrarProps = () => {
    setSaveChanges(true)
  }

  // const eliminarProp = () => {
  //   props.closeModal()
  //   setSaveChanges(false)
  // }


  return (
    <div>
      <br/> 
      <br/> 
               {
                 props.modal ? 

                 <Modal.Dialog  centered>
                    <Modal.Header>
                      <Modal.Title>Add properties</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</p>


                      <Form onSubmit={enviarDatos}>
                        <Row>
                          <Col>
                            <InputGroup.Text id="basic-addon1"><b>Type</b></InputGroup.Text>
                          </Col>
                          <Col>
                          <InputGroup.Text id="basic-addon2"><b>Name</b></InputGroup.Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <FormControl
                              aria-label="Default"
                              aria-describedby="inputGroup-sizing-default"
                              placeholder="e.g. Animal"
                              name="tipo"
                              onChange={handleChange}
                              // value={clearInput}
                             />

                          </Col>

                          <br/>
                        
                          <Col>
                            <FormControl
                              aria-label="Default"
                              aria-describedby="inputGroup-sizing-default"
                              placeholder="e.g. Monkey"
                              name="nombre"
                              onChange={handleChange}
                              // value={clearInput}

                            />
                          </Col>
                          
                        </Row>


                      <Row>
                      </Row>


                        <br/>


                        <Modal.Footer>
                        <Row>
                          <Col>
                            <Button id="mintButton" className="btn-main" type='submit' onClick={mostrarProps}>Save changes</Button>
                          </Col>
                          <Col>
                            <Button id="mintButton" className="btn-main" onClick={props.closeModal}>Close</Button>
                          </Col>

                        </Row>
                        </Modal.Footer>
                  
                  
                    </Form>

                    
                   </Modal.Body>

                  </Modal.Dialog> 

                  : null
                  
               }
               {
                 saveChanges ?

                 
                 <Container>
                  <br/>
                   <h4>Properties</h4>
                   <br/>
                                      

                     {propiedades.map(c =>
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
                      <Card.Title style={{ textTransform: 'uppercase' }}>Type</Card.Title>
                      <Card.Subtitle>{c.tipo}</Card.Subtitle>
                      <br/>
                      <Card.Title style={{ textTransform: 'uppercase' }}>Name</Card.Title>
                      <Card.Subtitle>{c.nombre}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    </Col>
                    <br/>
                    </div> )}


                  </Container>
                
                : null

               }

              <br/> 

               

    </div>
  )
}

export default AddProperties;