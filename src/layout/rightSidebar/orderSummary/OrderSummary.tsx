import React from 'react';
import {S} from './OrderSummary_Styles'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const OrderSummary:React.FC = () => {
    return (
        <S.OrderSummary>
            <Container>
                <FlexWrapper>
                    <S.Summary>
                        <S.SubSummaryBlock>
                            <S.SubSummaryNameBlock>Sub Total</S.SubSummaryNameBlock>
                            <S.SubSummaryPriceBlock>$ 62.13</S.SubSummaryPriceBlock>
                        </S.SubSummaryBlock>
                        <S.SubSummaryBlock>
                            <S.SubSummaryNameBlock>Tax (10%)</S.SubSummaryNameBlock>
                            <S.SubSummaryPriceBlock>$ 1.89</S.SubSummaryPriceBlock>
                        </S.SubSummaryBlock>
                        <S.SubSummaryBlock>
                            <S.SubSummaryNameBlock>Total</S.SubSummaryNameBlock>
                            <S.SubSummaryPriceBlock>$ 64.00</S.SubSummaryPriceBlock>
                        </S.SubSummaryBlock>
                    </S.Summary>
                </FlexWrapper>
                <Button>Pay Now</Button>
            </Container>
        </S.OrderSummary>
    );
};

