import React from 'react';
import {S} from "./OrderDetails_Styles";
import {Order} from './order/Order';
import mieKuahPedas from '../../../assets/images/Mie-kuah-pedas.png.png';
import ayamKentang from '../../../assets/images/Ayam-kentang.png.png';
import steakSapiBakar from '../../../assets/images/Steak-sapi-bakar.png';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";

const orders = [
    {
        photo: steakSapiBakar,
        name: 'Steak sapi bakar',
        price: '$ 25.12',
    },
    {
        photo: ayamKentang,
        name: 'Ayam kentang',
        price: '$ 15.40',
    },
    {
        photo: mieKuahPedas,
        name: 'Mie kuah pedas',
        price: '$ 11.21',
    },
]

export const OrderDetails: React.FC = () => {
    return (
        <S.Orders>
            <Container>

            </Container>
            <SectionTitle>Order Details</SectionTitle>

            {/*{orders.map((o, index) => {*/}
            {/*    return <Order key={index}*/}
            {/*                  photo={o.photo}*/}
            {/*                  name={o.name}*/}
            {/*                  price={o.price} />*/}
            {/*}}*/}

        </S.Orders>
    );
};

