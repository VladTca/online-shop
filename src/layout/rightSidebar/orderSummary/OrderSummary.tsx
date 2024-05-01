import React from 'react';
import {S} from './OrderSummary_Styles'
import {Button} from "../../../components/Button";

export const OrderSummary: React.FC = () => {
    return (
        <S.OrderSummary>


                <S.SubSummaryBlock>
                    <div>Subtotal <span>$ 50.00</span></div>
                    <div>Tax (10%) <span>$ 12.13</span></div>
                </S.SubSummaryBlock>
                <S.Total>
                    Total <span>$ 62.13</span>
                </S.Total>

            <Button btnType={'payNow'}>Pay Now</Button>

        </S.OrderSummary>
    );
};

