import React from 'react';
import {S} from './RightSidebar_Styles'
import {CustomerInformationForm} from "./customerInformationForm/CustomerInformationForm";

export const RightSidebar: React.FC = () => {
    return (
        <S.RightSidebar>
            {/*<Tabs/>*/}
            <CustomerInformationForm/>
            {/*<OrderDetails/>*/}
            {/*<OrderSummary/>*/}
        </S.RightSidebar>
    );
};

