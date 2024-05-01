import React from 'react';
import {S} from "./Switcher_Styles";
import {Button} from "../../../components/Button";


export const Switcher: React.FC = () => {
    return (

        <S.SwitcherContainer>
            <Button btnType={'activeSwitcher'}>Buy</Button>
            <Button btnType={'inactiveSwitcher'}>Reservation</Button>
        </S.SwitcherContainer>


    );
};

