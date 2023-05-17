import React, { useState } from 'react';
import styled from 'styled-components'
import background from '../images/white-iphone.jpeg';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .container-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .box-element {
        margin-top: 100px
    }
    .box {
        margin: 20px;
        padding: 80px;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
    }
    .box h1 {
        font-size: 2em;
    }
    .subtitle {
        font-size: 1.3rem;
        font-weight: bolder;
        color: #4092FF
    }
    .container-2 {
        margin-bottom: 6em;
        margin-top: 4em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .element-2 {
        max-width: 35rem;
        margin: 2em;
    }
    .gradient-text {
        color: #4092FF
      }
    .reviews {
        padding: 50px;
    }
    .reviews h1 {
        max-width: 15em;
        font-size: 2em
    }
    .info-container {
        display: flex;
        margin-top: 2em;
        justify-content: flex-start;
        padding: 2em;
        flex-wrap: wrap;
    }
    .info-box {
        margin-left: 5em;
    }
    .info-box a {
        text-decoration: none;
        color: black;
    }
    .info-box a:hover {
        color: #4092FF;
    }
    .button-container {
        padding-top: 2.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Bubble = styled.div`
.container {
    max-width: 550px;
    margin: 0 auto;
  }
  
  .container .bubble {
    background-color: #f2f2f2;
    color: black;
    font-weight: bold;
    box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 25px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    line-height: 2;
    border-radius: 5px;
    padding: 2px 20px;
    margin-top: 60px;
  }
  
  .container .bubble:nth-child(1) {
    border-left: 10px solid #4092FF;
  }
  
  .container .bubble:nth-child(1):after {
    content: '';
    display: block;
    position: relative;
    margin-top: -40px;
    padding-top: 0px;
    bottom: -30px;
    left: 20px;
    border-width: 30px 0 0 30px;
    border-style: solid;
    border-color: #f2f2f2 transparent;	
    width: 2px;
    border-radius: 0 0 40px 0;
  }
  
  .container .bubble:nth-child(2) {
    border-right: 10px solid #4092FF;
  }
  
  .container .bubble:nth-child(2):after {
    content: '';
    display: block;
    position: relative;
    margin-top: -40px;
    padding-top: 0px;
    bottom: -30px;
    left: 400px;
    border-width: 30px 30px 0 0;
    border-style: solid;
    border-color: #f2f2f2 transparent;
    width: 2px;
    border-radius: 0 0 0 40px;
  }
  
  .container .bubble:nth-child(3) {
    border-left: 10px solid #4092FF;
  }
  
  .container .bubble:nth-child(3):after {
    content: '';
    display: block;
    position: relative;
    margin-top: -40px;
    padding-top: 0px;
    bottom: -30px;
    left: 20px;
    border-width: 30px 0 0 30px;
    border-style: solid;
    border-color: #f2f2f2 transparent;	
    width: 2px;
    border-radius: 0 0 40px 0;
  }
  
  .container .bubble .detail {
    font-style: italic;
    display: inline;
    float: right;
  }
`
const Button = styled.div`
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
}`
export default function Landing() {
  return (
    <Styles>
        <div className='container-2'>
        <img src={background} alt="background" className="background-lg" style={{ width: '25em', height: 'auto', borderRadius: '3px'}} />
            <div className='element-2'>
                <h1><span className="gradient-text">FetchTek</span>: A Tech Marketplace</h1>
                FetchTek was created and developed for the purpose of a platform that unifies the tech market and simplies the trade of electronics. Our mission is to build the world’s most convenient way to trade, empowering worldwide users to technological innovation.
                <div className='button-container'>
                    <Button>
                    <Link to="/about">
                        <button className="button-30" role="button">
                        Learn More
                        </button>
                    </Link>
                    </Button>
                </div>
            </div>
        </div>

        <div className='container-box'>
            <div className='box-element'>
            </div>
            <div className='box-element'>
                <div className='box'>
                    <h1>We Buy iPhones!</h1>
                    <hr>
                    </hr>
                    <h2 className='subtitle'>
                        <span>&#10003;</span> High Pricing On Bulk
                    </h2>
                    <p>
                        High prices with fast payments and inspection times!
                    </p>
                    
                    <h2 className='subtitle'>
                        <span>&#10003;</span> Trusted Distibutor
                    </h2>
                    <p>
                        Many years of experience helps keep your continued business protected
                    </p>
                    <h2 className='subtitle'>
                        <span>&#10003;</span> Fair Negotiations
                    </h2>
                    <p>
                        Your continued success is our success. Our goal is to help you profit!
                    </p>
                </div>
            </div>
            <div className='reviews'>
                <Bubble>
                <div className="container">
                    <div className="bubble">
                        <p>
                        Great customer service very helpful polite n quick reasonable prices!
                        <span className="detail">Mustafa Aljumayli</span>
                        </p>
                    </div>
                    <div className="bubble">
                        <p>
                        Highly Recommend Fetchtek. They found me exactly what I wanted at a fair price when I was in a pinch. They will go out of their way to make sure your customer experience is the best. Defiantly will recommend and will be buying/trading from them in the future!
                        <span className="detail"> Byron Brewington</span>
                        </p>
                    </div>
                    <div className="bubble">
                        <p>
                        Great customer service and phone looks brand new would recommend to anyone I know who wants affordable phones or even trade in there old phones!!
                        <span className="detail">RPS</span>
                        </p>
                    </div>
                    </div>
                </Bubble>
            </div>
        </div>
    </Styles>
  )
}