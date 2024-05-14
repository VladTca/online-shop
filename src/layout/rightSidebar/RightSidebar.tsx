import React from 'react';
import {S} from './RightSidebar_Styles'
import {CustomerInformationForm} from "./customerInformationForm/CustomerInformationForm";
import {OrderDetails} from "./orderDetails/OrderDetails";
import {OrderSummary} from "./orderSummary/OrderSummary";
import {Switcher} from "./switcher/Switcher";



export const RightSidebar =()=>{
    return (
        <S.RightSidebar>
            <Switcher/>
            <CustomerInformationForm/>
            <OrderDetails/>
            <OrderSummary/>
        </S.RightSidebar>
    );
};

