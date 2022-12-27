import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';

const Styles = styled.div`
    span {
        font-size: 20px;
    }
    .card {
        width: 50vw;
    }
    .card-container {
        display: flex;
        align-items: center;
    }

    .offer span {
        color: cyan
    }
`

export default function PricePage() {
  return (
    <Styles>
        <div className = "offer" style={{textAlign: "center"}}>
            
            <br></br>
            <span></span>
        </div>
        <div className = "mx-auto">
            <Card className = "card mx-auto">
                <Card.Body>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h3>
                                Your Device
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Brand: <span>{localStorage.getItem('brand')}</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Model: <span>{localStorage.getItem('model')}</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Carrier: <span>{localStorage.getItem('carrier')}</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Screen Condition: <span>{localStorage.getItem('screen')}</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Body Condition: <span>{localStorage.getItem('body')}</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                            Functional: <span>{localStorage.getItem('functional')}</span>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    </Styles>
  )
}
