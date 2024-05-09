import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {NavLink as RouterNavLink} from "react-router-dom";

const TableChoiceStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.Neutral20};
    color: ${theme.colors.Neutral100};
    width: 100%;
    height: 100vh;


`
const UpWrapper = styled.div`
    margin-top: 76px;
    position: fixed;
    z-index: 1;
    background-color: ${theme.colors.Neutral10};
    width: 100%;
`
const Dashboard = styled.div`
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    padding: 8px 16px;
    border-bottom: 1px solid ${theme.colors.Neutral30};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    color: ${theme.colors.Primary60};


    span {
        color: ${theme.colors.Neutral60};
    }

`;
const ReservAndSearchBar = styled.div`
    border-bottom: 1px solid ${theme.colors.Neutral30};
    display: flex;
    max-width: 100%;
    justify-content: space-between;


`
const IconWrapper = styled.div`
    padding: 22px 24px;
    border-right: 1px solid ${theme.colors.Neutral30};

`

const Legend = styled.div`
    margin-left: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    display: flex;
    align-items: center;

`
const LegendItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 32px;

    &:last-child {
        margin-right: 0;
    }
`

const RezervMenuItemsBar = styled(RouterNavLink)`
    color: ${theme.colors.Neutral100};
    border: 1px solid ${theme.colors.Neutral30};
    border-radius: 40px;
    background: ${theme.colors.Neutral10};
    padding: 8px 16px;

    display: flex;

    align-items: center;
    cursor: pointer;

    svg {
        display: none
    }

    &:hover {
        color: ${theme.colors.Primary60};
        border: 1px solid ${theme.colors.Primary60};
        background: ${theme.colors.Primary10};
    }
}
`;

const RezervMenuItemsStyles = styled.div`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;

    }

`
const SearchInputBlock = styled.div`
    padding: 22px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-left: 1px solid ${theme.colors.Neutral30};
    margin-left: 32px;
    width: 361px;

`

const SearchInputField = styled.input`

    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    &::placeholder {
        color: ${theme.colors.Neutral40};
    }

    border: none;
`
const TableStyles = styled.div`
    margin-top: 185px;
    display: grid;
    margin-right: 125px;
    position: relative;

    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
    "table1 table2 table2 table3 table3 table3 table4 table4 table5 table5"
    "table6 table6 table6 table7 table7 table7 table8 table8 table8 table8"
    "table9 table9 table10 table11 table11 table11 table12 table12 table13 table13"
    "table14 table14 table15 table15 table16 table16 table17 table17 table18 table18";
    border: 1px solid transparent;
    row-gap: 44px;
    padding: 24px 24px 0 24px;

    div {
        display: grid;
        justify-content: center;
        height: 170px;
    }

    & > div:first-child {
        grid-area: table1;

    }

    & > div:nth-child(2) {
        grid-area: table2;

    }

    & > div:nth-child(3) {
        grid-area: table3;


    }

    & > div:nth-child(4) {
        grid-area: table4;


    }

    & > div:nth-child(5) {
        grid-area: table5;

    }

    & > div:nth-child(6) {
        grid-area: table6;
    }

    & > div:nth-child(7) {
        grid-area: table7;

    }

    & > div:nth-child(8) {
        grid-area: table8;


    }

    & > div:nth-child(9) {
        grid-area: table9;
    }

    & > div:nth-child(10) {
        grid-area: table10;
        justify-content: start;
    }

    & > div:nth-child(11) {
        grid-area: table11;


    }

    & > div:nth-child(12) {
        grid-area: table12;

    }

    & > div:nth-child(13) {
        grid-area: table13;
    }

    & > div:nth-child(14) {
        grid-area: table14;
    }

    & > div:nth-child(15) {
        grid-area: table15;
        justify-content: start;
    }

    & > div:nth-child(16) {
        grid-area: table16;
        justify-content: start;
        padding-left: 50px;
    }

    & > div:nth-child(17) {
        grid-area: table17;
    }

    & > div:last-child {
        grid-area: table18;
    }

`;

const DownBarStyles = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: ${theme.colors.Neutral10};
    box-shadow: 0 16px 30px -6px rgba(25, 25, 28, 0.16);
    position: fixed;
    bottom: 24px;
    left: 24px;
    right: 149px;
    

    span {
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        color: ${theme.colors.Neutral60};
    }

`
const DownSectionChoiseStyles = styled.div`
    padding-left: 32px;
    border-left: 1px solid ${theme.colors.Neutral30};
    margin-left: 32px;
    display: flex;
    gap: 16px;
  
    div{
        width:48px;
        height:48px;
    }
`

const RightBarStyles = styled.div`
    display: flex;
    flex-direction: column;
    right: 0;
    gap: 24px;
    position: absolute;
    margin-top: 185px;
 
`


export const S = {
    TableChoiceStyle,
    Dashboard,
    ReservAndSearchBar,
    IconWrapper,
    Legend,
    LegendItem,
    RezervMenuItemsStyles,
    RezervMenuItemsBar,
    SearchInputBlock,
    SearchInputField,
    TableStyles,
    UpWrapper,
    RightBarStyles,
    DownBarStyles,
    DownSectionChoiseStyles

}

