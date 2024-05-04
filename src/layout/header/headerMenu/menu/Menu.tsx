import React from "react";
import {S} from "../HeaderMenu_Styles";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type MenuPropsTypes = {
    href: string;
    svg: string;
    title: string;
    widthM?: string;
    heightM?: string;
    viewBoxM?: string;

};

type MenuProps = {
    items: MenuPropsTypes[];
    PropForFlexWrapper1?: string;
    PropForFlexWrapper2?: string;
    widthM?: string;
    heightM?: string;
    viewBoxM?: string;
    MenuStyledProps: React.ComponentType<any>;
};

export const Menu: React.FC<MenuProps> = ({
                                              items,
                                              PropForFlexWrapper1,
                                              PropForFlexWrapper2,
                                              MenuStyledProps,
                                              widthM,
                                              heightM,
                                              viewBoxM
                                          }) => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <MenuStyledProps
                           to={item.href}
                           activeClassName="active"
                        >
                            <FlexWrapper gap={'8px'} direction={PropForFlexWrapper1} align={PropForFlexWrapper2}
                                         justify={'center'}>
                                <Icon width={widthM} height={heightM} viewBox={viewBoxM} iconId={item.svg}/>
                                {item.title}
                            </FlexWrapper>
                        </MenuStyledProps>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};