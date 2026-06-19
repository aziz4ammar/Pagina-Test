import './App.css';
import Nav from "./components/navbar/nav";
import Back from "./components/back/back"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <Back />

      <div className="content-container">
  <Nav />
    <br/>
        <br/>
    <br/>
    <br/>

        <center><h1>Logo or slogan </h1></center>
            <br/>
    <br/>
    <br/>

  <div className="container mt-4">
    
    {/* FIRST LINE / ROW */}
    <Row className="g-4 mb-4">
      <Col xs={12} sm={6} md={3}>
        <Card border="danger" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4' >Header 1</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="dark" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4' >Header 2</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="danger" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 3</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="dark" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 4</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* SECOND LINE / ROW */}
    <Row className="g-4">
      <Col xs={12} sm={6} md={3}>
        <Card border="danger" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 5</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="dark" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 6</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="danger" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 7</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} sm={6} md={3}>
        <Card border="dark" className="h-100 p-3">
          <Card.Header id='fs' className='fs-4'>Header 8</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
        <center><h1>Logo or slogan </h1></center>
<br/>
<br/>
<br/>
<br/>


<Main/>
<br/>
<br/>


    </div>
  );
}

export default App;