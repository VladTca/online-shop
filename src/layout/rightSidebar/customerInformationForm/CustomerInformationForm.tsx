import React from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'

export const CustomerInformationForm: React.FC = () => {
    return (
        <S.CustomerInformationForm>

                <SectionTitle>Customer information</SectionTitle>

                    <S.Form>
                        <S.Field placeholder={'Customer name'}/>
                        <S.Field placeholder={'Select table'} type={'button'}/>
                        <Button btnType={'addNote'}>Add note</Button>
                    </S.Form>


        </S.CustomerInformationForm>
    );
};

