import React from 'react'
import CustomDiv from '../ui/ColorDiv'
import ProjectSheet from '../ui/ProjectSheet'
import kerala from '../assets/kerala.png'
import oldPortfolio from '../assets/OldPortfolio.png'
import styled from 'styled-components'


export default function Works() {
  return (
    <div id='works'>  
        
        <Marginleft>
            <h2 
                style={{marginBottom:'20px'}}
            >PROJECTS</h2>
        </Marginleft>
        <CustomDiv variant='blue'>
            <ProjectSheet
                heading='Kerala tourism'
                note='Introducing a website dedicated to Kerala tourism, 
                featuring its top attractions alongside hidden gems from across India. 
                Explore the beauty and diversity of Kerala and beyond, all in one place.'

                list1= '+ bootstrap'
                list2= '+ HTML/CSS'
                list3= '+ JavaScript'

                projectPic={kerala}
            />
        </CustomDiv>

        <CustomDiv variant='lavender'>
            <ProjectSheet
                heading='Portfolio website'
                note='Crafted a sleek and responsive portfolio website using HTML/CSS, 
                featuring seamless navigation and subtle CSS animations. Showcase your work elegantly on a single page, 
                optimized for a seamless browsing experience across devices.'

                list1= '+ HTML'
                list2= '+ CSS'

                projectPic={oldPortfolio}
            />
        </CustomDiv>
    
    </div>
  )
}

const Marginleft = styled.div`
    margin-left: 120px;
`;
