import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const countdown = setInterval(() => {
            //her saniye 1 kere çalışacak bir geri sayım yarattım.
            setTimer(prevTimer => {
                //prevTimer 0'a azalanana kadar her seferinde prevTimer'ı 1 eksiltecek ve 0 olduğunda home page yönlendirecek.
                if (prevTimer === 0) {
                    navigate("/");
                }
                return prevTimer - 1;
            });
            //1000 ms yani 1 saniye'de bir çalışacak şekilde ayarladım. Bu sayede her bir saniyede prevTimer 1 azalacak.
        }, 1000);

        //clearInterval kullanmadığımda geri sayım hatalı olacağı için 1 saniyede bir saymak yerine saniye atlayabilir.
        return () => {
            clearInterval(countdown);
        }

    }, [timer])

    useEffect(() => {
        console.log("Mounted.");

        return () => console.log("Unmounted.");
    },[])

    return (
        <div>
            <h2>Page not found.</h2>
            <h3>You will be directed to Home Page in {timer} seconds.</h3>
        </div>
    )
}

export default NotFoundPage