import styled from "styled-components";

const Modal = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContent = styled.div`

`

export const S = {
    Modal,
    ModalContent
}