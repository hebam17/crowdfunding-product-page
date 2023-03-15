import { useState, useEffect } from "react";

export default function Nav() {
  const [mobile, setMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= 480);
    window.addEventListener("resize", (e) => {
      setMobile(window.innerWidth <= 480);
      window.innerWidth > 480 && setOpenMenu(false);
    });
  }, []);

  useEffect(() => {
    // console.log(mobile);
    console.log(openMenu);
  }, [openMenu]);

  return (
    <nav>
      <div id="logo">crowdfund</div>
      {!mobile ? (
        <div id="nav-items">
          <ul id="nav-items-list">
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Discover</a>
            </li>
            <li className="nav-item">
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      ) : (
        <div id="mobile-nav-items">
          {!openMenu ? (
            <div
              className="mobile-nav-btn"
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <img src="/images/bars-solid.svg" alt="hamburger menu bars" />
            </div>
          ) : (
            <div
              className="mobile-nav-btn-close"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <img src="/images/icon-close-menu.svg" alt="close menu button" />
            </div>
          )}
          {openMenu && (
            <div className="menu-overall">
              <ul id="mobile-nav-items-list">
                <li className="mobile-nav-item">
                  <a href="#">About</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Discover</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Get Started</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
