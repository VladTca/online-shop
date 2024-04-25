import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";


export const Header: React.FC = () => {
    return (
        <S.Header>

                <FlexWrapper justify={"space-between"} align={"center"}>


                    <FlexWrapper>
                        <S.BackWrapper>
                        <Icon iconId={"arrow-left"} width={'20'} height={'20'} viewBox={"0 0 20 20"}/>
                        </S.BackWrapper>

                        <S.LogoStyles>
                            <Logo/>
                        </S.LogoStyles>
                        <FlexWrapper direction={'column'}>
                            <S.MainTitle>Walk-In</S.MainTitle>
                            <S.MainSubtitle>Coca coffeetalk</S.MainSubtitle>
                        </FlexWrapper>
                    </FlexWrapper>

                    <DesktopMenu/>
                </FlexWrapper>

        </S.Header>
    );
};

