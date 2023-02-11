import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "./components/Image.jpg";
import "./components/test-card.css";


export class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/posts/?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

   render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <div>
          <Container>
            <Row>
            <div className="card-column mt-3 test-cards" >
            {articles.map((article) => (
                <Card
                  className="cards test-card"
                  style={{
                    width: "20rem",
                  }}
                  key={article.id}
                >
                  { <Card.Img variant="top" src={Image} className="img-fluid" alt="Responsive image" /> }
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.content}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Written by {article.author}</ListGroup.Item>
                    <ListGroup.Item>Read Time </ListGroup.Item>
                    <ListGroup.Item>Level of Priority</ListGroup.Item>
                  </ListGroup>
                  <Card.Body className= "card-actions">
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "darkgreen",
                        border: "darkgreen 1px solid",
                      }}
                    >
                      Read More
                    </Button>
                    <Card.Link className= "card-link" href="#">Link to article</Card.Link>
                  </Card.Body>
                </Card>
            ))}
            </div>
            </Row>
          </Container>
        </div>
      );
    }
  }
}


