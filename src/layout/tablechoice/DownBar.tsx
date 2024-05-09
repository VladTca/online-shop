import React from 'react';
import {S} from './TableChoiceStyle';
import {Icon} from "../../components/icon/Icon";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import t10select from '../../assets/images/t10select.png';
import t11select from '../../assets/images/t11select.png';
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
                <S.DownSectionChoiseStyles>
                    <div><img src={t10select} alt={`t10select`}></img></div>
                    <div><img src={t11select} alt={`t11select`}></img></div>
                </S.DownSectionChoiseStyles>
            </FlexWrapper>
            <div>
            <Button btnType={'payNow'}>&nbsp;&nbsp;&nbsp;Place Order&nbsp;&nbsp;&nbsp;</Button>
            </div>
        </S.DownBarStyles>
    );
};

