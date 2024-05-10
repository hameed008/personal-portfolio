import React from "react";
import style from "./Skills.module.css";
const Skills = () => {
  const skillsImg = [
    {
      name: "HTML",
      url: "html.svg",
      alt: "",
      title: "",
    },
    {
      name: "CSS",
      url: "css.svg",
      alt: "",
      title: "",
    },
    {
      name: "SASS",
      url: "scss.svg",
      alt: "",
      title: "",
    },
    {
      name: "Bootstrap",
      url: "bootstrap.svg",
      alt: "",
      title: "",
    },
    {
      name: "JavaScript",
      url: "javascript.svg",
      alt: "",
      title: "",
    },
    {
      name: "React Js",
      url: "react.svg",
      alt: "",
      title: "",
    },
    {
      name: "Material UI",
      url: "mui.svg",
      alt: "",
      title: "",
    },
    {
      name: "React Redux",
      url: "redux.svg",
      alt: "",
      title: "",
    },

    {
      name: "Node Js",
      url: "node-js.svg",
      alt: "",
      title: "",
    },
    {
      name: "Express Js",
      url: "expressjs.svg",
      alt: "",
      title: "",
    },
    {
      name: "Mongo DB",
      url: "mongodb.svg",
      alt: "",
      title: "",
    },
    {
      name: "Git",
      url: "git.svg",
      alt: "",
      title: "",
    },
    {
      name: "HTML",
      url: "html.svg",
      alt: "",
      title: "",
    },
    {
      name: "CSS",
      url: "css.svg",
      alt: "",
      title: "",
    },
    {
      name: "SASS",
      url: "scss.svg",
      alt: "",
      title: "",
    },
    {
      name: "Bootstrap",
      url: "bootstrap.svg",
      alt: "",
      title: "",
    },
    {
      name: "JavaScript",
      url: "javascript.svg",
      alt: "",
      title: "",
    },
    {
      name: "React Js",
      url: "react.svg",
      alt: "",
      title: "",
    },
    {
      name: "Material UI",
      url: "mui.svg",
      alt: "",
      title: "",
    },
    {
      name: "React Redux",
      url: "redux.svg",
      alt: "",
      title: "",
    },

    {
      name: "Node Js",
      url: "node-js.svg",
      alt: "",
      title: "",
    },
    {
      name: "Express Js",
      url: "expressjs.svg",
      alt: "",
      title: "",
    },
    {
      name: "Mongo DB",
      url: "mongodb.svg",
      alt: "",
      title: "",
    },
    {
      name: "Git",
      url: "git.svg",
      alt: "",
      title: "",
    },
  ];
  return (
    <div className={style.skillContainer}>
      <div className={style.skillHeading}>
        <h1>Skills</h1>
      </div>
      <div className={style.slideContainer}>
        {skillsImg.map((img, index) => {
          return (
            <div className={style.slideImage} key={index}>
              <img src={img.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
