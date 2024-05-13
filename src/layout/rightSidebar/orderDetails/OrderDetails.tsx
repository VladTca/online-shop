import React from 'react';
import {S} from "./OrderDetails_Styles";
import {Order} from './order/Order';
import mieKuahPedas from '../../../assets/images/Mie-kuah-pedas.png';
import ayamKentang from '../../../assets/images/Ayam-kentang.png';
import steakSapiBakar from '../../../assets/images/Steak-sapi-bakar.png';
import {SectionTitle} from "../../../components/SectionTitle";
import ikansantan from '../../../assets/images/Ikan-santan.png';

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
    {
        photo: ikansantan,
        name: 'Ikan santan',
        price: '$ 10.40',
    },

]

export const OrderDetails: React.FC = () => {
    return (
        <S.OrderDetailsBlock>

                <SectionTitle>Order details</SectionTitle>
                <S.Orders>

                    {orders.map((o, i) => {
                        return <Order photo={o.photo}
                                      name={o.name}
                                      price={o.price}
                                      key={i}/>
                    })}

                </S.Orders>

        </S.OrderDetailsBlock>
    );
};

