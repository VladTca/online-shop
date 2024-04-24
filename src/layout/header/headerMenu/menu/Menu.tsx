import React from "react";
import {S} from "../HeaderMenu_Styles";
import {Icon} from "../../../../components/icon/Icon";


type MenuPropsTypes = {
    href: string;
    svg: string;
    title: string;

};


export const Menu: React.FC<{items: MenuPropsTypes[]}> = ({ items }) => {
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
