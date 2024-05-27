//COMPONENTE ALLTHEBOOKS

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



import { Card, Row, Col } from 'react-bootstrap';
import './App.css';

const AllTheBooks = ({ Books }) => {
  
  const [clickedCard, setClickedCard] = useState(null);
  const navigate = useNavigate()
  
  
  const handleCardClick = (index) => {
    setClickedCard(index);
    setTimeout(() => {
      const bookAsin = Books[index].asin;
      navigate(`/books/${bookAsin}`);
    }, 300); 
  };

  return (
    <Row className='g-2'>
      {Books.map((book, index) => (
        <Col xs={12} md={5} lg={3}>
          
          <Card
            className={`custom-card ${clickedCard === index ? 'clicked' : ''}`}
            style={{ width: '18rem', height: '450px', marginBottom: '30px', marginTop: '30px'}}
            onClick={() => handleCardClick(index)}
            key={book.asin}
          >
            <Card.Img className='img' variant="top" src={book.img} />
            <Card.Body>
              <Card.Title className='title'>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Card.Text>Price: {book.price} EUR</Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;


/* import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../src/fantasy.json'

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks */ 