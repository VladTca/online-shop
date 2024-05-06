import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Modal = styled.div<{active: boolean}>`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
    opacity: ${props => props.active ? '1' : '0'};
    pointer-events: ${props => props.active ? 'all' : 'none'};
    transition: 0.5s;
`

const ModalContent = styled.div`
    padding: 24px;
    border-radius: 16px;
    background-color: ${theme.colors.Neutral10};
    
`

export const S = {
    Modal,
    ModalContent
}