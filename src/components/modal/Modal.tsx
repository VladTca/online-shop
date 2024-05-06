import React from 'react';
import {S} from "./Modal_Styles";

type ModalPropsType = {
    active: boolean
    setActive: (newStatus:boolean) => void
}

export const Modal: React.FC<ModalPropsType> = ({active, setActive}) => {
    return (
        <S.Modal>
            <S.ModalContent>

            </S.ModalContent>
        </S.Modal>
    );
};

