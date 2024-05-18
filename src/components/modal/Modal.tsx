import React from 'react';
import {S} from "./Modal_Styles";

type ModalPropsType = {
    active: boolean
    setActive: (newStatus: boolean) => void
    modalType: string;    //props for modals withbuttons
}

export const Modal: React.FC<ModalPropsType> = ({active, setActive, modalType}) => {
    const renderModalContent = () => {
        switch (modalType) {
            case 'addNote':
                return (
                    <>
                         Add note modal content
                    </>
                );
            case 'customerInfo':
                return (
                    <>
                       Customer Information modal content
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <S.Modal active={active} onClick={() => setActive(false)}>
            <S.ModalContent>
                {renderModalContent()}
            </S.ModalContent>
        </S.Modal>
    );
};

