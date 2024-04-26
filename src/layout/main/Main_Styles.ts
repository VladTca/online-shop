import styled from "styled-components";
import {Link} from "react-scroll";
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
    color: ${theme.colors.Neutral60};

`;


const SearchInputBlok = styled.div`
    padding: 22px 24px;
    display: flex;
    align-items: center;
    gap:10px;

`;

const SearchInputField = styled.input`


    font-size: 14px;
    font-weight: 400;
    line-height: 140%;


`;



const SearchMenuStyles= styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    input {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;

        &::placeholder {
            content: 'Search menu';
            color: ${theme.colors.Neutral40};
        }
    ;
        //border:none;
        border: 1px solid ${theme.colors.Neutral100};
       

    }


    ul {
        display: flex;
        gap: 8px;
        margin: 0 24px;

    }
`;

const SearchMenu = styled(Link)`
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

export const S = {
    Main,
    SearchMenu,
    SearchMenuStyles,
    MainHeader,
    SearchInputBlok,
    SearchInputField,
    Dashboard
}