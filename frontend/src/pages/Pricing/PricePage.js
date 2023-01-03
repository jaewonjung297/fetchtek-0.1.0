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
    var formattedBody = `Offer Price: $500 \n\nDevice Information:\nBrand: ${localStorage.getItem('brand')} \nModel: ${localStorage.getItem('model')} \nCarrier: ${localStorage.getItem('carrier')} \nScreen Condition: ${localStorage.getItem('screen')} \nBody Condition: ${localStorage.getItem('body')} \nFunctional: ${localStorage.getItem('functional')}`;
    const whatsAppLink = 'https://wa.me/19199013885?text=' + encodeURIComponent(formattedBody);
    const emailHandler = () => {
        var mailToLink = "mailto:fetchtek@gmail.com?subject=Trade-in%20Offer&body=" + encodeURIComponent(formattedBody);
        window.open(mailToLink)
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
                    <IconButton size="large" href = 'https://wa.me/19199013885'>
                        <WhatsAppIcon style = {{fontSize: "45px"}}/>
                    </IconButton>
                    <IconButton size="large" onClick={emailHandler}>
                        <MailIcon style = {{fontSize:"45px"}}/>
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
