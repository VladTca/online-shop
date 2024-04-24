import styled from "styled-components";
import {theme} from "../../styles/Theme";

const DateSStyles = styled.div`
    margin: 0 16px;
 
    border-radius: 40px;
    background: ${theme.colors.Neutral20};
    padding: 8px 20px;
 
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    width: 182px;
    text-align: center;
color: ${theme.colors.Neutral100};
}

`;

export const S = {
    DateSStyles
}