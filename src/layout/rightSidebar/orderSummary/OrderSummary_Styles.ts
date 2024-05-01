import styled from "styled-components";

const OrderSummary = styled.div`
display: flex;
flex-direction: column;
    padding:0 24px 24px 24px;
`

const Summary = styled.div`

`

const SubSummaryBlock = styled.div`
margin-top: 24px;
`

const SubSummaryNameBlock = styled.div`

`

const SubSummaryPriceBlock = styled.div`

`
const Total = styled.div`
margin-bottom: 24px;
`

export const S = {
    OrderSummary,
    Summary,
    SubSummaryBlock,
    SubSummaryNameBlock,
    SubSummaryPriceBlock,
    Total
}