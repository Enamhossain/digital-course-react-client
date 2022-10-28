import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './readmore.css'

const Readmore = () => {
      const readmoredata= useLoaderData() 
      console.log(readmoredata)

    return (
        <div>
          <Container>
           <Card className = "d-flex">
           
            <Card.Body>
            <Card.Img className = "img" variant="top" src={readmoredata.img} />
              <Card.Text>
                 {
                    readmoredata.details

                 }
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Container>
        </div>
    );
};

export default Readmore;