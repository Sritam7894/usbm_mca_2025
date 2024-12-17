import React from 'react';
import { useCart } from './context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Cart() {
  const { cart, removeItemFromCart, clearCart } = useCart();

  const handleRemove = (productId) => {
    removeItemFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cart.map((item) => (
              <Col key={item.id} md={3}>
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-4">
            <h4>Total: ${calculateTotal()}</h4>
            <Button variant="secondary" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
