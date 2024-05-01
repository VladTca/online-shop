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
            <FlexWrapper gap={'12px'} >

                <ImageWrapper>
                    <S.Photo src={props.photo}/>
                </ImageWrapper>

                <S.InfoBlock>
                    <SubSectionTitle>{props.name}</SubSectionTitle>
                    <S.PriceAndAddContainer>
                        <S.PriceAndCountBlock>
                            <span>Price</span>
                            <S.Price>{props.price}</S.Price>
                        </S.PriceAndCountBlock>
                        <S.AddItemBlock>
                            <S.WrapperPlusMinus><Icon iconId={'minus'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/></S.WrapperPlusMinus>
                            <span> 1 </span>
                            <S.WrapperPlusMinus><Icon iconId={'plus'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/></S.WrapperPlusMinus>
                        </S.AddItemBlock>
                    </S.PriceAndAddContainer>
                </S.InfoBlock>
            </FlexWrapper>
        </S.Order>
    );
};

