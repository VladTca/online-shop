import React from "react";
import {S} from "../HeaderMenu_Styles";
import {Icon} from "../../../../components/icon/Icon";

const items = [
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

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink
                            activeClass="active"
                            offset={-70}
                            spy={true}
                            smooth={true}
                            to={item.href}
                        >
                            <Icon iconId={item.svg}/>
                            {item.title}
                        </S.NavLink>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};
