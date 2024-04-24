import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

import {DateStream} from "../../../../components/datestream/DateStream";
import avatarka from "../../../../assets/images/Profile.png";
import {SelectEatPlace} from "../../../../components/selectplace/SelectEatPlace";



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
      <Menu items={HeaderMenuItems} />
        <SelectEatPlace/>
        <DateStream/>
        <S.Photo src={avatarka} alt={'avatarka'}/>
    </S.DesktopMenu>
  );
};
