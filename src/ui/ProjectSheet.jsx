import React from 'react'
import styled from 'styled-components'
import CustomBtn from '../ui/MyButton'

export default function ProjectSheet({heading, note, list1, list2, list3, projectPic}) {
  return (
    <>
        <Wrapper>
            <LeftWrapper>
                <Head>{heading}</Head>
                <Para>{note}</Para>
                <h6>DEVELOPMENT TOOLS</h6>
               
                {/* Development tools list  */}
                <Para>{list1}</Para>
                <Para>{list2}</Para>
                <Para>{list3}</Para>

                <CustomBtn variant='light'>VIEW PROJECT</CustomBtn>
            </LeftWrapper>

{/* Just dividing two parts  */}

            <RightWrapper>
                <Pic src={projectPic} alt="ProjectPic" />
            </RightWrapper>
        </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding-left: 120px;
    padding-top: 100px;
    padding-bottom: 100px;
`;

const LeftWrapper = styled.div`
    width: 40%;
    height: auto;
`;

const RightWrapper = styled.div`
    width: 60%;
    height: auto;
`;


const Head = styled.h1`
    color: var(--my-white);
    font-family: "Exo 2", sans-serif;
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 20px;
`;

const Para = styled.p`
    color: var(--my-white);
    font-size: 17px;
    margin-bottom: 20px;
`;


const Pic = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

`;