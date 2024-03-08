import React from 'react'
import styled from 'styled-components'
import proPic from '../assets/propic.png'
import CustomBtn from '../ui/MyButton'

export default function Home() {
  return (
    <div id='home'>
        <Wrapper>
                <MyName>
                    <p>My Name is</p>
                    <h1>ARJUN APPUKUTTAN</h1>
                    <p>An enthusiastic MERN stack developer</p>
                    <CustomBtn variant='dark'>GET IN TOUCH</CustomBtn>
                </MyName>
                <MyPhoto>
                    <img src={proPic} alt="My-profile-pic" className='myProfileImg'/>
                </MyPhoto>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    display: flex;
    background-color: var(--bg-red);
    width: 100%;
    height: 83vh;
`;


const MyName = styled.div`
    width:50%;
    height:auto;
    padding-left: 185px;
    padding-top: 195px;
`;


const MyPhoto = styled.div`
    width:50%;
    height:auto;
    text-align: right;
`;

