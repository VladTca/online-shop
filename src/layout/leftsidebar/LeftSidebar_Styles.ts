import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const LeftSidebar = styled.aside`

    border-right: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding: 20px 0;
    position: fixed;
    top: 76px;
    left: 0;
    bottom: 0;

   
    width: 125px;
    //margin-top: 76px;
`;

const MenuItem = styled.li`
    position: relative;
`;


const NavLink = styled(Link)`
    color: ${theme.colors.Neutral60};
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;

    &:hover {
        color: ${theme.colors.Primary60};

    }
`;



export const S = {
    LeftSidebar,
    NavLink,
    MenuItem,

}