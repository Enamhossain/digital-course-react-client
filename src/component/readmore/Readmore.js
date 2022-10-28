import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './readmore.css'
const ref = React.createRef();
const Readmore = () => {
    const readmoredata = useLoaderData()


    return (
        <div>
           


            <div ref={ref}>
                <Card className="d-flex ">
                    <Card.Body>
                        <Card.Img className="img" variant="top" src={readmoredata.img} />
                        <Card.Text>
                            {
                                readmoredata.details

                            }
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
                    <Pdf targetRef={ref} filename={`${readmoredata.title}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            </div>

        </div>
    );
};

export default Readmore;