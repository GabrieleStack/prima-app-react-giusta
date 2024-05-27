//COMPONENTE BOOKDETAILS

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const BookDetails = ({ Books }) => {
  const { asin } = useParams();

  const book = Books.find(book => book.asin === asin);

  if (!book) {
    return <div>Libro non trovato!</div>;
  }

  return (
    <Container>
      <Card
            className= {`custom-card`}
            style={{ width: '18rem', height: '450px', marginBottom: '30px', marginTop: '30px'}}
            key={book.asin}
          >
            <Card.Img className='img' variant="top" src={book.img} />
            <Card.Body>
              <Card.Title className='title'>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Card.Text>Price: {book.price} EUR</Card.Text>
            </Card.Body>
          </Card>
    </Container>
  );
};

export default BookDetails;


