import React from 'react';
import {S} from "./LeftSidebar_Styles";
import {Container} from "../../components/Container";
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
            <Container>
                <FlexWrapper direction={'column'} >
                   <Menu items={LeftSBicon}/>
                </FlexWrapper>
            </Container>
        </S.LeftSidebar>
    );
};
