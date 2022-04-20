import React from 'react'
import { useState } from 'react'
import {Row,Col,FormControl, InputGroup, Modal, Button, Card, Form} from 'react-bootstrap'

const AddProperties = (props) => {

    const [datos, setDatos] = React.useState({
        tipo: '',
        nombre: '',
        tipo1: '',
        nombre1: ''

    });

  const [saveChanges, setSaveChanges] = useState(false);

    

  const handleChange = (e) => {
    // console.log(e.target.value)
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })
  }

  const enviarDatos = (e) => {
    e.preventDefault()
    console.log(datos.tipo + ' ' + datos.nombre)
  }

  
  const mostrarProps = () => {
    props.closeModal()
    setSaveChanges(true)
  }


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
                        <br/>
                        <Row>
                          <Col>
                            <FormControl
                              aria-label="Default"
                              aria-describedby="inputGroup-sizing-default"
                              placeholder="Animal"
                              name="tipo"
                              onChange={handleChange}

                             />
                          </Col>
                        
                          <Col>
                            <FormControl
                              aria-label="Default"
                              aria-describedby="inputGroup-sizing-default"
                              placeholder="Monkey"
                              name="nombre"
                              onChange={handleChange}

                            />
                          </Col>
                          
                        </Row>



                      <Row>
                        <Col>
                        {

                          props.addProps ? 

          
                              <Row>
                                <Col closebutton>
                                  <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="Animal"
                                  />
                                </Col>
                              
                                <Col>
                                  <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="Monkey"
                                  />
                                </Col>
                              </Row>

                            : null 
                        }
                        </Col>
                      </Row>






                        <Row>
                          <Col>
                            <Button id="mintButton" className="btn-main" onClick={props.agregarProp} >
                             Add More 
                          </Button>
                          </Col>
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

                 <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Properties</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Type</Card.Subtitle>
                    <Card.Text>
                      {datos.tipo}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Name</Card.Subtitle>
                    <Card.Text>
                      {datos.nombre}
                    </Card.Text>
                  </Card.Body>
                </Card>

                

                 : null

               }

              <br/> 

               

    </div>
  )
}

export default AddProperties;