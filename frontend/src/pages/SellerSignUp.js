import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../images/Shaking Hands.jpg';

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

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  padding: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  margin: auto;
  max-width: 100px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SellSU = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, such as sending an email or making an API request
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
    <ContactUsContainer>
      <TitleBoxContainer>
       <img className="image" src={image}></img>
        <TitleBox>
          Become a Partner!
        </TitleBox>
      </TitleBoxContainer>
      <TitleBoxContainer></TitleBoxContainer>
    </ContactUsContainer>
    <FormContainer>
      <h2 style={{justify: 'center'}}>Send Us a Message!</h2>
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
        <FormGroup>
          <Input
            type="text"
            value={phone}
            placeholder='Phone'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={subject}
            placeholder='Subject'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            value={message}
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            required
          ></TextArea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      </FormContainer>
      </div>
  );
};

export default SellSU;
