import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px 24px 24px;
`

const Summary = styled.div`

`

const SubSummaryBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding-bottom: 16px;
    border-bottom: 2px dashed ${theme.colors.Neutral30};
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.Neutral60};
    line-height: 150%;
    text-align: left;
    gap: 12px;

    span {
        float: right;
        color: ${theme.colors.Neutral100};
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
    }
`

const SubSummaryNameBlock = styled.div`

`

const SubSummaryPriceBlock = styled.div`

`
const Total = styled.div`
    margin-top: 16px;
margin-bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.Neutral60};
    line-height: 150%;
    text-align: left;
    
    
    span {
        float: right;
        color: ${theme.colors.Primary60};
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
    }
`

export const S = {
    OrderSummary,
    Summary,
    SubSummaryBlock,
    SubSummaryNameBlock,
    SubSummaryPriceBlock,
    Total
}