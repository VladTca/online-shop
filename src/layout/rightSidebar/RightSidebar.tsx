import React from 'react';
import {S} from './RightSidebar_Styles'
import {CustomerInformationForm} from "./customerInformationForm/CustomerInformationForm";
import {OrderDetails} from "./orderDetails/OrderDetails";
import {OrderSummary} from "./orderSummary/OrderSummary";

export const RightSidebar: React.FC = () => {
    return (
        <S.RightSidebar>
            {/*<Tabs/>*/}
            <CustomerInformationForm/>
            <OrderDetails/>
            <OrderSummary/>
        </S.RightSidebar>
    );
};

