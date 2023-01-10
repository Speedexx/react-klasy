import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CheckoutSteps extends React.Component {
  render() {
    const { step1, step2, step3, step4 } = this.props;
    return (
      <Row className="checkout-steps">
        <Col className={step1 ? 'active' : ''}>Sign-In</Col>
        <Col className={step2 ? 'active' : ''}>Shipping</Col>
        <Col className={step3 ? 'active' : ''}>Payment</Col>
        <Col className={step4 ? 'active' : ''}>Place Order</Col>
      </Row>
    );
  }
}