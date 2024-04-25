import React from 'react';
import {S} from "./LeftSidebar_Styles";
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
                   <Menu PropForFlexWrapper1={'column'} PropForFlexWrapper2={'center'} items={LeftSBicon}/>
                </S.LeftSidebarMenu>

        </S.LeftSidebar>
    );
};
