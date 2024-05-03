import styled from "styled-components";
import loginBackground from "../../assets/images/screensave.png";

const ScreenSaverStyles = styled.div`
       background-image: url(${loginBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 0;
    overflow: hidden;
`