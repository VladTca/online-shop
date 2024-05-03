import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Order = styled.div`
    
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
    gap: 8px;
    width: 100%;
    
`

const PriceAndAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PriceAndCountBlock = styled.div`
    text-align: left;

    span {
        color: ${theme.colors.Neutral50};
        font-size: 12px;
        font-weight: 400;
        line-height: 130%;
    }

`

const Price = styled.div`
    color: ${theme.colors.Primary60};
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
`



const AddItemBlock = styled.div`
display: flex;
    align-items: center;
    gap: 4px;

    span {
        color: ${theme.colors.Neutral100};
        font-size: 14px;
        font-weight: 600;
        line-height: 140%
    }
`

const WrapperPlusMinus = styled.div`
    padding: 8px;
    border-radius: 50px;
    background-color: ${theme.colors.Neutral30};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    svg {
        stroke: ${theme.colors.Neutral50};
    }
    
    &:hover {
        background-color: ${theme.colors.Neutral100};
        
        svg {
            stroke: ${theme.colors.Neutral10};
        }
    }
`


export const S = {
    Order,
    Photo,
    InfoBlock,
    PriceAndCountBlock,
    Price,
    PriceAndAddContainer,
    AddItemBlock,
    WrapperPlusMinus

}