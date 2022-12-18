import { useEffect, useReducer} from "react";
//import data from "../data";
import axios from 'axios';
import Product from "../components/Product";
import styled from 'styled-components'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox"
import background from '../images/background.jpg';
import backgroundsm from '../images/background-sm.jpg';
const Styles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    #text-alignment {
        display: flex;
        flex-direction: column;
        height: 65%;
    }
    
    @media only screen and (max-width: 650px) {
        #top-text {
            font-size: 3rem;
        }
    }
    @media only screen and (max-width: 440px) {
        #top-text {
            font-size: 2.5rem;
        }
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
    #btn {
        background: cyan;
        color: black;
        height: 50px;
        min-width: 120px;
        border: none;
        border-radius: 10px;
        position: relative;
        transition: 1s;
        -webkit-tap-highlight-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding-top: 5px;
      }
      
      #btn #circle {
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        overflow: hidden;
        transition: 200ms;
      }
      
      .noselect {
        -webkit-touch-callout: none;
          -webkit-user-select: none;
           -khtml-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
      }
      
      #btn:hover {
        background: transparent;
      }
      
      #btn:hover #circle {
        height: 50px;
        width: 20vw;
        left: 0;
        border-radius: 0;
        border-bottom: 2px solid #eee;
      }
`;

const reducer = (state, action) => {
	switch(action.type) {
		case 'FETCH_REQUEST':
			return {...state, loading: true};
		case 'FETCH_SUCCESS':
			return {...state, products: action.payload, loading: false};
		case 'FETCH_FAIL':
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
};

function HomePage() {
	const [{loading, error, products}, dispatch] = useReducer(reducer, {
		products: [],
		loading: true,
		error: '',
	})
    //const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({type: 'FETCH_REQUEST'});
			try {
				const result = await axios.get('api/products');
				dispatch({type: 'FETCH_SUCCESS', payload: result.data})
			} catch(err) {
				dispatch({type: 'FETCH_FAIL', payload: err.message})
			}
			
			//setProducts(result.data);
		};
		fetchData();
	}, [])
    return (
		<Styles>
                <div className = "container-lg">
                    <img src = {background} alt = "background" className = "background-lg"/>
                    <div style = {{position: "absolute", top: "35%", justifyContent: "center"}}>
                        <h1 style = {{color: "white", fontSize: "4.5vw", maxWidth:"950px", marginBottom: "2vw"}}>Buy and <span>Sell</span> Your Electronics</h1>
                        <div style = {{maxWidth: "20vw"}}id="btn"><span class="noselect">Shop Now</span><div id="circle"></div></div>
                        <div style = {{maxWidth: "20vw", marginTop: "2vw", backgroundColor: "#e6ffff"}}id="btn"><span class="noselect">Sell With Us</span><div id="circle"></div></div>
                    </div>
                </div>
                <div className = "container-sm">
                    <img src = {backgroundsm} alt = "background" className = "background-sm"/>
                    <h1 style = {{position: "absolute", top: "12%", color: "black", fontSize: "10vw", maxWidth: "75vw"}}>Buy and <span>Sell </span>Your Electronics</h1>
                    <div style = {{position: "absolute", top: "76%", justifyContent: "center"}}>
                        <div style = {{maxWidth: "20vw"}}id="btn"><span class="noselect">Shop Now</span><div id="circle"></div></div>
                        <div style = {{maxWidth: "20vw", marginTop: "2vw", backgroundColor: "#e6ffff"}}id="btn"><span class="noselect">Sell With Us</span><div id="circle"></div></div>
                    </div>
                </div>
			<h2 style = {{marginTop: "100px"}}>Featured Products</h2>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox varaint = "danger">{error}</MessageBox>
            ) : (
                <div data-aos="fade-left" data-aos-delay={200} className = "products">
                {products.slice(0, 4).map(product => (
                    <Product product = {product}></Product>
                    ))}
                </div>
            )}
		</Styles>
    );
}

export default HomePage;