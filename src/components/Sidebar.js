import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { H3, MediumText, Caption } from '../styles/TextStyles';
import Input from './Input';
const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="logo" />
                <LogoText>Coding Fun</LogoText>
            </LogoWrapper>
            <Form>
                <SubTitle>Sign Up!</SubTitle>
                <Input placeholder="Full Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
                <button>Submit</button>
            </Form>
            <Terms>By signing up, I agree to the Privacy Policy and Terms of Service</Terms>
        </Container>
    )
}

const Container = styled.div`
    min-width:400px;
    backdrop-filter:blur(35px);
    background-color: rgba(255,255,255, 0.8);
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    padding:0 2rem;

    @media (max-width:900px){
        width: 100vw;
        position:absolute;
        padding: 0;
    }
`;
const LogoWrapper = styled.div`

`;
const LogoText = styled(MediumText) `
    color:#FF8D8D;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items: center;

    button{
    width:80%;
    max-width:350px;
    min-width: 250px;
    border:none;
    margin: 0.5rem;
    background-color: #70EDB9;
    color:#ffffff;
    font-weight:bold;
    font-size: 22px;
    box-shadow: 0px 14px 9px -15px rgba(0,0,0, 0.25);
    border-radius:5px;
    padding:12px 4px;
    cursor: pointer;
    transition: all 0.2s ease-in;
     &:hover{
         transform:translateY(-3px);
     }
    }
`;
const SubTitle = styled(H3) `
    color: #666666;
;
`

const Terms = styled(Caption) `
    color:#808080;
    text-align:center;
    margin:10px;
    width:50%;
`;

export default Sidebar
