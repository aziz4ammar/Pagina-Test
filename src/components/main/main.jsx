import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import aff from '../img/aaaa.png';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';


const main = () => {
  return (
    <div>
         <CardGroup className="w-50 mx-auto mt-4">
        
        {/* g-3 adds a "gutter" (gap) between columns. md={4} splits the row into 3 columns */}
        <Row className="g-3">
          
          <Col xs={12} md={4}>
            <Card border="danger" className="h-100">
              <Card.Img variant="top" src={aff} />
              <Card.Body>
                <Card.Title id='fs'>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col xs={12} md={4}>
            <Card border="dark" className="h-100">
              <Card.Img variant="top" src={aff} />
              <Card.Body>
                <Card.Title id='fs'>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col xs={12} md={4}>
            <Card border="danger" className="h-100">
              <Card.Img variant="top" src={aff} />
              <Card.Body>
                <Card.Title id='fs'>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
            
        </Row>
      </CardGroup>

    </div>
  )
}

export default main
