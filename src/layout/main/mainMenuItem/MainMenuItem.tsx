import React, {useState} from 'react';
import {S} from './MainMenuItem_Styles';
import {Modal} from "../../../components/modal/Modal";

type MainMenuItemPropsType = {
    photo: string
    name: string
    price: string
    onClick?: () => void
}

interface IProps {
    onClcik: () => void
}

export const MainMenuItem: React.FC<MainMenuItemPropsType> = (props: MainMenuItemPropsType) => {
    // const [modalActive, setModalActive] = useState(false);
    return (
        <S.MainMenuItem>
            <S.Photo src={props.photo} /*onClick={onClick}*//>
            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
            <S.InfoBlock>
                <S.Name>{props.name}</S.Name>
                <S.Price>{props.price}</S.Price>
            </S.InfoBlock>
        </S.MainMenuItem>
    );
};

