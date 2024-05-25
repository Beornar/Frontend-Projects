import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const countdown = setTimeout(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    navigate("/");
                }
                return prevTimer - 1;
            })
        }, 1000);

    }, [timer])

    return (
        <div>
            <h2>Page not found.</h2>
            <h3>You will be directed to Home Page in {timer} seconds.</h3>
        </div>
    )
}

export default NotFoundPage