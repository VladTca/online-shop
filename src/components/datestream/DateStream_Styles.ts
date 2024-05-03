import styled from "styled-components";
import {theme} from "../../styles/Theme";

const DateSStyles = styled.div`
    margin: 0 16px;
    display: flex;
    border-radius: 40px;
    background: ${theme.colors.Neutral20};
    padding: 8px 20px;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    width: 182px;
    text-align: center;
    align-items: center;
    letter-spacing:-0.2px; 
    color: ${theme.colors.Neutral100};
}

`;

export const S = {
    DateSStyles
}