import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "./components/Image.jpg";
import "./components/test-card.css";
import ArticleDetails from './ArticleDetails';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



export class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      openArticle: -1,
      selectArticle: -1
    };
  }

  componentDidMount() {
    fetch("http://localhost:5001/articles/?format=json")
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

    const { error, isLoaded, articles, selectArticle, openArticle } = this.state;

    const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;

    const openFullArticle = (id) =>
    this.setState({
      //if fullArticle is true change to false (vice-versa)
      openArticle: id
    });

    const selectedArticle = (id) =>
    this.setState({
      //if fullArticle is true change to false (vice-versa)
      selectArticle: id
    });

    //sorts by date (the problem is that each of them have a different date)
    articles.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
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
                    minheight: "25px"
                  }}
                  key={article.index}
                >
                  { <Card.Img variant="top" src={article.Image ? article.Image : Image} className="img-fluid" alt="Responsive image" /> }
                  <Card.Body>
                    <Card.Title>{article.Title}</Card.Title>
                    <Card.Text
                     style={{
                      cursor: 'pointer'
                    }}
                    ><p onClick={() => {openFullArticle(article._id)} }>{openArticle !== article._id? 
                    truncate(article.Summary): article.Summary}</p></Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Written by:  {article.Author || 'none'}</ListGroup.Item>
                    <ListGroup.Item>Read Time: {article.Read_Time} min</ListGroup.Item>
                    <ListGroup.Item>Date: {article.Date ? article.Date : 'NA'}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body className= "card-actions">
                   
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "darkgreen",
                        border: "darkgreen 1px solid",
                      }}

                      //displays the exact article window.
                      onClick={() =>{selectedArticle(article._id)} }>{selectArticle !== article._id? 
                        'Read More':
                          <ArticleDetails article={article} className="popupModal"/>} 
                 
                    </Button> 
                    
                    <Card.Link to= {article.link} className= "card-link" href="#">Link to article</Card.Link>
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


