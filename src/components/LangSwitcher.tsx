import { FC, useCallback, useOptimistic } from "react";
import { CircleFlag } from "react-circle-flags";

import { useTranslation } from "react-i18next";

const languages = [
  { code: "uk", lang: "English" },
  { code: "fr", lang: "Français" },
  { code: "de", lang: "Deutsch" },
];

const LangSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const [optimisticLang, setOptimisticLang] = useOptimistic(i18n.language);

  const changeLanguage = useCallback(
    (lng: string) => {
      setOptimisticLang(lng); // for immediate UI feedback
      i18n.changeLanguage(lng);
    },
    [i18n, setOptimisticLang]
  );

  return (
    <div className="" role="group" aria-label="Language Selector">
      {languages.map((lng) => (
        // <button
        //   key={lng.code}
        //   onClick={() => changeLanguage(lng.code)}
        //   className={`btn ${optimisticLang === lng.code ? "selected" : ""}`}
        //   aria-pressed={optimisticLang === lng.code}
        // >
        //   {lng.lang}
        //   </button>

        <CircleFlag
          key={lng.code}
          countryCode={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`cursor-pointer h-4 w-4 tablet:h-5 tablet:w-5 mb-6 hover:animate-pulse ${
            optimisticLang === lng.code ? "scale-125  " : ""
          }`}
        />
      ))}
    </div>
  );
};

export default LangSwitcher;
