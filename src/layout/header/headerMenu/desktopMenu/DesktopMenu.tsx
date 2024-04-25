import React from "react";
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";

import {DateStream} from "../../../../components/datestream/DateStream";
import avatarka from "../../../../assets/images/Profile.png";
import {SelectEatPlace} from "../../../../components/selectplace/SelectEatPlace";
import {FlexWrapper} from "../../../../components/FlexWrapper";


const HeaderMenuItems = [
    {
        title: "Home",
        href: "home",
        svg: "home",
    },
    {
        title: "Order",
        href: "order",
        svg: "note",
    },
    {
        title: "History",
        href: "history",
        svg: "clock",
    },
    {
        title: "Bills",
        href: "bills",
        svg: "receipt",
    },

];


export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu MenuStyledProps={S.NavLink}
                  items={HeaderMenuItems}/>
            <FlexWrapper align={'center'}>
                <SelectEatPlace/>
                <DateStream/>
                <S.Photo src={avatarka} alt={'avatarka'}/>
            </FlexWrapper>
        </S.DesktopMenu>
    );
};
