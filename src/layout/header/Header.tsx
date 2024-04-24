import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <div>
                        <Icon iconId={"arrow-left"}/>
                        <Logo/>
                    </div>
                    <DesktopMenu/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

