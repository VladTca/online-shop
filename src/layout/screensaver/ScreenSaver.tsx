import React, {useEffect, useState} from 'react';
import {S} from "./ScreenSaverStyles";
import avatarka from "../../assets/images/Profilepict.png";

import {ImageWrapper} from "../../components/ImageWrapper";




const TimeDisplay = () => {
    const [time, setTime] = useState({ hours: '', minutes: '' });
    const [showColon, setShowColon] = useState(true);
    const [amPm, setAmPm] = useState('AM');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const amPm = hours >= 12 ? 'PM' : 'AM';
            setAmPm(amPm);

            hours = hours % 12;
            hours = hours ? hours : 12; // if ne 0 to hours else 12
            const hoursStr = (hours < 10 ? '0' + hours : hours).toString();
            const minutesStr = (minutes < 10 ? '0' + minutes : minutes).toString();

            setTime({ hours: `${hoursStr}`, minutes: `${minutesStr}` });
        };

        const timerId = setInterval(updateTime, 1000);
        updateTime();

        return () => {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        const colonTimerId = setInterval(() => {
            setShowColon(!showColon);
        }, 1000);

        return () => {
            clearInterval(colonTimerId);
        };
    }, [showColon]);

    return (
        <S.StyledDateDisplay>
            {time.hours}
            <span style={{ opacity: showColon ? 1 : 0 }}>:</span>
            {time.minutes}
            <S.AMPM>{` ${amPm}`}</S.AMPM>
        </S.StyledDateDisplay>
    );
};

const DateDisplay = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
            const day = now.getDate();
            const month = now.getMonth() + 1;
            const year = now.getFullYear();

            const dayStr = (day < 10 ? '0' + day : day).toString();
            const monthStr = (month < 10 ? '0' + month : month).toString();

            setDate(`${dayOfWeek}, ${dayStr} ${monthStr} ${year}`);
        };

        const timerId = setInterval(updateDate, 1000 * 60 * 60);
        updateDate();

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <S.StyledDate>
            {date}
        </S.StyledDate>
    );
}
export const ScreenSaver = () => {
    return (
        <S.ScreenSaverStyles>
            <TimeDisplay/>
            <DateDisplay/>
            <S.Downwrapper>
                <ImageWrapper>
                    <S.Photo src={avatarka} alt={"avatarka"}/>
                </ImageWrapper>
                <S.LoginWrapper>
                    <S.MainTitle>Coca Coffeetalk</S.MainTitle>
                    <S.SubTitle>Logged in as,<span>Bean Kean</span></S.SubTitle>
                </S.LoginWrapper>

            </S.Downwrapper>
        </S.ScreenSaverStyles>
    );
};
