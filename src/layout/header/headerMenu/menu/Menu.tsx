import React from "react";
import {S} from "../HeaderMenu_Styles";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type MenuPropsTypes = {
    href: string;
    svg: string;
    title: string;

};

type MenuProps = {
    items: MenuPropsTypes[];
   PropForFlexWrapper?: string; // Ваш новый пропс
};

export const Menu: React.FC<MenuProps> = ({ items, PropForFlexWrapper }) => {
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
                            <FlexWrapper direction={PropForFlexWrapper} justify={'center'} align={'normal'}>
                                <Icon iconId={item.svg}/>
                                {item.title}
                            </FlexWrapper>
                        </S.NavLink>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};
