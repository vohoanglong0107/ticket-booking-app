import classNames from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.css";

type Clickable =
  | {
      href: string;
      onClick?: () => void;
    }
  | {
      href?: string;
      onClick: () => void;
    };

type NavbarProps = {
  text: string;
  active: boolean;
} & Clickable;

const NavItem = ({ text, href, onClick, active }: NavbarProps) => {
  if (href)
    return (
      <Link legacyBehavior href={href}>
        <a className={classNames(styles.nav__link, styles["disabled-anchor"])}>
          {text}
        </a>
      </Link>
    );
  return (
    <a
      className={classNames(styles.nav__link, styles["disabled-anchor"])}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default NavItem;
