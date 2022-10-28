import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const ShowCardata = ({data}) => {
    const {title, img,_id} = data

    
  
    return (
        <div>
             
           <Row xs={1} md={2} className="g-4">
    
        <Col>
          <Card className = "">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button  variant="dark"> <Link className='text-light' to={`/readmore/${ _id }`}> Read More </Link>   </Button>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
        </div>
    );
};

export default ShowCardata;