import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <img width="80" src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png" />
            <div>
                <span className="firstName">Your CoPilot</span>
                <span className="secondName">ChatBot</span>
            </div>
        </div>
    )
}