import styled, {css} from 'styled-components'


const CustomBtn = styled.button`
    margin-top: 15px;
    cursor: pointer;
    background:none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 170px;
    height: 55px;
    border: 1px solid;


    /* for white text  */
    ${(props)=>
    props.variant === "light" &&
    css`
     color: var(--my-white) 
    `}

    /* for black text  */
    ${(props)=>
    props.variant === "dark" &&
    css`
     color: var(--my-black) 
    `}

`;

export default CustomBtn;