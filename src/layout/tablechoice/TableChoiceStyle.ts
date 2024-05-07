import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {NavLink as RouterNavLink} from "react-router-dom";

const TableChoiceStyle = styled.div`
    display: flex;
    flex-direction: column;
background-color: ${theme.colors.Neutral20};

   
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    z-index: 0;
    

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
    margin-right: 32px ;
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
    gap:10px;
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
    border:none;
`
const TableStyles = styled.div`
    margin-top: 200px;
    display: grid;
    grid-template-areas:
    "table1 table2 table3 table4 table5"
    "table6 table6 table7 table7 table8 table8"
    "table9 table10 table11 table12 table13"
    "table14 table15 table16 table17 table18";
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto auto auto;
    border: 1px solid transparent;
    row-gap: 44px;
    padding: 24px;
`;



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

}

