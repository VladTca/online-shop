import React from 'react';
import {S} from "./LeftSidebar_Styles";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
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
        svg:'bread',
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
                   <Menu/>


                    {/*{LeftSBicon.map((item, index) => {*/}
                    {/*    return (*/}
                    {/*        <S.MenuItem key={index}>*/}
                    {/*            <S.NavLink*/}
                    {/*                activeClass="active"*/}
                    {/*                offset={-70}*/}
                    {/*                spy={true}*/}
                    {/*                smooth={true}*/}
                    {/*                to={item.href}*/}
                    {/*            >*/}
                    {/*                <Icon iconId={item.svg}/>*/}
                    {/*                {item.title}*/}
                    {/*            </S.NavLink>*/}
                    {/*        </S.MenuItem>*/}
                    {/*    );*/}
                    {/*})} <Icon iconId={"logo"} />*/}
                    {/*<Icon iconId={"logo"} />*/}
                    {/*<Icon iconId={"logo"} />*/}
                    {/*<Icon iconId={"logo"} />*/}
                </FlexWrapper>
            </Container>
        </S.LeftSidebar>
    );
};
