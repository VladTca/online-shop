import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type BtnPropsType = {
    btnType?: 'activeSwitcher' | 'inactiveSwitcher' | 'addNote' | 'payNow' | 'runningOrder' | 'placeOrder'
}

export const Button = styled.button<BtnPropsType>`
    width: 152px;
    padding: 8px 16px;
    border-radius: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    ${props => props.btnType === 'activeSwitcher' && css<BtnPropsType>`
        background-color: ${theme.colors.Neutral10};
        box-shadow: 0 3px 6px 0 rgba(20, 20, 20, 0.04);
        color: ${theme.colors.Neutral100};
    `}

    ${props => props.btnType === 'inactiveSwitcher' && css<BtnPropsType>`
         color: ${theme.colors.Neutral60};
    `}

    ${props => props.btnType === 'addNote' && css<BtnPropsType>`
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        background-color: ${theme.colors.Primary10};
        color: ${theme.colors.Primary60};
        border-radius: 58px;
        padding: 12px 24px;
        
    `}
    
    ${props => props.btnType === 'payNow' && css<BtnPropsType>`
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        background-color: ${theme.colors.Primary60};
        color: ${theme.colors.Neutral10};
        border-radius: 58px;
        padding: 12px;
        
    `}
    
    ${props => props.btnType === 'runningOrder' && css<BtnPropsType>`
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        background-color: ${theme.colors.Primary60};
        color: ${theme.colors.Neutral10};
        border-radius: 58px;
        padding: 12px;
        
        &:hover {
            background-color: ${theme.colors.Primary60};
            color: ${theme.colors.Neutral10};
            transform: scale(1.2);
            cursor: pointer;
        }
    `}
    ${props => props.btnType === 'placeOrder' && css<BtnPropsType>`
    
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        background-color: ${theme.colors.Primary60};
        color: ${theme.colors.Neutral10};
        border-radius: 58px;
        padding: 12px;
        
    `}
`