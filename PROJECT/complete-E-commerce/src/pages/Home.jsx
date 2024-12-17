import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/carousel3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <h2>Featured Products</h2>
        <Row>
          {['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg'].map((image, index) => (
            <Col key={index} md={3}>
              <Card>
                <Card.Img variant="top" src={`/images/${image}`} />
                <Card.Body>
                  <Card.Title>Product {index + 1}</Card.Title>
                  <Card.Text>Product description goes here.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
