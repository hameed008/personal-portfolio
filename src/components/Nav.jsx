import React, { useState } from "react";
import style from "./Nav.module.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Nav = () => {
  let [activeMenu, setActiveMenue] = useState(1);
  let handleActiveMenu = (currMenu) => {
    setActiveMenue(currMenu);
  };
  // console.log(activeMenu);
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.nav}>
          <div className={style.logo}>
            {/* <img src="../public/fname.png" alt="" />
          <img src="../public/lname.png" alt="" /> */}
            <a href="https://hameed-dev.netlify.app/">
              <img
                src="https://see.fontimg.com/api/renderfont4/BWqOd/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjRkRGRjExIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/aGFtZWVk/robus.png"
                alt="Gaming fonts"
              />
            </a>
            <a href="https://hameed-dev.netlify.app/">
              <img
                src="https://see.fontimg.com/api/renderfont4/BWqOd/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMTFGRjJCIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/a2hhbg/robus.png"
                alt="Gaming fonts"
              />
            </a>
          </div>

          <div className={style.menu}>
            <a href="https://github.com/hameed008">
              <img
                src="641438ac0822599a22ea2393_Face with Tongue-p-500.png"
                alt=""
                className={
                  activeMenu === 1 ? `${style.active}` : `${style.inactive}`
                }
                onClick={() => {
                  handleActiveMenu(1);
                }}
              />
            </a>
            <a href="#">
              <img
                src="64143aa33d65707fcdf6c075_Smiling Face with Heart-Eyes-p-500.png"
                alt=""
                className={
                  activeMenu === 2 ? `${style.active}` : `${style.inactive}`
                }
                onClick={() => {
                  handleActiveMenu(2);
                }}
              />
            </a>
            <a href="#">
              <img
                src="641438c30822594e6eea2790_Smiling Face with Sunglasses-p-500.png"
                alt=""
                className={
                  activeMenu === 3 ? `${style.active}` : `${style.inactive}`
                }
                onClick={() => {
                  handleActiveMenu(3);
                }}
              />
            </a>
            <a href="#">
              <img
                src="641438ea9c368061e530c17b_Face Screaming in Fear-p-500.png"
                alt=""
                className={
                  activeMenu === 4 ? `${style.active}` : `${style.inactive}`
                }
                onClick={() => {
                  handleActiveMenu(4);
                }}
              />
            </a>
          </div>

          <div className={style.socialLinks}>
            {/* <span className="mode dark-mode light-mode">
            <a href="#">
              <i class="fa-solid fa-moon"></i>
            </a>
          </span> */}

            <a href="https://github.com/hameed008">
              <FaGithub className={style.gitHub} />
            </a>
            <a href="https://www.instagram.com/hameed_khan008">
              <FaInstagram className={style.insta} />
            </a>
            <a href="https://www.linkedin.com/in/hameedkhan008/">
              <FaLinkedin className={style.linkedin} />
            </a>
            <a href="https://x.com/hameed_khan008">
              <FaXTwitter className={style.twitter} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
