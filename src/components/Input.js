import React from 'react'
import styled from 'styled-components';

const Input = ({ type, placeholder }) => {
    return (
        <Container>
            <StyledInput type={type ? type : "text"} placeholder={placeholder && placeholder} required autoComplete="off" />
            <Status />
        </Container>
    )
}

const StyledInput = styled.input`
    width:80%;
    max-width:350px;
    min-width: 250px;
    height: 40px;
    border:none;
    margin: 0.5rem;
    background-color: #F5F5F5;
    box-shadow: 0px 14px 9px -15px rgba(0,0,0, 0.25);
    border-radius:5px;
    padding:4px;
    transition: all 0.2s ease-in;
     &:hover{
         transform:translateY(-3px);
     }
`;
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Status = styled.div`
     height:10px;
     width: 10px;
     background: #9d9d9d;
     border-radius:10px;
     margin-left:1rem;

     ${StyledInput}:focus + & {
         background: #ffa689;
     }
     ${StyledInput}:invalid + & {
         background: #fe2f75;
     }
     ${StyledInput}:valid + & {
         background: #70EDB9;
     }
`;
export default Input;