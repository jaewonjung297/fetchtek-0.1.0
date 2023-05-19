import React, { useState } from 'react';
import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../images/FetchTek Logo - TM (1).png';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getError } from '../utils';

const Styles = styled.div`
margin-top: 15em;
background-color: #4092ff;
color: white;
.news-container {
    margin-top: 2em;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2em;
}
.info-container {
    display: flex;
    margin-top: 2em;
    justify-content: space-around;
    padding: 2em;
    flex-wrap: wrap;
}
.info-box a {
    text-decoration: none;
    color: white;
}
.info-box a:hover {
    color: cyan;
}
.box-container {
    display: flex;
    flex-direction: row;
}
@media (max-width: 800px) {
    .info-container {
      justify-content: flex-start;
      align-items: flex-start;
    }
    .info-box {
        margin: 10px
    }
    .news-container {
        flex-direction: column;
        align-items: flex-start;
      }
    
      .box-container {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }
    
      .box-container input {
        width: 100%;
        margin-bottom: 1em;
      }
  }
`

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit =  async () => {
        // Perform email submission logic here
        if (email.length === 0) {
            toast.error("Enter an email");
            return;
        }
        setEmail('');
        try {
            await axios.post(
                '/api/users/newsletter', {
                    email
                }
            );
        } catch (err) {
            toast.error(getError(err));
        }
        toast.success("Subscribed!");
        return;
    };
    const emailHandler = () => {
        var mailToLink = "mailto:fetchtek@gmail.com";
        window.open(mailToLink)
    }
  return (
    <Styles>
        <div className = 'info-container'>
            <div>
                <img src={logo} alt = "logo" style = {{width: "10em", height: "auto"}}></img>
                <p>
                312 W Millbrook Road STE 121 Raleigh, NC 27609
                <br/>
                (919) 348-9881
                <br/>
                fetchtek@gmail.com
                </p>
            </div>
            <div className = 'info-box' style = {{marginTop: "2em"}}>
                <h3>Contact Us!</h3>
                <hr style = {{color: 'white'}}>
                </hr>
                <div>
                    <IconButton size="large" href = 'https://wa.me/19199013885'>
                        <WhatsAppIcon style = {{fontSize: "1em", color: "white"}}/>
                    </IconButton>
                    <IconButton size="large" href = 'https://www.instagram.com/fetchtek_/?igshid=NTc4MTIwNjQ2YQ%3D%3D'>
                        <InstagramIcon style = {{fontSize: "1em", color: "white"}}/>
                    </IconButton>
                    <IconButton size="large" href = 'https://www.facebook.com/profile.php?id=100078414422907&mibextid=LQQJ4d'>
                        <FacebookIcon style = {{fontSize: "1em", color: "white"}}/>
                    </IconButton>
                    <IconButton size="large" onClick={emailHandler}>
                        <MailIcon style = {{fontSize: "1em", color: "white"}}/>
                    </IconButton>
                </div>
            </div>
            <div className = 'info-box' style = {{marginTop: "2em"}}>
                <h3>Site Links</h3>
                <hr style = {{color: 'white'}}>
                </hr>
                <a href = '/grading'>Grading Process</a><br />
                <a href = '/how'>How It Works</a><br />
                <a href = '/faq'>Frequently Asked Questions</a><br />
                <a href = '/contactus'>Contact Us</a><br />
                <a href = '/privacy'>Privacy Policy</a><br />
                <a href = '/terms'>Terms and Conditions</a>
            </div>
        </div>

        <div className='news-container'>
            <div>
                <h3>Sign Up for Our Newsletter</h3>
                <hr style = {{color: 'white'}}>
                </hr>
                <div className = 'box-container'>
                    <input
                        type="email"
                        id="emailInput"
                        value={email}
                        style={{ width: '300px', height: '40px', fontSize: '16px' }}
                        placeholder = "Enter Your Email"
                        onChange={handleEmailChange}
                    />
                    <div className = 'button_small'>
                        <button onClick={handleSubmit} 
                        style={{
                        backgroundColor: 'white',
                        color: '#4092FF',
                        padding: '7px 15px',
                        fontSize: '18px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        }}
                        >Submit</button>
                    </div>
                </div>
            </div>
            <p>©2023 FetchTek LLC. All Rights Reserved.</p>
            <div>

            </div>
        </div>
    </Styles>
  )
}
