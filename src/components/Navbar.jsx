import React from 'react'
import pageLogo from '../assets/logo01.png'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <a href="#home"><img src={pageLogo} alt="my_logo" className='mainLogo'/></a>

        <div className='navDiv'>
          <NavButton href='#about'>ABOUT</NavButton>
          <NavButton href='#works'>WORK</NavButton>
          <NavButton href='#skills'>SKILLS</NavButton>
          <NavButton href='#contact'>CONTACT</NavButton>  
        </div>
      </Wrapper>

      
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 50px;
  display: flex;
  background-color: var(--bg-red);
`;

const NavButton = styled.a`
  text-decoration: none;
  background-color: var(--bg-red);
  color: var(--my-black);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  height: 40px;
  width: 110px;
  border: none;
  font-size: 15px;
  background: linear-gradient(to right, var(--bg-red) , var(--my-black)) var(--p,100%) / var(--p,0)no-repeat;
  transition: 0.5s, background-position 0s;
  

  &:hover {
    cursor: pointer;
    --p:100%;
    color: var(--my-white);
    font-weight: 500;
  }
`;