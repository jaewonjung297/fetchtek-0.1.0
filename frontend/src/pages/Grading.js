import React from 'react'
import styled from 'styled-components'
import image from '../images/background.webp'
import Btn from '../components/Btn'

const Styles = styled.div`
@media (max-width: 800px) {
    .button_small {
        display: flex;
        justify-content: center;
        margin-top: 2.5em;
    }
}
.title-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
}


`
export default function Grading() {
  return (
    <Styles>
        <div className='title-container'>
            <div>
                <p style = {{fontSize: "2em"}}>
                    <span style = {{fontSize: "1.2em", color: "#4092FF"}}>FetchTek</span><br/>Grading Standards
                </p>
                <p style = {{maxWidth: "20em"}}>
                    With FetchTek, you are guarnteed quality. 
                    Our experts thoroughly inspect each product, 
                    evaluating its physical condition, functionality, 
                    and overall quality. These grading standards will determine 
                    the value of your electronics.
                </p>
                <div className='button_small'>
                    <Btn link = "/" title = "Sell With Us" />
                </div>
            </div>
            
            <img src = {image} position = "auto" alt = "FetchTek Logo" style = {{width: "35rem", height: "auto", borderRadius: "10px"}}/>
        </div>
    </Styles>
  )
}
