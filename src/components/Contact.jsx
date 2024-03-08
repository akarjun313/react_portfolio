import React from 'react'
import CustomDiv from '../ui/ColorDiv'
import styled from 'styled-components'
import 'boxicons'

export default function Contact() {
  return (
    <div id='contact'>
        <CustomDiv variant='footer'>
            <Container>
            <Link>
                <box-icon name='facebook-square' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link>
                <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link>
                <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link>
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
            </Link>
            </Container>
            <Wrapper>
                <box-icon name='copyright' color='#ffffff' ></box-icon>
                <Para>Arjun A</Para>
            </Wrapper>
        </CustomDiv>
    </div>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 560px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    margin-top: 20px;
`;

const Para = styled.p`
    color: white;
    margin-left: 10px;
`;

const Link = styled.a`
    cursor: pointer;
`;