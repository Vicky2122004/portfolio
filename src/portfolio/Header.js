import { useState } from "react";
import "./Header.css";
import { MdCloudDownload } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="header-cont">
      <div className="logo">
        <a href="#home" title="Home">
          VIGNESH T
        </a>
      </div>

      {menu && (
        <div className="nav-cont">
          <ul className="nav">
            <li>
              <a href="#home" title="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" title="About">
                About
              </a>
            </li>
            <li>
              <a href="#projects" title="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="nav-cont-desk">
        <ul className="nav-desk">
          <li>
            <a href="#home" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" title="About">
              About
            </a>
          </li>
          <li>
            <a href="#projects" title="Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="mode-cont">
        <BsFillMoonStarsFill />
      </div>

      <div className="download-cont">
        <button title="Download CV">Download CV</button>
      </div>

      <div className="downIcon-cont">
        <a href="#" title="Download CV">
          <MdCloudDownload className="down-icon" />
        </a>
      </div>

      <div className="menu-cont">
        <RiMenu2Fill
          className="menu-icon"
          onClick={() => setMenu(!menu)}
          title="Menu"
        />
      </div>
    </section>
  );
};
