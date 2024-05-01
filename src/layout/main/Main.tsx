import React from 'react';
import {S} from './Main_Styles';
import {Menu} from "../header/headerMenu/menu/Menu";
import {Icon} from "../../components/icon/Icon";


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

            <S.MainHeader>
                <S.Dashboard>
                    Dashboard/Food
                </S.Dashboard>
                <S.SearchMenuStyles>

                    <S.SearchInputBlok>
                        <Icon iconId={'search'}/>
                        <S.SearchInputField type={'search'} placeholder={'Search menu...'}/>
                    </S.SearchInputBlok>
                    <Menu PropForFlexWrapper1={'row'} PropForFlexWrapper2={'center'} items={SearchMenuItems}
                          MenuStyledProps={S.SearchMenu}/>
                </S.SearchMenuStyles>
            </S.MainHeader>
        </S.Main>
    );
};

