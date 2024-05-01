import React from 'react';
import {S} from "./Switcher_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";


export const Switcher:React.FC = () => {
    return (

            <S.SwitcherContainer>

                    <FlexWrapper>
                        <Button btnType={'activeSwitcher'}>Buy</Button>
                        <Button btnType={'inactiveSwitcher'}>Reservation</Button>
                    </FlexWrapper>

            </S.SwitcherContainer>



    );
};

