import styled from "styled-components";
import loginBackground from "../../assets/images/screensave.png";


const ScreenSaverStyles = styled.div`
    background-image: url(${loginBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 0;
    overflow: hidden;
    font-size: 160px;
    color: #fff;
    font-weight: 275;
    line-height: 100%;
 //margin: 0 auto;

`


const StyledTimeDisplay = styled.div`
    margin: 0 auto;
`

const AMPM = styled.span`
    font-size: 44px;
    margin-left: 12px;
    font-weight: 275;
    line-height: 100%;
`

const StyledDate = styled.div`
    margin: 4px auto 0 auto;
    
    font-size: 24px;
    font-weight: 400;
    line-height: 150%;
   
    

`

const Photo = styled.img`
width: 80px;
height: 80px;

`

const MainTitle = styled.h1`
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 150%;
   
`

const SubTitle = styled.p`
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    line-height: 100%;
    
    span {
        font-weight: 600;
    font-size: 18px;
        
    }

`

const Downwrapper = styled.div`
position: absolute;
bottom: 64px;
    display: flex;
    align-items: center;
    gap: 24px;
    
`
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`


export const S = {
    ScreenSaverStyles,
    AMPM,
    StyledDate,
    Photo,
    MainTitle,
    SubTitle,
    Downwrapper,
    LoginWrapper,
    StyledTimeDisplay
}