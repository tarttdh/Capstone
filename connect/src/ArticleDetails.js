import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import saveUrl from './utils/saveUrl';

const leftButtonStyles = {
  float: "left",
  padding: "5px 10px",
  fontSize: "12px",
  marginRight: "10px",
};
const ArticleDetails = ({ article }) => {
  const [show, setShow] = useState(false);
  const { user } = useAuth0();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Read More
      </Button>

      <Modal  size="lg"
       style={{ width: '100%', }} show={show} onHide={handleClose}>      
        <Modal.Header closeButton display="flex"> 

        <Button  style={leftButtonStyles}   onClick={() => { console.log(article.URL); saveUrl(user.email, (article.URL));}}>
            Save URL
        </Button>

          <Modal.Title style={{ textAlign: "center",  marginRight: "auto" }} >{article.Title}</Modal.Title>

          </Modal.Header>
        <Modal.Body style={{ textAlign: "center"}} > 
          <img src={article.Image} style={{  maxWidth: "800px", maxHeight: "500px"}} alt={article.Title} />
          <p> </p>
          <p>{article.Text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleDetails;




