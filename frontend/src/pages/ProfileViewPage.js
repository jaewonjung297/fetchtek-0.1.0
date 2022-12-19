import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { Store } from '../Store';

const Styles = styled.div`
    .container {
        margin-top: 5.5em;
        display: flex;
        padding-left: 50px;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    p {
        font-size: 1em;
    }
    
    .button {
        max-width: 10em;
        text-align: center;
    }
`

export default function ProfileViewPage() {
    const navigate = useNavigate();
    const { state } = useContext(Store);
    const { userInfo } = state;
    const editHandler = () => {
        navigate('/editprofile')
    }
    return (
        <Styles>
            <div className = "container">
                <h1>Profile Information</h1>
                <p>Name: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
                <Button className = "button" type = "button" onClick = {editHandler}>Edit Profile</Button>
            </div>
        </Styles>
    )
}
