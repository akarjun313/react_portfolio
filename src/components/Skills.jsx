import React from 'react'
import styled from 'styled-components'
import 'boxicons'

export default function Skills() {
  return (
    <div id='skills'>
        <Marginleft>
            <h2
                style={{margin:'0px'}}
            >SKILLS</h2>
        </Marginleft>

        <Wrapper>
        <Container>
            <h5>HTML</h5>
            <Starcontainer>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            </Starcontainer>
        </Container>
        <Container>
            <h5>CSS</h5>
            <Starcontainer>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            </Starcontainer>
        </Container>
        <Container>
            <h5>BOOTSTRAP</h5>
            <Starcontainer>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            </Starcontainer>
        </Container>
        <Container>
            <h5>JAVASCRIPT</h5>
            <Starcontainer>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            </Starcontainer>
        </Container>
        <Container>
            <h5>REACT JS</h5>
            <Starcontainer>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            <box-icon type='solid' name='star' color='var(--bg-red)' ></box-icon>
            </Starcontainer>
        </Container>
        </Wrapper>
    
    </div>
  )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
`;

const Starcontainer = styled.div`
    display: flex;
    width: 50%;
`;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 100px;
    border-radius: 5px;

`;

const Marginleft = styled.div`
    margin-left: 410px;
    margin-top: 110px;
`;
