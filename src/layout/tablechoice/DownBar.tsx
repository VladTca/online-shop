import React from 'react';
import {S} from './TableChoiceStyle';
import {Icon} from "../../components/icon/Icon";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";

import {SubSectionTitle} from "../../components/SubSectionTitle";


export const DownBar = () => {
    return (
        <S.DownBarStyles>
            <FlexWrapper align="center" gap='16px'>
                <Icon iconId={'clipboard'}/>
                <FlexWrapper direction={'column'}>
                    <SubSectionTitle>
                        Table
                    </SubSectionTitle>
                    <span>Order #102</span>
                </FlexWrapper>
            </FlexWrapper>
<S.DownSectionChoiseStyles>

</S.DownSectionChoiseStyles>
            <div>
                <Button btnType={'payNow'}>&nbsp;&nbsp;&nbsp;Place Order&nbsp;&nbsp;&nbsp;</Button>
            </div>
        </S.DownBarStyles>
    );
};

