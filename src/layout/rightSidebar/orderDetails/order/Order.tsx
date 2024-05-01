import React from 'react';
import {S} from "./Order_Styles";
import {SubSectionTitle} from "../../../../components/SubSectionTitle";
import {ImageWrapper} from "../../../../components/ImageWrapper";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";


type OrderPropsType = {
    photo: string
    name: string
    price: string
}


export const Order: React.FC<OrderPropsType> = (props: OrderPropsType) => {
    return (
        <S.Order>
            <FlexWrapper gap={'12px'} align={'center'} justify={'center'}>

                    <S.Photo src={props.photo}/>

                <S.InfoBlock>
                    <SubSectionTitle>{props.name}</SubSectionTitle>
                    <S.PriceAndAddContainer>
                        <S.PriceAndCountBlock>
                            <span>Price</span>
                            <S.Price>{props.price}</S.Price>
                        </S.PriceAndCountBlock>
                        <S.AddItemBlock>
                            <Icon iconId={'minus'}/>
                            <span> 1 </span>
                            <Icon iconId={'plus'}/>
                        </S.AddItemBlock>
                    </S.PriceAndAddContainer>
                </S.InfoBlock>
            </FlexWrapper>
        </S.Order>
    );
};

