import React from 'react';
import {S} from './OrderSummary_Styles'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const OrderSummary: React.FC = () => {
    return (
        <S.OrderSummary>


                <S.SubSummaryBlock>
                    Subtotal <span>$ 50.00</span>
                    Tax (10%) <span>$ 12.13</span>
                </S.SubSummaryBlock>
                <S.Total>
                    Total <span>$ 62.13</span>
                </S.Total>

            <Button btnType={'PayNow'}>Pay Now</Button>

        </S.OrderSummary>
    );
};

