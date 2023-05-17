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
                    and overall quality. These grading standards will determine 
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
                <p className = 'grade-grade'>A</p>
                <p className = 'grade-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent sagittis risus nisl, vel viverra purus facilisis in. 
                    Quisque aliquam, est mattis placerat finibus, sem eros luctus nunc, 
                    vitae efficitur nulla arcu quis ante. Etiam placerat congue augue non 
                    feugiat. Cras sed dolor a eros scelerisque posuere.
                </p>
            </div>
            <div className = 'grade'>
                <p className = 'grade-grade'>B</p>
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

        </div>
    </Styles>
  )
}
