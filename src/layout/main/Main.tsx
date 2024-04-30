import React from 'react';
import {S} from './Main_Styles';
import {Menu} from "../header/headerMenu/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";


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

const MainMenuItems = [
    {
        iconId: 'Steak sapi bakar',
        name: 'Steak sapi bakar',
        price: '$ 25.12',
    },
    {
        iconId: 'Ayam kentang',
        name: 'Ayam kentang',
        price: '$ 25.12',
    },
    {
        iconId: 'Ikan santan',
        name: 'Ikan santan',
        price: '$ 25.12',
    },
    {
        iconId: 'Mie kuah pedas',
        name: 'Mie kuah pedas',
        price: '$ 25.12',
    },
    {
        iconId: 'Kuah santan',
        name: 'Kuah santan',
        price: '$ 25.12',
    },
    {
        iconId: 'Nasi steak ayam',
        name: 'Nasi steak ayam',
        price: '$ 25.12',
    },
    {
        iconId: 'Mie kuah pedas',
        name: 'Mie kuah pedas',
        price: '$ 25.12',
    },
    {
        iconId: 'Mie kuah pedas',
        name: 'Mie kuah pedas',
        price: '$ 25.12',
    },
    {
        iconId: 'Nasi goreng putih',
        name: 'Nasi goreng putih',
        price: '$ 25.12',
    },
    {
        iconId: 'Steak sapi bakar',
        name: 'Steak sapi bakar',
        price: '$ 25.12',
    },
    {
        iconId: 'Steak sapi bakar',
        name: 'Steak sapi bakar',
        price: '$ 25.12',
    },
    {
        iconId: 'Steak sapi bakar',
        name: 'Steak sapi bakar',
        price: '$ 25.12',
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
                        <S.SearchInputField type={'search'} placeholder={'Search menu'}/>
                    </S.SearchInputBlok>
                    <Menu PropForFlexWrapper1={'row'} PropForFlexWrapper2={'center'} items={SearchMenuItems}
                          MenuStyledProps={S.SearchMenu}/>
                </S.SearchMenuStyles>
            </S.MainHeader>

            <Container>

            </Container>
        </S.Main>
    );
};

