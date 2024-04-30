import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type BtnPropsType = {
    btnType?: 'activeSwitcher' | 'inactiveSwitcher' | 'addNote' | 'payNow'
}

export const Button = styled.button<BtnPropsType>`
    width: 152px;
    height: 36px;
    border-radius: 40px;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    ${props => props.btnType === 'activeSwitcher' && css<BtnPropsType>`
        background-color: ${theme.colors.Neutral10};
        box-shadow: 0 3px 6px 0 rgba(20, 20, 20, 0.04);
        color: ${theme.colors.Neutral100};
    `}
    
    ${props => props.btnType === 'inactiveSwitcher' && css<BtnPropsType>`
        background-color: rgba(97, 218, 251, 0);
        color: ${theme.colors.Neutral60};
    `}
    
    ${props => props.btnType === 'addNote' && css<BtnPropsType>`
        height: 48px;
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        background-color: ${theme.colors.Primary10};
        color: ${theme.colors.Primary60};
    `}
    
    ${props => props.btnType === 'payNow' && css<BtnPropsType>`
        max-width: 312px;
        width: 100%;
        height: 48px;
        padding: 12px;
        background-color: ${theme.colors.Primary60};
        color: ${theme.colors.Neutral10};
        font-family: Poppins, sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        border-radius: 58px;
    `}
    
`