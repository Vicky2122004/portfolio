import { useState } from "react";
import "./Header.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (hash) => {
    setActiveLink(hash);
  };
  return (
    <section id="header-cont">
      <div className="logo">
        <a href="#home" title="Home">
          VIGNESH T
        </a>
      </div>

      <div className="logo-tab">
        <a href="#home" title="Home" className="vt">
          VT
        </a>
      </div>

      <div className="nav-cont-tab">
      <ul className="nav-tab">
        <li>
          <a
            href="#home"
            title="Home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => handleClick("#home")}
          >
            <FaHome />
          </a>
        </li>
        <li>
          <a
            href="#about"
            title="About"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => handleClick("#about")}
          >
            <CgProfile />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            title="Skills"
            className={activeLink === "#skills" ? "active" : ""}
            onClick={() => handleClick("#skills")}
          >
            <HiMiniWrenchScrewdriver />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            title="Projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => handleClick("#projects")}
          >
            <FaBriefcase />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            title="Contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleClick("#contact")}
          >
            <MdContactMail />
          </a>
        </li>
      </ul>
    </div>

      {menu && (
        <div className="nav-cont">
      <ul className="nav">
        <li>
          <a
            href="#home"
            title="Home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => handleClick("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            title="About"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => handleClick("#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            title="Skills"
            className={activeLink === "#skills" ? "active" : ""}
            onClick={() => handleClick("#skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            title="Projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => handleClick("#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            title="Contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleClick("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
      )}

<div className="nav-cont-desk">
      <ul className="nav-desk">
        <li>
          <a
            href="#home"
            title="Home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => handleClick("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            title="About"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => handleClick("#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            title="Skills"
            className={activeLink === "#skills" ? "active" : ""}
            onClick={() => handleClick("#skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            title="Projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => handleClick("#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            title="Contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleClick("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>

      <div className="mode-cont">
        <BsFillMoonStarsFill className="mode-icon" />
      </div>

      <div className="download-cont">
        <button title="Download CV">Download CV</button>
      </div>

      <div className="downIcon-cont">
        <a href="#" title="Download CV">
          <MdOutlineFileDownload className="down-icon" />
        </a>
      </div>

      <div className="menu-cont">
        {menu === true ?<IoMdClose  
        className="menu-icon"
        onClick={() => setMenu(!menu)}
        title="Menu"
        /> : 
        <RiMenu2Fill
          className="menu-icon"
          onClick={() => setMenu(!menu)}
          title="Menu"
        />}
      </div>
    </section>
  );
};
