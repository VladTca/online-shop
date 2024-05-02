import React from 'react';
import {S} from './Main_Styles';
import {Menu} from "../header/headerMenu/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import ayamKentang from "../../assets/images/Ayam-kentang.png";
import cumicumi from "../../assets/images/Cumi-cumi.png";
import ikanSantan from "../../assets/images/Ikan-santan.png";
import mieKuahPedas from "../../assets/images/Mie-kuah-pedas.png";
import steakSapiBakar from "../../assets/images/Steak-sapi-bakar.png";
import kuahSantan from "../../assets/images/Kuah-santan.png";
import miegepeng from "../../assets/images/Mie-gepeng-telor.png";
import mieputih from "../../assets/images/Mie-putih-ayam-pedas.png";
import nasiayam from "../../assets/images/Nasi-ayam-salad.png";
import nasigoreng from "../../assets/images/Nasi-goreng-putih.png";
import nasisteak from "../../assets/images/Nasi-steak-ayam.png";
import steakikan from '../../assets/images/Steak-ikan-santan.png';
import {MainMenuItem} from "./mainMenuItem/MainMenuItem";



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
        photo: steakSapiBakar,
        name: 'Steak sapi bakar',
        price: '$ 25.12',
    },
    {
        photo: ayamKentang,
        name: 'Ayam kentang',
        price: '$ 25.12',
    },
    {
        photo: ikanSantan,
        name: 'Ikan santan',
        price: '$ 25.12',
    },
    {
        photo: mieKuahPedas,
        name: 'Mie kuah pedas',
        price: '$ 25.12',
    },
    {
        photo: kuahSantan,
        name: 'Kuah santan',
        price: '$ 25.12',
    },
    {
        photo: miegepeng,
        name: 'Mie gepeng telor',
        price: '$ 25.12',
    },
    {
        photo: nasisteak,
        name: 'Nasi steak ayam',
        price: '$ 25.12',
    },
    {
        photo: steakikan,
        name: 'Steak ikan santan',
        price: '$ 25.12',
    },
    {
        photo: nasigoreng,
        name: 'Nasi goreng putih',
        price: '$ 25.12',
    },
    {
        photo: nasiayam,
        name: 'Nasi ayam salad',
        price: '$ 25.12',
    },
    {
        photo: mieputih,
        name: 'Mie putih ayam pedas',
        price: '$ 25.12',
    },
    {
        photo: cumicumi,
        name: 'Cumi-cumi',
        price: '$ 25.12',
    },
]


export const Main = () => {
    return (
        <S.Main>
            <S.MainHeader>
                <S.Dashboard>
                    Dashboard/ <span>Food</span>
                </S.Dashboard>
                <S.SearchMenuStyles>

                    <S.SearchInputBlock>
                        <Icon iconId={'search'}/>
                        <S.SearchInputField type={'search'} placeholder={'Search menu...'}/>
                    </S.SearchInputBlock>
                    <Menu PropForFlexWrapper1={'row'} PropForFlexWrapper2={'center'} items={SearchMenuItems}
                          MenuStyledProps={S.SearchMenu}/>
                </S.SearchMenuStyles>
            </S.MainHeader>

            <S.GridContainer>
                {MainMenuItems.map((m, i) => {
                    return <MainMenuItem photo={m.photo} name={m.name} price={m.price} key={i}/>
                })}
            </S.GridContainer>

        </S.Main>
    );
};

