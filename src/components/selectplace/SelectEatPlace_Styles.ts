import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SelectEatPlace_Styles = styled.button`

    width:144px;
    height:24px;
    border-radius: 58px;
    background: ${theme.colors.Primary10};
    
    
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    color: ${theme.colors.Primary60};
`;


export const S = {
    SelectEatPlace_Styles: SelectEatPlace_Styles
}