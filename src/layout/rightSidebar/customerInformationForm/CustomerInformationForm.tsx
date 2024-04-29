import React from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'

export const CustomerInformationForm: React.FC = () => {
    return (
        <S.CustomerInformationForm>
            <Container>
                <SectionTitle>Customer information</SectionTitle>
                <FlexWrapper direction={'column'} align={'flex-start'}>
                    <S.Form>
                        <S.Field placeholder={'Customer name'}/>
                        <S.Field placeholder={'Select table'} type={'button'}/>
                        <Button btnType={'addNote'}>Add note</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.CustomerInformationForm>
    );
};

