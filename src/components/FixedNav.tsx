import { FC, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCertification, BiMessageSquareDetail } from "react-icons/bi";
import { IoCodeWorkingOutline } from "react-icons/io5";

const navItems = [
  { id: "#home", icon: <AiOutlineHome /> },
  { id: "#about", icon: <AiOutlineUser /> },
  { id: "#skills", icon: <BiCertification /> },
  { id: "#portfolio", icon: <IoCodeWorkingOutline /> },
  { id: "#contact", icon: <BiMessageSquareDetail /> },
];

const FixedNav: FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#home");
  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      role="list"
      aria-label="Navigation menu"
      className="flex justify-center space-x-5 bg-black/30 rounded-full fixed  bottom-8 left-1/2 transform -translate-x-1/2 px-5 py-3  z-50 "
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => handleNavClick(item.id)}
          aria-label={`${item.id} section`}
          className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom ${
            activeNav === item.id ? "bg-black/30 text-white" : ""
          }`}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default FixedNav;
