import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Mail from '@mui/icons-material/Mail';

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
        font-size: 30px;
    }

    .offer {
        margin-top: 5em;
        margin-bottom: 5em;
    }
    .contact {
        display: flex;
        flex-direction: column;

    }
`

export default function PricePage() {
    const [submit, setSubmit] = useState(true);
    const navigate = useNavigate();
    const submitHandler = () => {
        setSubmit(false);
      }
    const emailHandler = () => {
        window.open('mailto:fetchtek@gmail.com?subject=%20Trade-in%20Offer&body=')
    }
    const whatsAppHandler = () => {
        window.open(<a href="https://api.whatsapp.com/send?phone=15551234567">Send Message</a>)
    }
    return (
    <Styles>
        <div className = "offer" style={{textAlign: "center"}}>
            <span>Your Offer: $500</span>
            <br></br>
            <br></br>
            {submit && (
                <Button onClick = {submitHandler} variant="contained" endIcon={<AttachMoneyIcon style={{ color: 'white' }} />}>
                    Accept Offer
                </Button>
            )}
            {!submit && (
                <div className = "contact">
                    Contact us to complete your offer!
                    <div>
                    <IconButton size="large" href = "https://api.whatsapp.com/send?phone=19199013885">
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton size="large" onClick={emailHandler}>
                        <MailIcon />
                    </IconButton>
                    </div>
                </div>
                
            )}
            <span></span>
        </div>
        <div className = "mx-auto">
            <Card className = "card mx-auto">
                <Card.Body>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h3>
                                Your Device Information
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
