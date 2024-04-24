import React from 'react';
import {S} from "./Order_Styles";
import {SubSectionTitle} from "../../../../components/SubSectionTitle";
import {ImageWrapper} from "../../../../components/ImageWrapper";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type OrderPropsType = {
    photo: string
    name: string
    price: string
}


export const Order: React.FC<OrderPropsType> = (props: OrderPropsType) => {
    return (
        <S.Order>
            <FlexWrapper>
                <ImageWrapper>
                    <S.Photo src={props.photo}/>
                </ImageWrapper>
                <S.InfoBlock>
                    <SubSectionTitle>${props.name}</SubSectionTitle>

                    <S.PriceAndCountBlock>
                        <span>Price</span>
                        <S.Price>{props.price}</S.Price>
                    </S.PriceAndCountBlock>
                </S.InfoBlock>

            </FlexWrapper>


        </S.Order>
    );
};

