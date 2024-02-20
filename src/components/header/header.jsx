import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const moveToAnotherPage = () => {
    navigate("/test");
  };

  return (
    <div className="h-[10%] bg-[#265073] flex justify-center items-center text-white py-4">
      <a onClick={moveToAnotherPage}>
        <img
          width="70"
          src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
        />
      </a>
      <div className="flex flex-col">
        <span className="text-[20px]">Your CoPilot</span>
        <span className="text-[30px]">ChatBot</span>
      </div>
    </div>
  );
}
