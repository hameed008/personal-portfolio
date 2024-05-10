import React from "react";
import style from "./Header.module.css";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.textContainer}>
            {/* <div className={style.animationContainer}> */}
            <span className={style.preText}>Hi I'm</span>
            <span className={style.name}>
              Hameed
              <span>
                <img src="waving-hand-sign.svg" alt="" />
              </span>
            </span>

            <div>
              <span className={style.text} id={style.firstText}>
                and I'm a
              </span>

              <span
                className={style.text}
                id={style.secText}
                style={{ color: " #0ae928", fontWeight: "bold" }}
              >
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "React Developer",
                    "Frontend Enthusiast",
                    "Dedicated Programmer",
                    "Team Person",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={110}
                  deleteSpeed={130}
                  cursorBlinking={false}
                />
              </span>
            </div>
          </div>
          {/* </div> */}
          <div className={style.description}>
            <p>
              A passionate Full Stack Web Developer 🚀 having a special interest{" "}
              in Frontend technologies and experience of building Web
              applications JavaScript / Reactjs / Nodejs and some other cool
              libraries and frameworks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

//   const handleDone = () => {
//     console.log(`Done after 5 loops!`);
//   };

//   return (
//     <div className="App">
//       <h1
//         style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
//       >
//         Life is simple{" "}
//         <span style={{ color: "red", fontWeight: "bold" }}>
//           {/* Style will be inherited from the parent element */}
//           <Typewriter
//             words={["Eat", "Sleep", "Code", "Repeat!"]}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={30}
//             deleteSpeed={30}
//             delaySpeed={1000}
//             onLoopDone={handleDone}
//             cursorBlinking={false}
//           />
//         </span>
//       </h1>
//     </div>
//   );
// };

export default Header;
