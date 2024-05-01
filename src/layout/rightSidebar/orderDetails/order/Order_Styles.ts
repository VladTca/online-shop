import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Order = styled.div`
    display: flex;
    border-bottom: 1px solid ${theme.colors.Neutral30};
    padding: 16px 0;

    // &::before {
    //     content: '';
    //     display: inline-block;
    //     width: 100%;
    //     height: 4px;
    //     background-color: ${theme.colors.accent};
    //     border-radius: 2px;
    //     position: absolute;
         //bottom: 0;
    //     left: 50%;
    //     transform: translateX(-50%);
    // }
`

const Photo = styled.img`
    width: 74px;
    height: 74px;
    border-radius: 12px;
    object-fit:cover;
`

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 
    padding-bottom: 16px;


`

const PriceAndAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const PriceAndCountBlock = styled.div`
    text-align: left;
    
    span {
        color: ${theme.colors.Neutral50};
        font-size: 12px;
        line-height: 15.6px;
        font-weight: 400;
        font-family: Poppins, sans-serif;
    }
    
`

const Price = styled.div`
    color: ${theme.colors.Primary60};
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    font-family: Poppins, sans-serif;
`



const AddItemBlock = styled.div`
display: flex;
    align-items: center;
    gap: 5px;
`


export const S = {
    Order,
    Photo,
    InfoBlock,
    PriceAndCountBlock,
    Price,
    PriceAndAddContainer,
    AddItemBlock,

}