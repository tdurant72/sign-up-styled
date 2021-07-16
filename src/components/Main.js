import React from 'react'
import styled from 'styled-components';
import { H1, MediumText } from '../styles/TextStyles'
const Main = () => {
    return (
        <Container>
            <Title>Join our team</Title>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Title = styled(H1) `
    font-family: Roboto;
    font-style: normal;
    color: #343434;
`;
export default Main
