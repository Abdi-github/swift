import React, { useEffect, useState } from "react";

import data from "../../data/projects.json";
import Card from "./UI/Card";
import { useTranslation } from "react-i18next";

type DataType = {
  name: string;
  tags: string[];
  description: string;
  githubLink: string;
  webLink: string;
  photo: string;
};

const Portfolio = () => {
  const { t } = useTranslation();

  const [toggle, setToggle] = useState<string>("All");
  const [projects, setProjects] = useState<DataType[]>(data);

  useEffect(() => {
    if (toggle === "All") {
      setProjects(data);
    } else {
      const filteredProjects = data.filter((project) =>
        project.tags.includes(toggle)
      );
      setProjects(filteredProjects);
    }
  }, [toggle]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const innerText = (e.target as HTMLDivElement).textContent;
    setToggle(innerText || "");
  };
  //   const handleClicks = (e) => {
  //     const innerText = e.target.textContent;
  //     setToggle(innerText);
  //   };

  const programms = [
    { name: "All" },
    { name: "React" },
    { name: "Angular" },
    { name: "Laravel" },
  ];

  return (
    <div
      className="px-4 mt-16  tablet:max-w-2xl laptop:max-w-5xl "
      id="portfolio"
    >
      <div className="text-center mb-6 ">
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          {t("portfolio")}
        </h2>
      </div>
      <div className="mb-5 flex justify-start items-center space-x-3 cursor-pointer">
        {programms.map((p, i) => (
          <div
            key={i}
            onClick={handleClick}
            className={`px-3 py-1 rounded-full border border-primary  text-sm font-semibold hover:text-primary  ${
              toggle === p.name ? " bg-bg-dark" : "bg-transparent  "
            }`}
          >
            {p.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <Card
            key={i}
            imageUrl={p.photo}
            githubLink={p.githubLink}
            webLink={p.webLink}
            title={p.name}
            description={p.description}
            tags={p.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
