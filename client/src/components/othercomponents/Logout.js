import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const history = useNavigate();

    const logoutFun = async () => {

        try {
            const res = await fetch("/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
               console.log(res.status);
                history("/");

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       logoutFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {" "}
        </>
    )
}

export default Logout;