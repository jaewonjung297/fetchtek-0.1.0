import React from 'react'
import useReadingProgress from './hooks/useReadingProgress'
import styled from 'styled-components';

const Styles = styled.div`
body::-webkit-scrollbar {
	display: none; /* for Chrome, Safari, and Opera */
}


.progress-container {
    left: 10%;
	width: 8px;
	background: gray;
	border-radius: 2px;
}

.progress-bar {
	width: 8px;
	background: #4092ff;
	border-radius: 2px;
}

.scroll-container {
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.scroll-item {
    margin-left: 2rem;
    margin-bottom: 5rem;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
    width: 35rem;
}
.item-container {
    display: flex;
    flex-direction: column;
}
.scroll-item span {
    color: #4092ff
}
.size {
    transition: background-color 0.5s ease;
    background-color: #4092ff;
    color: white;
}
.size span {
    color: cyan
}


@media (max-width: 800px) {
    .progress-container {
        margin-left: 1em;
    }
    .scroll-item {
        width: 80%;
    }
    .progress-bar {
        display: none;
    }
    .progress-container {
        display: none;
    }
    .size {
        transform: none;
        background-color: white;
        color: black;
      }
}
`

export default function ProgressBar() {
    const completion = useReadingProgress();
    const progressBar = document.getElementById("progressbar");
    window.onscroll = () => {
        console.log(completion)
        progressBar.style.height = Math.min(completion, 73.5) + "rem";
    }
    return (
        <Styles>
            <div className = "scroll-container">
                <div class="progress-container">
                    <div id="progressbar" className="progress-bar"></div>
                </div>
                <div className = 'item-container'>
                    <div className = {completion > 1 && completion < 10 ? 'scroll-item size' : 'scroll-item'}>
                        <h3>
                        Create Your <span>Seller</span> Account
                        </h3>
                        <p>Opening a seller account with FetchTek is just one click away!</p>
                    </div>
                    <div className = {completion > 14 && completion < 26 ? 'scroll-item size' : 'scroll-item'}>
                        <h3>
                        Review Our <span>Grading Process</span>
                        </h3>
                        <p>Our certified experts have years of experience grading and rating used electronics. 
                        Each unit is cosmetically graded per our grading guidelines to ensure quality consistency
                        </p>
                    </div>
                    <div className = {completion > 30 && completion < 41 ? 'scroll-item size' : 'scroll-item'}>
                        <h3>
                        Start an <span>Order Request</span>
                        </h3>
                        <p>Easily create an order request using our platform.</p>
                    </div>
                    <div className = {completion > 45 && completion < 55 ? 'scroll-item size' : 'scroll-item'}>
                        <h3>
                        Fill Out the <span>Order Specifications</span>
                        </h3>
                        <p>Complete the details of the order.</p>
                    </div>
                    <div className = {completion > 58 && completion < 69 ? 'scroll-item size' : 'scroll-item'}>
                        <h3>
                        <span>Ship</span> Your Supply
                        </h3>
                        <p>Send your units and receive money as soon as we review your order!</p>
                    </div>
                </div>
            </div>
        </Styles>
    )
}
