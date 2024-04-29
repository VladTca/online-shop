import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const CustomerInformationForm = styled.div`
    width: 100%;
    max-height: 100%;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.Neutral30};;
`

const Form = styled.form`
    width: 100%;
    padding-top: 16px;
`

const Field = styled.input`
    width: 100%;
    height: 48px;
    background-color: ${theme.colors.Neutral10};
    border-radius: 58px;
    border: 1px solid ${theme.colors.Neutral30};
    padding-left: 16px;
    margin-bottom: 16px;
    
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        font-family: Poppins, sans-serif;
        color: ${theme.colors.Neutral40};
    }
`

export const S = {
    Form,
    Field,
    CustomerInformationForm

}

