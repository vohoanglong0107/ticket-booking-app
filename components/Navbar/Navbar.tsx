import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import MULogo from "@/assets/images/MU_Logo.webp";

const MENU_LIST = [
  { text: "Games", href: "/" },
  { text: "Vouchers", href: "/voucher" },
  { text: "Register Game", href: "/create-game" },
  { text: "Profile", href: "/profile" },
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
        <div className="flex flex-row pl-2.5">
          <Link href={"/"}>
            <div className="mr-0.5 overflow-hidden rounded-xl">
              <Image src={MULogo} width="64" height="64" />
            </div>
          </Link>
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
