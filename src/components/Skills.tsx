import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SiCodenewbie } from "react-icons/si";

// const skills = [
//   { id: 1, name: "Frontend Development" },
//   { id: 2, name: "Backend Development" },
//   { id: 3, name: "Database Management" },
//   { id: 4, name: "Version Control" },
// ];

const skills = [
  {
    id: 1,
    name: "Frontend Development ",
    Skills: [
      { id: 1, name: "HTML", icon: <SiCodenewbie /> },
      { id: 2, name: "CSS", icon: <SiCodenewbie /> },
      { id: 3, name: "JavaScript", icon: <SiCodenewbie /> },
      { id: 4, name: "React", icon: <SiCodenewbie /> },
      { id: 5, name: "Vue", icon: <SiCodenewbie /> },
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    Skills: [
      { id: 1, name: "Node.js", icon: <SiCodenewbie /> },
      { id: 2, name: "Express.js", icon: <SiCodenewbie /> },
      { id: 3, name: "Django", icon: <SiCodenewbie /> },
      { id: 4, name: "Flask", icon: <SiCodenewbie /> },
      { id: 5, name: "Ruby on Rails", icon: <SiCodenewbie /> },
      { id: 6, name: "Spring Boot", icon: <SiCodenewbie /> },
      { id: 7, name: "Laravel", icon: <SiCodenewbie /> },
      { id: 8, name: "ASP.NET", icon: <SiCodenewbie /> },
      { id: 9, name: "PHP", icon: <SiCodenewbie /> },
      { id: 10, name: "Python", icon: <SiCodenewbie /> },
      { id: 11, name: "Java", icon: <SiCodenewbie /> },
      { id: 12, name: "C#", icon: <SiCodenewbie /> },
      { id: 13, name: "Go", icon: <SiCodenewbie /> },
      { id: 14, name: "Rust", icon: <SiCodenewbie /> },
      { id: 15, name: "Kotlin", icon: <SiCodenewbie /> },
    ],
  },
  {
    id: 3,
    name: "Database Management",
    Skills: [
      { id: 1, name: "MySQL", icon: <SiCodenewbie /> },
      { id: 2, name: "PostgreSQL", icon: <SiCodenewbie /> },
      { id: 3, name: "MongoDB", icon: <SiCodenewbie /> },
      { id: 4, name: "SQLite", icon: <SiCodenewbie /> },
      { id: 5, name: "Oracle", icon: <SiCodenewbie /> },
      { id: 6, name: "Redis", icon: <SiCodenewbie /> },
      { id: 7, name: "Firebase", icon: <SiCodenewbie /> },
      { id: 8, name: "Cassandra", icon: <SiCodenewbie /> },
      { id: 9, name: "DynamoDB", icon: <SiCodenewbie /> },
      { id: 10, name: "MariaDB", icon: <SiCodenewbie /> },
    ],
  },
  {
    id: 4,
    name: "Version Control",
    Skills: [
      { id: 1, name: "Git", icon: <SiCodenewbie /> },
      { id: 2, name: "GitHub", icon: <SiCodenewbie /> },
      { id: 3, name: "GitLab", icon: <SiCodenewbie /> },
      { id: 4, name: "Bitbucket", icon: <SiCodenewbie /> },
      { id: 5, name: "SVN", icon: <SiCodenewbie /> },
      { id: 6, name: "Mercurial", icon: <SiCodenewbie /> },
    ],
  },
];

const Skills: FC = () => {
  const { t } = useTranslation();
  return (
    <div id="skills">
      <div className="text-center">
        <h2 className="text-primary text-xl font-semibold">{t("skills")}</h2>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 mt-7">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bg-dark py-10 px-2 tablet:px-4   rounded-3xl transition duration-500 ease-in-out hover:bg-transparent hover:border hover:border-primary-dark"
          >
            <h3 className="text-center text-xl font-semibold text-primary ">
              {skill.name}
            </h3>
            <div className="grid grid-cols-2 px-4 mt-8 ">
              {skill.Skills.map((s) => (
                <div key={s.id} className="flex space-x-4 items-center mb-8">
                  {s.icon}
                  <h4 className=" font-semibold tablet:text-lg tablet:tracking-wide break-all">
                    {s.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
