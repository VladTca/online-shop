import styled from "styled-components";
import {NavLink as RouterNavLink} from "react-router-dom";
import {theme} from "../../styles/Theme";

const Main = styled.main`

    
    display: flex;
    
  
`;


const MainHeader = styled.div`
    display: flex;
    width: calc(100% - 125px - 360px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    position: fixed;
    border-bottom: 1px solid ${theme.colors.Neutral30};
    margin: 76px 360px 0 125px;
    background-color: ${theme.colors.Neutral10};

`;

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

const SearchMenuStyles= styled.nav`
    display: flex;
    align-items: center;
    width: 100%;


    ul {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        padding-right: 24px;
        font-size: 14px;
        letter-spacing: -0.7px;
        font-weight: 400;
        line-height: 140%;
    }
`;

const SearchInputBlock = styled.div`
    padding: 22px 24px;
    display: flex;
    align-items: center;
    gap:10px;
    border-right: 1px solid ${theme.colors.Neutral30};
    width:50%;
    margin-right: 24px;
`;

const SearchInputField = styled.input`

    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    &::placeholder {
      color: ${theme.colors.Neutral40};
    }
    border:none;
    
`;

const SearchMenu = styled(RouterNavLink)`
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

const GridContainer = styled.div`
    margin: 180px 359px 0 125px;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    gap: 16px;
`

export const S = {
    Main,
    SearchMenu,
    SearchMenuStyles,
    MainHeader,
    SearchInputBlock,
    SearchInputField,
    Dashboard,
    GridContainer
}