import styled, {css} from 'styled-components'


const CustomDiv = styled.div`
    
    width: 100%;

    ${(props)=>
    props.variant === "blue" &&
    css`
     background-color: var(--deep-blue); 
    `}

    ${(props)=>
    props.variant === "black" &&
    css`
     background-color: var(--my-black); 
    `}

    ${(props)=>
    props.variant === "lavender" &&
    css`
     background-color: var(--my-lavender);
    `}

    ${(props)=>
    props.variant === "ash" &&
    css`
     background-color: var(--my-ash); 
    `}
    
    ${(props)=>
    props.variant === "footer" &&
    css`
     background-color: var(--shaded-black);
    `}

`;

export default CustomDiv;