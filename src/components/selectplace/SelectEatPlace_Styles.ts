import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SelectEatPlace_Styles = styled.button`
    display: flex;
    width:144px;
    height:36px;
    border-radius: 58px;
    background: ${theme.colors.Neutral20};
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    color: ${theme.colors.Neutral60};
    cursor: pointer;
     
    &:hover {
        color: ${theme.colors.Primary60};
        background: ${theme.colors.Primary10};
    }
`;


export const S = {
    SelectEatPlace_Styles: SelectEatPlace_Styles
}