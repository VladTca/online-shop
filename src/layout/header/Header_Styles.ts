import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    border-bottom: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;


height: 76px;
    
`;


export const S = {
    Header,

}