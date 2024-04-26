import React from 'react';
import {S} from './Main_Styles';
import {Menu} from "../header/headerMenu/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";



const SearchMenuItems = [
    {
        svg: '',
        title: 'All',
        href: 'All'
    },
    {
        svg: '',
        title: 'Chicken',
        href: 'chilcken'


    },
    {
        svg: '',
        title: 'Seafood',
        href: 'seafood'

    },
    {
        svg: '',
        title: 'Pasta',
        href: 'pasta'

    },
    {
        svg: '',
        title: 'Rice Bowl',
        href: 'rice-bowl'

    },

]




export const Main = () => {
    return (
        <S.Main>

            <div style={{paddingBottom:'20px'}}>Dashboard/Food</div>
            <S.SearchMenuStyles>
                    <input type={'search'}/>
                    <Menu PropForFlexWrapper1={'row'} PropForFlexWrapper2={'center'} items={SearchMenuItems}
                          MenuStyledProps={S.SearchMenu}/>
            </S.SearchMenuStyles>
        </S.Main>
    );
};

