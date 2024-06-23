import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const GitHubCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="your-photo-url" />
    <Card.Body>
      <Card.Title>Your Name</Card.Title>
      <Card.Text>
        A short blurb about you.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default GitHubCard;
