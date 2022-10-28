import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowCardata = ({data}) => {
    const {title, img,details,_id} = data

    
  
    return (
        <div>
             
           <Row xs={1} md={2} className="g-4">
    
        <Col>
          <Card className = "">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                  {
                    details.length > 150 ?
                    <>{details.slice(0, 150) + '...'} <Link to={`/course/${_id}`}>Read More</Link> </>
                    :
                    details
                  }
              </Card.Text>
              <Button  variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
        </div>
    );
};

export default ShowCardata;