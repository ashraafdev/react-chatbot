import { Link, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {

    const navigate = useNavigate();

    const moveToAnotherPage = () => {
        navigate('/test')
    }

    return (
        <div className="header bg-[#1B1A55]">
            <a onClick={moveToAnotherPage}>
                <img  width="80" src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png" />
            </a>
            <div>
                <span className="firstName">Your CoPilot</span>
                <span className="secondName">ChatBot</span>
            </div>
        </div>
    )
}