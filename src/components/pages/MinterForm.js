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
                  <Col xs="6">
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
                  <Col xs={tipo=="properties"?"6":"3"}>
                    {tipo == "properties" ? <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="e.g. Monkey"
                      name="nombre"
                      onChange={handleChange}
                      value={segundoCampo}
                    /> : <FormControl
                    type="number"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="e.g. 1"
                    name="valor"
                    max="5"
                    min="1"
                    onChange={handleChange}
                  />}
                  </Col >
                  {tipo!="properties"&&<Col xs="3">
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