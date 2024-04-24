import React, {useEffect, useState} from 'react';
import {S} from "./DateStream_Styles";

export const DateStream:React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
            const year = now.getFullYear();
            const formattedTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
            setCurrentTime(formattedTime);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <S.DateSStyles>{currentTime}</S.DateSStyles>;
};


