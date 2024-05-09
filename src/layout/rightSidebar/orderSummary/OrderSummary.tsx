import React, {useState} from 'react';
import {S} from './OrderSummary_Styles'
import {Button} from "../../../components/Button";
import {Modal} from "../../../components/modal/Modal";


interface  IProps {
    onClick: () => void
}

export const OrderSummary: React.FC<IProps> = ({onClick}) => {
    // const [modalActive, setModalActive] = useState(false);
    return (
        <S.OrderSummary>

                <S.SubSummaryBlock>
                    <div>Subtotal <span>$ 62.13</span></div>
                    <div>Tax (10%) <span>$ 1.87</span></div>
                </S.SubSummaryBlock>
                <S.Total>
                    Total <span>$ 64.00</span>
                </S.Total>

            {/*<Button onClick={() => setModalActive(true)} btnType={'payNow'}>Pay Now</Button>*/}
            <Button onClick={onClick} btnType={'payNow'}>Pay Now</Button>
            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}

        </S.OrderSummary>
    );
};

