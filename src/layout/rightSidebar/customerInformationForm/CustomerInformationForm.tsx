import React from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'

export const CustomerInformationForm: React.FC = () => {
    return (
        <S.Form>
            <Container>
                <SectionTitle>Customer information</SectionTitle>
                <FlexWrapper>
                    <S.Form>
                        <S.Field placeholder={'Customer name'}/>
                        <S.Field placeholder={'Select table'} type={'button'}/>
                    </S.Form>
                    <Button/>
                </FlexWrapper>
            </Container>
        </S.Form>
    );
};

