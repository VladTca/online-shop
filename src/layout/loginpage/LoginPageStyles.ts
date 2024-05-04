import styled from "styled-components";
import {theme} from "../../styles/Theme";
import loginBackground from "../../assets/images/login-back.png";
import {Link} from "react-router-dom";

const LoginPageStyles = styled.div`
    background-image: url(${loginBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100vw;
    overflow-y:auto;

`

const Form = styled.form`
    border: 1px solid black;
    display: flex;
    max-width: 619px;
    height: 100%;
    padding: 54px 90px 72px 90px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background-color: ${theme.colors.Neutral10};
    box-shadow: 0 24px 64px -16px ${theme.colors.Neutral100});
    margin: 64px auto 64px 64px;

`

const MainTitle = styled.h1`
    color: ${theme.colors.Neutral100};
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    line-height: 150%;
 
    margin-bottom: 16px;
`

const SubTitle = styled.h2`
    font-size: 16px;
    color: ${theme.colors.Neutral60};
    text-align: center;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 32px;
    
    
`

const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    color: ${theme.colors.Neutral60};
    margin-bottom: 4px;
   
`
const InputBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    border: 1px solid ${theme.colors.Neutral30};
    border-radius: 58px;
    padding:12px 16px;
    width: 100%;
    margin-bottom: 20px;
    
 
`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.Neutral10};
    font-size: 16px;
    color: ${theme.colors.Neutral100};
    font-weight: 400;
    line-height: 150%;
border: none;
  
  
    
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: ${theme.colors.Neutral40};
    }
    
`

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 135px 0;
    
`;

const ForgotPassword = styled.a`
    font-size: 14px;
    color: ${theme.colors.Primary60};
    font-weight: 600;
    line-height: 140%;
    text-align: left;
    margin-bottom: 32px;
    
    `

const LinkTo = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.Neutral10};
`


const Agreement = styled.a`
    font-size: 16px;
    color: ${theme.colors.Neutral60};
    text-align: center;
    font-weight: 400;
    line-height: 150%;
    &:hover {
        color: ${theme.colors.Primary60};
        cursor: pointer;
    
    }
`

export const S = {
    LoginPageStyles,
    MainTitle,
    SubTitle,
    Agreement,
    Form,
    Field,
    FieldContainer,
    Label,
    ForgotPassword,
    InputBlock,
    LinkTo

}