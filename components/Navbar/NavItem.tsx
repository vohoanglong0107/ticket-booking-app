import classNames from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.css";
const NavItem = ({ text, href, active }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className={classNames(styles.nav__link, styles["disabled-anchor"])}>
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
