import React from 'react';
import {S} from './RightSidebar_Styles'
import {CustomerInformationForm} from "./customerInformationForm/CustomerInformationForm";
import {OrderDetails} from "./orderDetails/OrderDetails";
import {OrderSummary} from "./orderSummary/OrderSummary";
import {Switcher} from "./switcher/Switcher";


interface  IProps {
    onClcik: () => void
}

export const RightSidebar: React.FC<IProps> = ({onClcik}) => {
    return (
        <S.RightSidebar>
            <Switcher/>
            <CustomerInformationForm/>
            <OrderDetails/>
            <OrderSummary onClcik={onClcik}/>
        </S.RightSidebar>
    );
};

