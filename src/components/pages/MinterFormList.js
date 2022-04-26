import { Row, Col, FormControl, InputGroup, Modal, Button, Card, Form, Container, CloseButton } from 'react-bootstrap'

// { "properties" :[{},{}] , "stats" : [] , "levels" : [] }

//["properties","stats","levels"]

const MinterFormList = ({ listado , handleDelete }) => {
  return (
    <section>
      {Object.keys(listado).map(prop => {
        return (
          <Container>
            <h3>{prop.toUpperCase()}</h3>
            <div classname="contenedorcard">
              {listado[prop].map(item => {
                //Object.keys(item)//[0]
                return Object.keys(item).map(primerTexto=>{
                  return (
                    <Col>
                      <Card
                        border="dark"
                        style={{ width: '12rem' }}
                        className="text-center"
                        bg="light"
                      >
                        <CloseButton onClick={()=>handleDelete(prop,primerTexto)}/>
                        <Card.Body>
                          <Card.Title style={{ textTransform: 'uppercase' }}>{prop=="properties"?"TYPE":"NAME"}</Card.Title>
                          <Card.Subtitle>{primerTexto}</Card.Subtitle>
                          <br />
                          <Card.Title style={{ textTransform: 'uppercase' }}>{prop=="properties"?"NAME":"VALUE"}</Card.Title>
                          <Card.Subtitle>{item[primerTexto]}</Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })
                
              })}
            </div>
          </Container>
        )
      })}
    </section >
  )
}

export default MinterFormList