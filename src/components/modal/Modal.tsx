import React, {useState} from 'react';
import {S} from "./Modal_Styles";

type ModalPropsType = {
    active: boolean
    setActive: (newStatus: boolean) => void
}

export const Modal: React.FC<ModalPropsType> = ({active, setActive}) => {


    return (
        <S.Modal active={active} onClick={() => setActive(false)}>
            <S.ModalContent onClick={e => e.stopPropagation()}>

            </S.ModalContent>
        </S.Modal>
    );
};

