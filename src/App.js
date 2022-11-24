import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App(props) {
  return (
    <Container>
      <Row>
        <Col>
        <Carousel className='mycarousel'>
      {
        props.adem.map((element)=>(
         <Carousel.Item>
      <img
        className="myImage"
        src={element.images.url[0]}
        alt="First slide"
      />
         </Carousel.Item>
     ))
    }
    </Carousel>
        </Col>

        <Col>
        {
          
        }
        </Col>
      </Row>
      </Container>
    

       
    
  
  
  );
}


export default App;
