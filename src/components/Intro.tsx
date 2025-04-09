import { useTranslation } from "react-i18next";
import { FaAward } from "react-icons/fa";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className=" px-4   tablet:max-w-2xl laptop:max-w-5xl " id="about">
      <div className="text-center  mb-10">
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          {t("about")}
        </h2>
      </div>
      <div className=" grid grid-cols-1 gap-4 laptop:grid-cols-2 laptop:gap-10 ">
        <div className="mx-auto laptop:ml-4 w-[210px] h-60 tablet:w-60 laptop:w-80 laptop:h-96   relative bg-gradient-to-br from-transparent via-primary to-transparent rounded-3xl place-self-center ">
          <img
            src="/m.png"
            className="object-cover h-full rounded-3xl rotate-[10deg] hover:rotate-0 transform-3d transition-transform duration-500"
            alt="my photo"
          />
        </div>
        <div className="space-y-6">
          <div className="">
            <div className="bg-bg-dark py-3 px-2 tablet:px-4   flex flex-col items-center text-center rounded-3xl  hover:bg-transparent hover:border hover:border-primary-dark">
              <FaAward className="w-6 h-6 text-primary" />
              <h4 className="font-semibold mt-3 mb-2">{t("education")}</h4>

              <p className="text-muted-light text-sm font-semibold mb-4  text-justify">
                {t("eduDesc")}
              </p>
              <p className="w-full  text-muted-light text-sm font-semibold text-start">
                {t("eduDBSC")}
              </p>
            </div>
          </div>
          <div className="">
            <p className=" font-roboto text-light text-lg  tablet:font-semibold text-justify  ">
              {t("aboutDesc")}
            </p>
          </div>

          <div className="flex justify-center ">
            <button className="px-3 py-2 bg-primary rounded-md  text-bg hover:text-muted hover:bg-bg-dark font-semibold ">
              <a href="#contact"> {t("lets")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
