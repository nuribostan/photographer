import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleClick = () => {
    setMenu(!menu);
  };

  const handlePage1 = () => {
    setCurrentPage("home");
  };

  const handlePage2 = () => {
    setCurrentPage("work");
  };

  const handlePage3 = () => {
    setCurrentPage("about");
  };

  

  useEffect(() => {
    const menu2 = document.querySelector(".transform-menu");
    const square = document.querySelector(".square");
    const logo = document.querySelector(".logo-box h2");
    const logo2 = document.querySelector(".logo-box h1");
    const menuItems = document.querySelectorAll(".menu-items");

    if (menu === true) {
      menu2.classList.add("menu-active");
      square.classList.add("square-active");
      setTimeout(() => {
        logo.classList.add("logo-active");
        logo2.classList.add("logo-deactive");
        menuItems.forEach((item) => {
          item.classList.add("menu-items-active");
        });
      }, 300)
    } else {
      menu2.classList.remove("menu-active");
      square.classList.remove("square-active");
      logo.classList.remove("logo-active");
      setTimeout(() => {
        logo2.classList.remove("logo-deactive");
        menuItems.forEach((item) => {
          item.classList.remove("menu-items-active");
        });
      }, 200)
    }
  }, [menu]);

  return (
    <div className="nav-container ">
      <div className="transform-menu">
        <div className="menu-items">
          <a
            href="/" 
            className={currentPage === "home" ? "selected" : ""}
            onClick={handlePage1}
          >
            home
          </a>
          <a
            href="work"
            className={currentPage === "work" ? "selected" : ""}
            onClick={handlePage2}
          >
            work
          </a>
          <a
            href="about"
            className={currentPage === "about" ? "selected" : ""}
            onClick={handlePage3}
          >
            about
          </a>
        </div>
        <h1 className="menu-title-2">
          nuri<span>.bostan</span>
        </h1>
      </div>
      <div className="nav">
        <div className="logo-box">
          <h1>
            nuri.<span>bostan</span>
          </h1>

          <h2>
            nuri.bostan lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et
            facere sed aspernatur quia. Eveniet praesentium impedit obcaecati
            
          </h2>
        </div>
        <div className="menu" onClick={handleClick}>
          <div className="square">
            <img src="https://resmim.net/cdn/2023/09/29/ScP1o8.png" alt="" />
          </div>
          <div className="menu-title">menu</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
