import React from 'react';
import {S} from './TableChoiceStyle';
import {Icon} from "../../components/icon/Icon";
import {Button} from "../../components/Button";


export const DownBar = () => {
    return (
        <S.DownBarStyles>
<Icon iconId={'clipboard'}/>
            <Button btnType={'payNow'}>Place Order</Button>
        </S.DownBarStyles>
    );
};

