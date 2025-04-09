import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" mt-20 pt-10 pb-40 bg-bg-dark">
      <div className="mb-20">
        <h1 className="text-3xl text-muted text-center">
          Abdulkadir Ahmed <br /> Hussien
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5 mb-10 tablet:flex-row tablet:justify-center tablet:items-center tablet:space-y-0 tablet:space-x-5">
        <a
          href="#home"
          className="text-primary font-semibold  hover:text-muted"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-primary font-semibold  hover:text-muted"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-primary font-semibold  hover:text-muted"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className="text-primary font-semibold  hover:text-muted"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="text-primary font-semibold  hover:text-muted"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-center space-x-5">
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary " />
        </a>
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary " />
        </a>
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitterX className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary " />
        </a>
      </div>
    </div>
  );
};

export default Footer;
