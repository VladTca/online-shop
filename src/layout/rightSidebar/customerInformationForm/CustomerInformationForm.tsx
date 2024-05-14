import React, {useState} from 'react';
import {S} from "./CustomerInformationForm_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from '../../../components/Button'
import {Icon} from "../../../components/icon/Icon";
import {Link} from "react-router-dom";
import {Modal} from "../../../components/modal/Modal";

export const CustomerInformationForm: React.FC = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <S.CustomerInformationForm>

            <SectionTitle>Customer information</SectionTitle>

            <S.Form>
                <S.Field placeholder={'Customer name'}/>

                <Link to="/tablechoice">
                    <S.FieldContainer>
                        <S.Field id='reservTableField' readOnly placeholder={'Select table'}/>
                        <Icon iconId={'chevron-right'}/>
                    </S.FieldContainer></Link>

                <Button btnType={'addNote'} onClick={() => setModalActive(true)}>Add note</Button>
                <Modal active={modalActive} setActive={setModalActive}/>
                {/*<Modal>*/}
                {/*    fggdhbfdghdfg*/}
                {/*</Modal>*/}
            </S.Form>

        </S.CustomerInformationForm>
    );
};

