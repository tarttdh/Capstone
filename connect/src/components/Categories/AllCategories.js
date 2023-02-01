import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/posts/?format=json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
            {articles.map(article => (
              <Row>
                <Card style={{  
                  width: '100%',
                  margin: '10px', 
                  }} key={article.id}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title style={{fontSize: '20px'}}>{article.title}</Card.Title>
                    <Card.Text>
                      {article.content}
                    </Card.Text>
                    <Card.Text>Written by {article.author}</Card.Text>
                    <Button variant="primary" style={{
                      backgroundColor: 'darkgreen', 
                      border: 'darkgreen 1px solid'
                      }}>Read More</Button>
                  </Card.Body>
                </Card>
              </Row>
            ))}
          </Container>
        </div>
      );
    }
  }
}

export default AllCategories;