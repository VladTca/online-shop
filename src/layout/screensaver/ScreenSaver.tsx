import React, {useEffect, useState} from 'react';
import {S} from "./ScreenSaverStyles";







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
        <div>
            {time.hours}
            <span style={{ opacity: showColon ? 1 : 0 }}>:</span>
            {time.minutes}
            <S.AMPM>{` ${amPm}`}</S.AMPM>
        </div>
    );
};

export const ScreenSaver = () => {
    return (
        <S.ScreenSaverStyles>
            <TimeDisplay/>
        </S.ScreenSaverStyles>
    );
};
