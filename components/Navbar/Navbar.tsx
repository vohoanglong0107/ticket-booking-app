import Link from "next/link";
import React, { useState } from "react";
import { AuthUser } from "@/lib/auth";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";
import classNames from "classnames";

const MENU_LIST = [
  { text: "Lịch trò chơi", href: "/" },
  { text: "Khuyến mãi", href: "" },
  { text: "Giới thiệu", href: "" },
  { text: "Về chúng tôi", href: "" },
];

interface NavbarProps {
  user: AuthUser;
}

const Navbar = ({ user }: NavbarProps) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link legacyBehavior href={"/"}>
          <a className={styles["disabled-anchor"]}>
            <a>
              <h1 className={styles.logo}>
                <img src="https://lzd-img-global.slatic.net/g/p/912a995390dff7f26a1bc98ef76ba7bc.jpg_720x720q80.jpg_.webp" />
              </h1>
            </a>
          </a>
        </Link>
        <div>
          <h1 className={styles.container_text}>SOCIAL BOTTOM</h1>
        </div>
        <div
          className={classNames(styles["nav__menu-list"], {
            active: navActive,
          })}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          {user ? (
            <NavItem href={"/logout"} text={"Logout"} active={false}></NavItem>
          ) : (
            <NavItem href={"/signin"} text={"Login"} active={false}></NavItem>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
