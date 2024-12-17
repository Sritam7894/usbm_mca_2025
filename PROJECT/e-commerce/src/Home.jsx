import React from 'react';
import { useCart } from './context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const { addItemToCart } = useCart();

  // Sample products
  const products = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 100 },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 200 },
    { id: 3, name: 'Product 3', image: '/images/product3.jpg', price: 300 },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg', price: 400 },
  ];

  return (
    <Container>
      <h2>Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addItemToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
