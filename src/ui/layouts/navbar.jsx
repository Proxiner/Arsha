import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

import Menu from "../components/menu";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1047); // Use `innerWidth` for accurate resizing
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleMenuToggle = (checked) => {
    setIsMenuOpen(checked);
    console.log("Menu Open State:", checked);
  };
  return (
    <nav className={styles.navbar}>
      <section className={styles.logo_container}>
        <h2>ARSHA</h2>
      </section>
      <section className={styles.contents}>
        <ul
          className={
            isMobile
              ? isMenuOpen
                ? styles.mobile_menu
                : styles.hidden_menu
              : styles.nav_links
          }
        >
          <li className={styles.nav_active}>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Drop Down</li>
          <li>Contact</li>
        </ul>
        <div className={styles.get_started}>
          <Link href={"/get-started"}> Get Started </Link>
        </div>
        {isMobile && (
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={handleMenuToggle} />
        )}
      </section>
    </nav>
  );
}
