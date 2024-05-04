import styled from "styled-components";
import {theme} from "../../styles/Theme";

const RightSidebar = styled.aside`

    border-left: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    position: fixed;
    top: 78px;
    right: 0;
    bottom: 0;
  overflow: auto;
    width: 360px;

`;


export const S = {
    RightSidebar,

}