import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const moveToAnotherPage = () => {
    navigate("/test");
  };

  return (
    <div className="h-[12.5%] relative text-white flex justify-center items-center">
      <div className="h-full w-full blur-sm bg-yellow-500"></div>
      <div className="absolute flex h-full left-1/2 py-4 -translate-x-1/2">
        <a onClick={moveToAnotherPage}>
          <img
            width="80"
            src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
          />
        </a>
        <div className="flex flex-col">
          <span className="text-[25px] font-semibold">Your CoPilot</span>
          <span className="text-[30px] font-semibold">ChatBot</span>
        </div>
      </div>
    </div>
  );
}
