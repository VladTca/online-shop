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
    {
        title: "Customer",
        href: "customer",
        svg: "user",
    }

];

interface DesktopMenuProps {
    showCustomer?: boolean;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ showCustomer = true }) => {
    const items = showCustomer
        ? HeaderMenuItems
        : HeaderMenuItems.slice(0, -1);

    return (
        <S.DesktopMenu>
            <Menu MenuStyledProps={S.NavLink}
                  items={items}/>
            <FlexWrapper align={'center'}>
                <SelectEatPlace/>
                <DateStream/>
                <S.Photo src={avatarka} alt={'avatarka'}/>
            </FlexWrapper>
        </S.DesktopMenu>
    );
};