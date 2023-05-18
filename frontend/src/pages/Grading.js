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
.grading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.grading-title {
    margin-top: 5em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
}
.grade {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5em;
    padding: 50px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
}

.grade p {
    max-width: 35em;
}

.grade-grade {
    font-size: 2em;
    color: #4092ff;
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
                    and overall quality. These grading standards determine 
                    the value of your electronics.
                </p>
                <div className='button_small'>
                    <Btn link = "/" title = "Sell With Us" />
                </div>
            </div>
            
            <img src = {image} position = "auto" alt = "FetchTek Logo" style = {{width: "35rem", height: "auto", borderRadius: "10px"}}/>
        </div>

        <div className='grading-title'>
            <h2 style = {{marginTop: "5em", marginBottom: "1em"}}>Grades</h2>
        </div>
        <div className = 'grading-container'>
            <div className = 'grade'>
                <p className = 'grade-grade'>New: Sealed</p>
                <p className = 'grade-text'>
                <ul> 
                <li>100% brand new phone sealed in the manufacturer's original packaging</li>
                <li>Device has never been activated or used</li>
                <li>Original accessories have never been used or tampered with</li>
                <li>Seal hasn't been tampered with and the box is in perfect condition</li>
                </ul>
                </p>
            </div>
        </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>New: Open box</p>
                <p className = 'grade-text'>
                <ul> 
                <li>These devices must have been activated for less than 60 days</li>
                <li>Absolutely no scratches or blemishes on any part of the phone</li>
                <li>All accessories have never been used in the original packaging</li>
                <li>Device must have its original plastic on the screen</li>
                </ul>
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>A</p>
                <p className = 'grade-text'>
                <ul> 
                <li>Absolutely no scratches on front and back glass</li>
                <li>Device must pass all functionality tests</li>
                <li>Maximum of 1 small light scratch (under 1 cm) on housing that can only be uncovered by heavy inspection under a light</li>
                </ul>
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>B1</p>
                <p className = 'grade-text'>
                <ul> 
                <li>Absolutely no scratches on front glass</li>
                <li>1-3 light scratches on the back glass are permissable </li>
                <li>Device must pass all functionality tests</li>
                <li>Maximum of 1 small light scratch on housing that can only be uncovered by heavy inspection under a light</li>
                </ul>
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>B2</p>
                <p className = 'grade-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sagittis risus nisl, vel viverra purus facilisis in. 
                    Quisque aliquam, est mattis placerat finibus, sem eros luctus nunc, 
                    vitae efficitur nulla arcu quis ante. Etiam placerat congue augue non 
                    feugiat. Cras sed dolor a eros scelerisque posuere.
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>C</p>
                <p className = 'grade-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sagittis risus nisl, vel viverra purus facilisis in. 
                    Quisque aliquam, est mattis placerat finibus, sem eros luctus nunc, 
                    vitae efficitur nulla arcu quis ante. Etiam placerat congue augue non 
                    feugiat. Cras sed dolor a eros scelerisque posuere.
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>D</p>
                <p className = 'grade-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sagittis risus nisl, vel viverra purus facilisis in. 
                    Quisque aliquam, est mattis placerat finibus, sem eros luctus nunc, 
                    vitae efficitur nulla arcu quis ante. Etiam placerat congue augue non 
                    feugiat. Cras sed dolor a eros scelerisque posuere.
                </p>
            </div>
    </Styles>
  )
}
