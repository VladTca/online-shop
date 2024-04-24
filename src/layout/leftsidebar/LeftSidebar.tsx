import React from 'react';
import {S} from "./LeftSidebar_Styles";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const LeftSidebar = () => {
    return (
        <S.LeftSidebar>
            <Container>
                <FlexWrapper direction={'column'} >
                    <Icon iconId={"logo"} />
                    <Icon iconId={"logo"} />
                    <Icon iconId={"logo"} />
                    <Icon iconId={"logo"} />
                </FlexWrapper>
            </Container>
        </S.LeftSidebar>
    );
};
