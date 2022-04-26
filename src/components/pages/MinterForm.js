import {Row,Col,FormControl, InputGroup, Modal, Button, Card, Form, Container,CloseButton} from 'react-bootstrap'

const MinterForm = ({modal,title,text,tipo,primerCampo,segundoCampo,handleSubmit,handleChange,handleClose}) => {
  return (
    <>
      {
        modal ?
          <Modal.Dialog centered>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{text}</p>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <InputGroup.Text id="basic-addon1"><b>{tipo=="properties"?"Type":"Name"}</b></InputGroup.Text>
                  </Col>
                  <Col>
                    <InputGroup.Text id="basic-addon2"><b>{tipo=="properties"?"Name":"Value"}</b></InputGroup.Text>
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
                      value={primerCampo}
                    />
                  </Col>
                  <br />
                  <Col>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="e.g. Monkey"
                      name="nombre"
                      onChange={handleChange}
                      value={segundoCampo}
                    />
                  </Col>
                  {tipo!="properties"&&<Col>
                    <InputGroup.Text className="mb-4">
                      <Col>Of</Col>
                      <Col>5</Col>
                    </InputGroup.Text>
                  </Col>}
                </Row>
                <Row>
                </Row>
                <br />
                <Modal.Footer>
                  <Row>
                    <Col>
                      <Button id="mintButton" className="btn-main" type='submit' onClick={handleSubmit}>Save changes</Button>
                    </Col>
                    <Col>
                      <Button id="mintButton" className="btn-main" onClick={handleClose}>Close</Button>
                    </Col>
                  </Row>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
          : null
      }
    </>
  )
}

export default MinterForm