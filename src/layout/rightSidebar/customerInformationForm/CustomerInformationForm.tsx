import React from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Link} from "react-router-dom";

export const CustomerInformationForm: React.FC = () => {
    return (
        <S.CustomerInformationForm>

                <SectionTitle>Customer information</SectionTitle>

                    <S.Form>
                        <S.Field placeholder={'Customer name'}/>

                        <Link to="/tablechoice">
                            <S.FieldContainer>
                            <S.Field readOnly placeholder={'Select table'}/>
                            <Icon iconId={'chevron-right'}/>
                        </S.FieldContainer></Link>

                        <Button btnType={'addNote'}>Add note</Button>
                    </S.Form>


        </S.CustomerInformationForm>
    );
};

