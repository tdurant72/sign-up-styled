import React from 'react'
import styled from 'styled-components';
import bgImg from './assets/bg.svg';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>

    </Container>
  )
}
const Container = styled.div`
background:#EEFCFF;
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
`;

const Wrapper = styled.div`
background-image: url(${bgImg});
background-size:cover;
width:100%;
height:100%;
display:flex;
`;
export default App;
