import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const OrderDetailsBlock = styled.div`
    padding: 24px 24px 13px 24px;
    border-bottom: 1px solid ${theme.colors.Neutral30};
    
 
`

const Orders = styled.div`
    max-height: 318px;
    overflow-x: auto;
    
`


export const S = {
    OrderDetailsBlock,
    Orders,

}