import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const CustomerInformationForm = styled.div`
    margin: 0 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.Neutral30};
`

const Form = styled.form`
    width: 100%;
    padding-top: 16px;
    
`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.Neutral10};
    border-radius: 58px;
    border: 1px solid ${theme.colors.Neutral30};
    padding:12px 16px;


    &#reservTableField{
        &:hover {
            cursor: pointer;
        }


        &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: ${theme.colors.Neutral40};
    }
   
    
`

const FieldContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 12px 0 16px 0;
    
    
    
    
    svg {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        cursor: pointer;
        
        &:hover {
         transform: translateY(-50%) scale(1.5);
        
        }
    }
`;

export const S = {
    Form,
    Field,
    CustomerInformationForm,
    FieldContainer

}

