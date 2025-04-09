import { FC } from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import LangSwitcher from "./LangSwitcher";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t } = useTranslation();
  return (
    <header id="home" className="mb-12 flex justify-between items-center">
      <div role="list" aria-label="Social media links">
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          <BsLinkedin className="h-4 w-4 laptop:h-5 laptop:w-5  mb-6 text-primary hover:text-white transition-custom" />
        </a>
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile (opens in new tab)"
        >
          <BsGithub className="h-4 w-4 laptop:h-5 laptop:w-5 mb-6 text-primary hover:text-white transition-custom" />
        </a>
        <a
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter or X profile (opens in new tab)"
        >
          <BsTwitterX className="h-4 w-4 laptop:h-5 laptop:w-5 mb-6 text-primary hover:text-white transition-custom" />
        </a>
      </div>
      <div className="text-center space-y-10">
        <div className="space-y-2">
          <h5 className="text-sm tracking-wider font-semibold tablet:text-base tablet:font-bold">
            {t("greet")}
          </h5>
          <h1 className="text-xl font-semibold tablet:font-bold desktop:font-extrabold  tablet:text-3xl ">
            Abdulkadir Ahmed <br /> Hussien
          </h1>
          <h5 className="text-primary text-sm font-bold laptop:text-base ">
            Full-stack Developer
          </h5>
        </div>

        <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 tablet:gap-4">
          <button className=" px-3 py-2 border border-primary rounded-md text-primary hover:bg-white hover:text-bg hover:border-transparent font-semibold ">
            <a href="/cvvv.pdf" download="cvvv">
              {t("cv")}
            </a>
          </button>
          <button className="px-3 py-2 bg-primary rounded-md text-bg hover:bg-white font-semibold ">
            <a href="#contact"> {t("lets")}</a>
          </button>
        </div>
      </div>

      <LangSwitcher />
      {/* </div> */}
    </header>
  );
};

export default Header;
