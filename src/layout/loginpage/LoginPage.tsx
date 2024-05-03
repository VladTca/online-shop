import React from 'react';
import {S} from "./LoginPageStyles";
import {Icon} from "../../components/icon/Icon";
import {Button} from "../../components/Button";
import {theme} from "../../styles/Theme";



export const LoginPage = () => {
    return (
        <S.LoginPageStyles>


            <S.Form>
                <Icon iconId={"logo-loginpage"} height={"58"} width={"151"} viewBox={"0 0 151 58"} stroke={'none'}/>


                <S.FieldContainer>
                    <S.MainTitle>Login form</S.MainTitle>
                    <S.SubTitle>Lorem Ipsum has been the industry's standard dummy text ever since.</S.SubTitle>
                    <S.Label htmlFor="username">Username</S.Label>
                    <S.InputBlock><Icon iconId={"user"} height={"20"} width={"20"} viewBox={"0 0 20 20"} stroke={theme.colors.Neutral100}/>
                        <S.Field type="text" placeholder="Enter username" />  // add required
                    </S.InputBlock>
                    <S.Label htmlFor="password">Password</S.Label>
                    <S.InputBlock>
                        <Icon iconId={"lock-close"} height={"20"} width={"20"} viewBox={"0 0 20 20"} stroke={theme.colors.Neutral100}/>
                        <S.Field type="password" placeholder="Enter password" /> /add required
                    </S.InputBlock>
                    <S.ForgotPassword>Forgot password?</S.ForgotPassword>
                    <S.LinkTo to="/app"><Button btnType={'runningOrder'}>Running Order
                    </Button></S.LinkTo>
                </S.FieldContainer>
                <S.Agreement>End user agreement</S.Agreement>
            </S.Form>


        </S.LoginPageStyles>


    );
};

