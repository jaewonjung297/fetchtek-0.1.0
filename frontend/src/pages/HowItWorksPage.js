import React from 'react'
import styled from 'styled-components'
import background from '../images/background.webp';
import backgroundsm from '../images/background-sm.webp';

const Styles = styled.div`
    background: linear-gradient(#f8f8f8, #f3f3f3, #fdfdfd);

    .titleContainer {
        padding-top: 17rem;
        padding-bottom: 25rem;
        text-align: center;
    }
    .title {
        color: #0c0c0c;
        font-size: 2.5rem;
        line-height: 108%;
        letter-spacing: -.02em;
    }
    .expContainer {
        text-align: center;
        padding-top: 17rem;
        padding-bottom: 17rem;
        font-size: 1.5rem;
        align-items: center;
        background: linear-gradient(-90deg, #016eff, #4092FF, #016eff);
    }
    .expText {
        margin-left: auto;
        margin-right: auto;
        max-width: 55rem;
        border-radius: 0.5rem;
        color: white;
        padding-top: 5rem;
        padding-bottom: 15rem;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 2.4rem;
    }
    .expText span {
        color: cyan;
        font-size:2.8rem;
    }
    .innerContainer {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
    }
    .innerContainer div {
        margin-left: auto;
        margin-right: auto;
    }
    .innerContainer h3 {
        font-size: 2.4rem;
        color: white;
    }
    .innerContainer p {
        color: white;
        max-width: 25rem;
    }
    .background-lg {
        display: flex;
        flex-direction: column;
        align-items: center;
        position:relative
        object-fit: contain;
        width: 120%;
        height: auto;
        border-radius: 1.2%
        margin-bottom: 50px;
    }
    .background-sm {
        display: none;
        flex-direction: column;
        align-items: center;
        position:relative
        object-fit: contain;        
        width: 120%;
        height: auto
        border-radius: 1.2%;
    }
    h1 span {
        color: cyan;
    }
    .container-lg {
        display: flex;
        flex-direction: column;
        align-items: center;
        position:relative;
    }
    .container-sm {
        display: none;
        flex-direction: column;
        align-items: center;
        position:relative
    }
    @media screen and (max-width: 500px) {
        .container-lg{
           display:none;
        }
    
        .container-sm{
           display:flex;
        }

        .background-lg {
            display: none;
        }

        .background-sm {
            display: flex;
        }
    }
`
export default function HowItWorksPage() {
  return (
    <Styles>
        <div className = "container-lg">
            <img src = {background} alt = "background" className = "background-lg"/>
            <div style = {{position: "absolute", top: "35%", justifyContent: "center"}}>
                <h1 style = {{color: "white", fontSize: "4.5vw", maxWidth:"950px", marginBottom: "2vw"}}>We Make<span> Fetching</span> Electronics Easier</h1>
            </div>
        </div>
        <div className = "container-sm">
            <img src = {backgroundsm} alt = "background" className = "background-sm"/>
            <h1 style = {{position: "absolute", top: "12%", color: "black", fontSize: "10vw", maxWidth: "75vw"}}>We Make <span>Fetching </span>Electronics Easier</h1>
            <div style = {{position: "absolute", top: "76%", justifyContent: "center"}}>
                
            </div>
        </div> 
        <div className = "expContainer">
            <div className = "expText">
                <p>FetchTek works to help <span>wholesalers</span> get the best bang for their buck!
                With a wide range of connections, we 
                        help <span>businesses</span> sell their electronics to trusted 
                        partners for the <span>best</span> prices!
                </p>
            </div>
            <div className = "innerContainer">
                <div>
                    <h3>
                        Sell Through Us
                    </h3>
                    <p>By being a seller on FetchTek, 
                        we are taking the first step to simplifying your business's tasks. 
                        Our job is only to find more electronics!</p>
                </div>
                <div>
                    <h3>
                    Get Connections
                    </h3>
                    <p>To become a trusted wholesaler in the industry, 
                        it can take years to find credible buyers that reliably and consistently pay 
                        for your work. Lucky for you, we've already built those connections!</p>
                </div>
            </div>
        </div>
    </Styles>
  )
}
