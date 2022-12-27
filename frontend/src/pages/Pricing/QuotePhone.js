import React, { useState } from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const Styles = styled.div`
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .brandSelect {
    width: 50vw;
    border-radius: 5px;
    height: 50px;
  }
  .model {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .modelSelect {
    width: 50vw;
    border-radius: 5px;
    height: 50px;
  }
  .carrier {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`

const phoneOptions = {
  Apple: ["iPhone SE (2022)", "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 12 Mini"],
  Google: ["Pixel", "Pixel 2", "Pixel 3", "Pixel 4", "Pixel 5", "Pixel 6", "Pixel 7"]
};

export default function QuotePhone() {
  const navigate = useNavigate();
  const [brandOptions, setBrandOptions] = useState([]);
  const [nextStep, setNextStep] = useState(false);
  const [nextStep2, setNextStep2] = useState(false);
  const [nextStep3, setNextStep3] = useState(false);
  const [nextStep4, setNextStep4] = useState(false);
  const [nextStep5, setNextStep5] = useState(false);
  const [nextStep6, setNextStep6] = useState(false);

  const selectedBrand = (e) => {
    const input = e.target.value;
    setBrandOptions(phoneOptions[input]);
    localStorage.setItem('brand', input)
    setNextStep(true)
  };

  const selectedModel = (e) => {
    const input = e.target.value;
    localStorage.setItem('model', input)
    setNextStep2(true);
  }
  const selectedCarrier = (e) => {
    const input = e.target.value;
    localStorage.setItem('carrier', input)
    setNextStep3(true);
  }

  const selectedScreen = (e) => {
    const input = e.target.value;
    localStorage.setItem('screen', input)
    setNextStep4(true);
  }

  const selectedBody = (e) => {
    const input = e.target.value;
    localStorage.setItem('body', input)
    setNextStep5(true);
  }

  const selectedFunctional = (e) => {
    const input = e.target.value;
    localStorage.setItem('functional', input)
    setNextStep6(true);
  }

  const submitHandler = () => {
    navigate('/quoteprice')
  }
  return (
    <Styles>
      <div className = "form">
        <form>
          <div className = 'brand'> 
              <h4>
              Choose the smartphone brand
              </h4>
              <select className = 'brandSelect' onChange = {selectedBrand}>
                <option>Please select one</option>
                <option value = "Apple">Apple</option>
                <option value = "Google">Google</option>
              </select>
            </div>
            {nextStep && brandOptions && (
            <div className = 'model'>
              <h4>
                Choose the exact model
              </h4>
                <select className = "modelSelect" onChange = {selectedModel} name = "model">
                  <option>Select Your Model</option>
                  {brandOptions.map((option) => (
                    <option key = {option} value = {option}>{option}</option>
                  ))}
                </select>
            </div>
            )}
            {nextStep2 && (
              <div className = 'carrier'>
                <h4>
                  Select your carrier
                </h4>
                <select className = "modelSelect" onChange = {selectedCarrier}>
                  <option>Select your Carrier</option>
                  <option>Unlocked</option>
                  <option>AT&T</option>
                  <option>Verizon</option>
                  <option>Sprint</option>
                  <option>T-Mobile</option>
                  <option>Other</option>
                </select>
              </div>
            )}
            {nextStep3 && (
              <div className = 'model'>
                <h4>
                  What is the condition of the screen?
                </h4>
                <select className = "modelSelect" onChange = {selectedScreen}>
                  <option>Select your Screen Condition</option>
                  <option>Flawless</option>
                  <option>Good</option>
                  <option>Used</option>
                  <option>Cracked</option>
                  <option>Heavily Cracked</option>
                </select>
              </div>
            )}
            {nextStep4 && (
              <div className = 'model'>
                <h4>
                  What is the condition of the sides and back?
                </h4>
                <select className = 'modelSelect' onChange = {selectedBody}>
                  <option>Select your Body Condition</option>
                  <option>Flawless</option>
                  <option>Good</option>
                  <option>Used</option>
                  <option>Cracked</option>
                  <option>Heavily Cracked</option>
                </select>
              </div>
            )}
            {nextStep5 && (
              <div className = 'model'>
                <h4>Is the phone functional?</h4>
                <select className = 'modelSelect' onChange = {selectedFunctional}>
                  <option>Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            )}
            {nextStep6 && (
              <div style = {{textAlign: "center"}}>
                <Button type = "button" onClick = {submitHandler}>Next</Button>
              </div>
            )}
        </form>
      </div>
    </Styles>
  )
}
