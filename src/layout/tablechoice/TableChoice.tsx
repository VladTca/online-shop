import React from 'react';
import {Header} from "../header/Header";
import {S} from './TableChoiceStyle';
import {Icon} from "../../components/icon/Icon";
import {Menu} from "../header/headerMenu/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";

import tableImage1 from '../../assets/images/Table1.png';
import tableImage2 from '../../assets/images/Table2.png';
import tableImage3 from '../../assets/images/Table3.png';
import tableImage4 from '../../assets/images/Table4.png';
import tableImage5 from '../../assets/images/Table5.png';
import tableImage6 from '../../assets/images/Table6.png';
import tableImage7 from '../../assets/images/Table7.png';
import tableImage8 from '../../assets/images/Table8.png';
import tableImage9 from '../../assets/images/Table9.png';
import tableImage10 from '../../assets/images/Table10.png';
import tableImage11 from '../../assets/images/Table11.png';
import tableImage12 from '../../assets/images/Table12.png';
import tableImage13 from '../../assets/images/Table13.png';
import tableImage14 from '../../assets/images/Table14.png';
import tableImage15 from '../../assets/images/Table15.png';
import tableImage16 from '../../assets/images/Table16.png';
import tableImage17 from '../../assets/images/Table17.png';
import tableImage18 from '../../assets/images/Table18.png';
import rightbar1 from '../../assets/images/Sidebar-right.png';
import rightbar2 from '../../assets/images/Sidebar-right2.png';


const tableImages = [
    {id: '1', src: tableImage1},
    {id: '2', src: tableImage2},
    {id: '3', src: tableImage3},
    {id: '4', src: tableImage4},
    {id: '5', src: tableImage5},
    {id: '6', src: tableImage6},
    {id: '7', src: tableImage7},
    {id: '8', src: tableImage8},
    {id: '9', src: tableImage9},
    {id: '10', src: tableImage10},
    {id: '11', src: tableImage11},
    {id: '12', src: tableImage12},
    {id: '13', src: tableImage13},
    {id: '14', src: tableImage14},
    {id: '15', src: tableImage15},
    {id: '16', src: tableImage16},
    {id: '17', src: tableImage17},
    {id: '18', src: tableImage18},
]

const LegendItems = [
    {
        svg: 'indicator-blue',
        title: 'Available',
    },
    {
        svg: 'indicator-red',
        title: 'Reserved',
    },
    {
        svg: 'indicator-green',
        title: 'Billed',
    },
    {
        svg: 'indicator-orange',
        title: 'Avalaible soon',
    },

]

const RezervMenuItems = [
    {
        svg: '',
        title: 'All table',
        href: 'all-table'
    },
    {
        svg: '',
        title: 'Reservation',
        href: 'reservation'
    },
    {
        svg: '',
        title: 'Running order',
        href: 'running-order'
    },
]


export const TableChoice = () => {
    return (
        <S.TableChoiceStyle>
            <S.UpWrapper><Header/>
                <S.Dashboard>
                    Dashboard / food / <span>Select Table</span>
                </S.Dashboard>
                <S.ReservAndSearchBar>

                    <FlexWrapper><S.IconWrapper>
                        <Icon iconId={'arrow-left'}/>
                    </S.IconWrapper>
                        <S.Legend>
                            {LegendItems.map((item) => (
                                <><S.LegendItem>
                                    <Icon iconId={item.svg}/>
                                    <span>{item.title}</span>
                                </S.LegendItem></>


                            ))}
                        </S.Legend></FlexWrapper>

                    <FlexWrapper>
                        <S.RezervMenuItemsStyles>
                            <Menu MenuStyledProps={S.RezervMenuItemsBar}
                                  PropForFlexWrapper2={'center'} items={RezervMenuItems}/>
                        </S.RezervMenuItemsStyles>
                        <S.SearchInputBlock>
                            <Icon iconId={'search'}/>
                            <S.SearchInputField type={'search'} placeholder={'Search table...'}/>
                        </S.SearchInputBlock>
                    </FlexWrapper>

                </S.ReservAndSearchBar></S.UpWrapper>

            <S.TableStyles>

                {tableImages.map((img, index) => {
                    return (

                        <div id={'table' + img.id} className={'table'}><img key={img.id} src={img.src}
                                                                            alt={`table ${img.id}`}/></div>

                    )
                })}

            </S.TableStyles>

            <S.RightBarStyles>
                <div><img src={rightbar1} alt={'RightBar1'}/></div>
                <div><img src={rightbar2} alt={'RightBar2'}/></div>
            </S.RightBarStyles>

        </S.TableChoiceStyle>
    )
};

