import React from 'react'
import styled from 'styled-components'
import Btn from '../components/Btn'
import image from '../images/FAQ.png'
import { Helmet } from 'react-helmet-async';

const Styles = styled.div`
.title-container {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    flex-wrap: wrap;
}
.title-container span {
    color: #4092ff;
}

.question-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
}

.more-container {
    display: flex;
    justify-content: center;

}
.ask-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const CollapseStyle = styled.div`
details {
    user-select: none;
    align-text: center;
  }
  details>summary span.icon {
    width: 2em;
    height: 2em;
    position: relative; /* Added */
    transition: all 0.3s;
  }
  
  details[open] summary span.icon:before,
  details[open] summary span.icon:after {
    content: ""; /* Added */
    position: absolute; /* Added */
    width: 2px; /* Added */
    height: 1.25em; /* Adjust as needed */
    background-color: #000; /* Adjust color as needed */
    transition: all 0.3s;
  }
  
  details[open] summary span.icon:before {
    transform: rotate(45deg); /* Added */
    top: 50%; /* Added */
    left: 50%; /* Added */
    margin-top: -0.625em; /* Half the height */
    margin-left: -1px; /* Half the width */
  }
  
  details[open] summary span.icon:after {
    transform: rotate(-45deg); /* Added */
    top: 50%; /* Added */
    left: 50%; /* Added */
    margin-top: -0.625em; /* Half the height */
    margin-left: -1px; /* Half the width */
  }
  
  
  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
    margin: 1em 4em;
    padding: 1em;
  }
  
  summary::-webkit-details-marker {
    display: none;
  }
`

const Collapsible = (props) => {
    return (
        <CollapseStyle>
            <details>
            <summary>
                <h2 style = {{fontSize: "1.5em"}}>{props.question}</h2>
                <span className='icon'></span>
            </summary>
            <p style = {{fontSize: "1.2em", margin: "0 4em"}}>
                {props.answer}
            </p>
            </details>
        </CollapseStyle>
    )
}

export default function FAQ() {
    return (
        <Styles>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <div className='title-container'>
                <img src = {image} alt = "FAQ Graphic" style = {{width: "20em"}}/>
            </div>
            <div className = 'question-container'>
                <Collapsible question = "Q: Are the prices negotiable?" answer = "Yes once you completed your submission, the sales team can negotiate the final price and send you an invoice." />
                <Collapsible question = "Q: How long have you been in business?" answer = "FetchTek has been in business for 8 years. We have been registered as a LLC for 2 years" />
                <Collapsible question = "Q: Why can I trust FetchTek?" answer = "We have many satisfied customers and we have years of experience in this industry." />
                <Collapsible question = "Q: How does shipping work?" answer = "I don't know I will let my boss answer for me" />
            </div>
            <div className='more-container'>
                <div className='ask-container'>
                    <p style = {{marginTop: "3em", fontSize: "1.2em"}}>Still have more questions?</p>
                    <Btn link = '/ContactUs' title = 'Ask Us Here!'/>
                </div>
            </div>
        </Styles>
    )
}
