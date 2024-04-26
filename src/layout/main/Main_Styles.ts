import styled from "styled-components";
import {Link} from "react-scroll";
import {theme} from "../../styles/Theme";

const Main = styled.main`
    border: 1px solid red;
    margin: 76px 360px 0 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const SearchMenu = styled(Link)`
    color: ${theme.colors.Neutral100};
    border: 1px solid ${theme.colors.Neutral30};
    border-radius: 40px;
    background: ${theme.colors.Neutral10};
    padding: 8px 16px;


    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

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
`

const SearchMenuStyles= styled.nav`
    display: flex;

    justify-content: center;
    align-items: center;


    ul {
        display: flex;
        gap: 32px;
        margin: 0 32px;

    }
`

export const S = {
    Main,
    SearchMenu,
    SearchMenuStyles
}