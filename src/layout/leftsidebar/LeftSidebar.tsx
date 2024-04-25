import React from 'react';
import {S} from "./LeftSidebar_Styles";

import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../header/headerMenu/menu/Menu";



const LeftSBicon=[
    {
        svg: 'kofe',
        title: 'Coffee',
        href: 'coffee'
    },
    {
        svg:'drink',
        title: 'Beverages',
        href: 'beverages'


    },
    {
        svg:'food',
        title: 'Food',
        href: 'food'

    },
    {
        svg:'pasta',
        title: 'Appetizer',
        href: 'appetizer'

    },
    {
        svg:'lasagna',
        title: 'Bread',
        href: 'bread'

    },
    {
        svg:'egg',
        title: 'Snack',
        href: 'snack'
    }
]


export const LeftSidebar = () => {
    return (
        <S.LeftSidebar>

                <S.LeftSidebarMenu>
                   <Menu PropForFlexWrapper={'column'} items={LeftSBicon}/>
                </S.LeftSidebarMenu>

        </S.LeftSidebar>
    );
};
