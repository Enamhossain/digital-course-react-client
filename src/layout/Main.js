import React from 'react';
 import {  Row ,Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
 import Category from '../component/Category/Category';
// import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import { Container } from 'react-bootstrap';

import   './Main..css'
const Main = () => {
    return (
        <div className=''>
           <Header></Header>
          <Container>
              <Row>
                <Col lg ='4'>
                    <Category/>
                </Col>
                <Col lg = '8'>
                <Outlet></Outlet> 
                </Col>
              </Row>
                
          </Container>
             
             
              
                
            
        </div>
    );
};

export default Main;