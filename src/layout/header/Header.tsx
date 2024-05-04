import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Link} from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../../styles/tippyThemes.css';


export const Header: React.FC = () => {
    return (
        <S.Header>

            <FlexWrapper justify={"space-between"} align={"center"}>


                <FlexWrapper>
                    <Tippy content='Exit' theme='myTheme' delay={[500, 250]} animation="perspective" placement="bottom-start">
                        <Link to="/online-shop">
                            <S.BackWrapper>
                                <Icon iconId={"arrow-left"} width={'20'} height={'20'} viewBox={"0 0 20 20"}/>
                            </S.BackWrapper>
                        </Link>
                    </Tippy>

                    <Link to="/app" title={'To Main Page'}>
                        <S.LogoStyles>
                            <Logo/>
                        </S.LogoStyles>
                    </Link>
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

