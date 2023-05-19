import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import image from '../images/Shaking Hands.jpg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';

const ContactUsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: flex-start;
`;
const TitleBoxContainer = styled.div`
  background-color: black;
  opacity: 0.95;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
  
.image {
    position: relative;
    text-align: center;
    width: 100%;
    height: 30rem;
    overflow: hidden;
    object-fit: cover;
    opacity: 0.9;

    @media (max-width: 800px) {
    position: relative;
    text-align: center;
    height: 15rem;
    overflow: hidden;
    object-fit: cover;
    flex: 1;
  }
}
`;
const SellingDescription = styled.section`
  margin-bottom: 20px;
  position: relative;
  text-align: center;
`
const FormContainer = styled.div`
max-width: 800px;
width: 100%;
padding: 100px;
margin: 0 auto;

@media (max-width: 800px) {
    padding: 30px;
}
`

const TitleBox = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ThankYou = styled.div`
flex-direction: column;
.title {
  display: flex;
  justify-content: center;
}
h3 {
margin-top: 2em;
}
p {
  max-width: 45em;
  @media (max-width: 800px) {
    max-width: 30em;
  }
}
`


const ButtonStyle = styled.div`
display: flex;
justify-content: center; 
.button-30 {
  align-items: center;
  appearance: none;
  background-color: #4092FF;
  border-radius: 4px;
  border-width: 0;
  box-shadow: 0 1px 2px, 0 7px 13px -3px, 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  color: white;
}


.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
`;

const SellerSignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPhone, setConfirmPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear the form fields
    if (checked === false) {
      toast.error('Please Agree to Terms and Conditions!');
      return;
    } else if (email !== confirmEmail){
      toast.error('Email does not match!');
      return;
    } else if (phone !== confirmPhone){
      toast.error('Phone Number does not match!');
      return;
    }
    
    try {
      await axios.post('/api/users/signup', {
        name,
        email,
        phone,
      });
      setName('');
      setEmail('');
      setPhone('');
      setConfirmEmail('');
      setConfirmPhone('');
      setChecked(false);
      toast.success("Succesfully Signed Up!");
      setFormSent(true);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Seller Sign Up</title>
      </Helmet>
    <ContactUsContainer id = "top">
      <TitleBoxContainer>
       <img className="image" src={image} alt = "background title"></img>
        <TitleBox>
          Become a Partner!
        </TitleBox>
      </TitleBoxContainer>
      <TitleBoxContainer></TitleBoxContainer>
    </ContactUsContainer>
    <SellingDescription>

    </SellingDescription>
    <FormContainer style = {{display: formSent ? 'none' : 'block'}}>
      <h2 style={{justify: 'center'}}>Sign Up Today!</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            value={name}
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup >
          <Input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup >
          <Input
            type="email"
            value={confirmEmail}
            placeholder='Confirm Email'
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
          placeholder = "Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          />
        </FormGroup>
        <FormGroup>
          <Input
          placeholder = "Confirm Phone Number"
          value={confirmPhone}
          onChange={(e) => setConfirmPhone(e.target.value)}
          required
          />
        </FormGroup>
        <FormControlLabel required control={<Checkbox onChange = {e => {console.log(e.target.checked); setChecked(e.target.checked);}}/>} label={<p style = {{marginTop: "1em"}}>I agree to the FetchTek <a href = '/terms' style = {{textDecoration: "none"}}>Terms and Conditions</a> and <a href = '/terms' style = {{textDecoration: "none"}}>Privacy Policy</a></p>}/>
        <ButtonStyle>
          <button className = 'button-30' type="submit">Submit</button>
        </ButtonStyle>
      </Form>
      </FormContainer>

    <ThankYou style = {{display: formSent ? 'block' : 'none'}}>
      <div className='title'>
        <h3>Thank You for Joining <span style = {{color: "#4092ff"}}>FetchTek!</span></h3>
      </div>
      <div className='title'><p>We have recieved your information and will send a confirmation email shortly. Please check your inbox and spam to ensure your sign up is successful. If you did not recieve the email, fill out the form again or contact us!</p></div>
    </ThankYou>
      </div>
  );
};

export default SellerSignUp;
