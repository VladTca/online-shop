import React from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const CustomerInformationForm: React.FC = () => {
    return (
        <S.CustomerInformationForm>

                <SectionTitle>Customer information</SectionTitle>

                    <S.Form>
                        <S.Field placeholder={'Customer name'}/>

                        <S.FieldContainer>
                            <S.Field placeholder={'Select table'}/>
                            <Icon iconId={'chevron-right'}/>
                        </S.FieldContainer>

                        <Button btnType={'addNote'}>Add note</Button>
                    </S.Form>


        </S.CustomerInformationForm>
    );
};

