import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Header = styled.header`
    border-bottom: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  

height: 76px;
    
`;
const MainTitle = styled.h2`
  text-align: left;
  font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: ${theme.colors.Neutral100};
    

`;

const MainSubtitle = styled.h3`
    text-align: left;
    font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        color: ${theme.colors.Neutral60};
    
    `;

const BackWrapper = styled.div`
    width: 32px;
    margin-right: 24px;
    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 0;
    
    svg {
        stroke: ${theme.colors.Neutral100};
    }
    &:hover {
        svg {
            stroke: ${theme.colors.Primary60};
            transform: scale(1.5);
        }
        
    }

    &::before {
        content: "";
        display: block;
        width: 28px;
        
        height: 28px;
        border-radius: 50%;
        border: 1px solid ${theme.colors.Neutral30};
        position: absolute;
        z-index: -1;
    }
    
`;

const LogoStyles = styled.div`
padding:0 24px;
    border-left: 1px solid ${theme.colors.Neutral30};
`


export const S = {
    Header,
    MainTitle,
    MainSubtitle,
    BackWrapper,
    LogoStyles

}