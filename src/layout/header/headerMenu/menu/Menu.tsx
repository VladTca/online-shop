import React from "react";
import {S} from "../HeaderMenu_Styles";

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "Order",
        href: "order",
    },
    {
        title: "History",
        href: "history",
    },
    {
        title: "Bills",
        href: "bills",
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
                            {item.title}
                        </S.NavLink>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};
