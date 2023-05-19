import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Btn from '../components/Btn'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const Styles = styled.div`
scroll-behavior: smooth;
.button_small {
    display: flex;
    justify-content: center;
    margin-top: 2.5em;
    }
.buyback-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10em;
    flex-wrap: wrap;

    .span {
        color: #4092ff;
    }
}
.process-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}
.process-container span {
    color: #4092ff;
}
.item {
    margin: 1rem 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    width: 30rem;
    display: flex;
    flex-direction: column;
}
.arrow {
    box-sizing: border-box;
    height: 5vw;
    width: 5vw;
    border-style: solid;
    border-color: #4092ff;
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
  }
  
  .arrow:hover {
    border-bottom-width: 4px;
    border-right-width: 4px;
  }
  
  .container {
    margin: 2em 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  .fetchtek {
    color: "#4092FF";
    text-decoration: none;
}
.fetchtek:hover {
    color: cyan;
}
`

export default function HowItWorksPage() {
return (
    <Styles>
    <Helmet>
        <title>How It Works</title>
    </Helmet>
        <div style = {{display: "flex", justifyContent: "center"}}>
            <h2 className = "title" style = {{margin: "0em auto", fontSize: "3em"}}>How <a href = '/' className = "fetchtek">FetchTek</a> Works</h2>
        </div>

        <ProgressBar />

        <div className='button_small'>
            <Btn link = "/sellersignup#top" title = "Sell With Us"/>
        </div>

        <div className = 'buyback-container'>
            <div>
                <h2 style = {{fontSize: "3em", padding: "1em"}}>Bulk <span style = {{color: "cyan"}}>Buyback</span> <br />Program</h2>
                <div className="container">
                    <a data-scroll href="#full">
                        <div className="arrow"></div>
                    </a>
                </div>
            </div>
            <p style = {{maxWidth: "40em", padding: "1em"}}>
            Our IT bulk buyback program allows corporations to maximize the value of their inventory by selling their
            old <span>tek</span> for the best pricing. As an IT distribution center, we partner with other distributors, retailers and resellers so you don't 
            have to. 
            <br /><br />
            By providing corporations with enterprise-level solutions, we can help you focus more on running your business and less on liquidating old assets.
            <br /><br />
            Your trash is our treasure! We take your old IT hardware and give it a new life in countries where <span>tek</span> is in demand!
            </p>
        </div>

        <div className='process-container' style = {{marginTop: "10em"}} id = "full">
            <h2 style = {{fontSize: "2em", padding: "1em"}}>The Process</h2>
        </div>
        <div className='process-container'>
            <div className='item'>
                <h3><span>Step 1:</span> Contact Us</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio sapien, ultrices id pellentesque in, dignissim eu sem. Phasellus tincidunt, arcu eget suscipit ultricies, augue massa elementum magna, eget auctor lacus leo eu est.</p>
            </div>
            <div className='item'>
                <h3><span>Step 2:</span> Ship Your Devices To Us</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio sapien, ultrices id pellentesque in, dignissim eu sem. Phasellus tincidunt, arcu eget suscipit ultricies, augue massa elementum magna, eget auctor lacus leo eu est.</p>
            </div>
            <div className='item'>
                <h3><span>Step 3:</span> Get Quote</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio sapien, ultrices id pellentesque in, dignissim eu sem. Phasellus tincidunt, arcu eget suscipit ultricies, augue massa elementum magna, eget auctor lacus leo eu est.</p>
            </div>
            <div className='item'>
                <h3><span>Step 4:</span> Receive A Cash Offer</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio sapien, ultrices id pellentesque in, dignissim eu sem. Phasellus tincidunt, arcu eget suscipit ultricies, augue massa elementum magna, eget auctor lacus leo eu est..</p>
            </div>
        </div>
    </Styles>
  )
}