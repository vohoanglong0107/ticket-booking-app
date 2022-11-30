import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const MENU_LIST = [
  { text: "Lịch trò chơi", href: "/" },
  { text: "Khuyến mãi", href: "" },
  { text: "Giới thiệu", href: "" },
  { text: "Về chúng tôi", href: "" },
];

interface NavbarProps {
  user: Session["user"];
}

const Navbar = ({ user }: NavbarProps) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link legacyBehavior href={"/"}>
          <a className={styles["disabled-anchor"]}>
            <h1>SOCCIAL BOTTOM</h1>
          </a>
        </Link>
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
            <NavItem onClick={signOut} text={"Logout"} active={false}></NavItem>
          ) : (
            <NavItem href={"/signin"} text={"Login"} active={false}></NavItem>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
