import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignOut } from "../../containers/Auth";

export default function Test() {

    const navigate = useNavigate();

    useEffect(() => {
        SignOut();
    }, []);

    const moveToAnotherPage = () => {
        navigate('/home')
    }

    return (
        <>
            <a onClick={moveToAnotherPage}>
                <h1>qwfqwf</h1>
            </a>
        </>
    )
}