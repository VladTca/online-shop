import React from 'react';
import {S} from './MainMenuItem_Styles';

type MainMenuItemPropsType = {
    photo: string
    name: string
    price: string
}

export const MainMenuItem: React.FC<MainMenuItemPropsType> = (props: MainMenuItemPropsType) => {
    return (
        <S.MainMenuItem>
            <S.Photo src={props.photo}/>
            <S.InfoBlock>
                <S.Name>{props.name}</S.Name>
                <S.Price>{props.price}</S.Price>
            </S.InfoBlock>
        </S.MainMenuItem>
    );
};

