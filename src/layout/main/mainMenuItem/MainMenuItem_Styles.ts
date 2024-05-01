import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const MainMenuItem = styled.div`
    padding: 12px 8px 16px 8px;
`

const Photo = styled.img`
    max-width: 203px;
    width: 100%;
    max-height: 158px;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`

const InfoBlock = styled.div`
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: ${theme.colors.Neutral100};

`

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: ${theme.colors.Primary60};
`

export const S = {
    MainMenuItem,
    Photo,
    InfoBlock,
    Name,
    Price
}