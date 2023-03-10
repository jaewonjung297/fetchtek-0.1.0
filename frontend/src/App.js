import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from './Store';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import NavDropDown from 'react-bootstrap/NavDropdown';
import ShippingAddressScreen from './pages/ShippingAddressPage';
import { ToastContainer } from 'react-toastify';
import SignUpPage from './pages/SignUpPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrderPage from './pages/PlaceOrderPage';
import logo from '../src/images/FetchTek-Logo.png';
import styled from 'styled-components';
import OrderPage from './pages/OrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';
import ProfileViewPage from './pages/ProfileViewPage';
import HowItWorksPage from './pages/HowItWorksPage';
import QuotePhone from './pages/Pricing/QuotePhone';
import PricePage from './pages/Pricing/PricePage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Styles = styled.div`
  .navbar {
    width: 100%;
    background: #fff;
    z-index: 100;
    min-height: 5.5rem;
    display: flex;
    align-items: center;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000000;
    &:hover { color: #4092FF; transition-duration: 0.4s; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000000;
    justify-content: center;
    &:hover { color: #4092FF; }
  }
  .form-center {
    position: absolute !important;
    display: flex;
    align-items: center;
    left: 25%;
    right: 25%;
  }
  
`;

function App() {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart, userInfo} = state;

  const signOutHandler = () => {
    ctxDispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress')
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
      <ToastContainer position = "bottom-center" limit = {1} />
        <header>
            <Styles>
            <Navbar collapseOnSelect expand = "lg">
              <Container>
                <LinkContainer eventKey = '/' to="/">
                  <Navbar.Brand>
                    <img src = {logo} width = "100px" position = "auto" alt = "FetchTek Logo"></img>
                  </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className = "p-2">
                      <Nav.Link as = {Link} to ="/about" eventKey = '/about' className = "nav-link">
                        About Us
                      </Nav.Link>
                    </Nav>

                    <Nav className = "p-2">
                      <Nav.Link as = {Link}  to ="/how" eventKey = '/how' className = "nav-link">
                        How It Works
                      </Nav.Link>
                    </Nav>

                    <Nav className = "p-2">
                      <Nav.Link as = {Link}  to ="/quote" eventKey = '/quote' className = "nav-link">
                        Get a Quote
                      </Nav.Link>
                    </Nav>

                    <Nav className = "p-2">
                      <Nav.Link as = {Link} eventKey = '/cart' to="/cart" className ="nav-link">
                          <ShoppingCartIcon />
                          {cart.cartItems.length > 0 && (
                            <Badge pill bg = "danger">
                              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </Badge>
                          )}
                      </Nav.Link>
                    </Nav>

                    <Nav className = "p-2">
                    {userInfo ? (
                      <NavDropDown title = {<PersonIcon />} id = "basic-nav-dropdown">
                        <LinkContainer to = "/profile">
                          <NavDropDown.Item>User Profile</NavDropDown.Item>
                        </LinkContainer>
                        <LinkContainer to = "/orderhistory">
                          <NavDropDown.Item>Order History</NavDropDown.Item>
                        </LinkContainer>
                        <NavDropDown.Divider />
                        <Nav.Link as = {Link} eventKey = '#signout' className = "p-3 dropdown-item" to = "#signout" onClick = {signOutHandler}>Sign Out</Nav.Link>
                        
                      </NavDropDown>
                    ) : 
                    (
                    <Nav.Link as = {Link} eventKey = '/signin' className = "nav-link" to = "/signin">Sign In</Nav.Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Styles>
        </header>
        <main>
          <div>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path = "/cart" element = {<CartPage />} />
              <Route path = "/about" element = {<AboutPage />} />
              <Route path = "/signin" element = {<SignInPage />} />
              <Route path = "/signup" element = {<SignUpPage />} />
              <Route path = "/shipping" element = {<ShippingAddressScreen />} />
              <Route path = '/payment' element = {<PaymentMethodPage />} />
              <Route path = '/placeorder' element = {<PlaceOrderPage />} />
              <Route path = '/order/:id' element = {<OrderPage />} />
              <Route path = '/orderhistory' element = {<OrderHistoryPage />} />
              <Route path = '/profile' element = {<ProfileViewPage />} />
              <Route path = '/editprofile' element = {<ProfilePage />} />
              <Route path = '/how' element = {<HowItWorksPage />} />
              <Route path = '/quote' element = {<QuotePhone/>} />
              <Route path = '/quoteprice' element = {<PricePage />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div className="text-center" style = {{marginTop: "5em"}}>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;