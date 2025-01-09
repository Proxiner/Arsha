import React from "react";
import styles from "./menu.module.scss";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  const handleChange = (event) => {
    setIsMenuOpen(event.target.checked); // Pass checkbox state to parent
  };

  return (
    <label htmlFor="check" className={styles.menu_label}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="check"
        checked={isMenuOpen} // Bind state to checkbox
        onChange={handleChange} // Update state on change
      />
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
    </label>
  );
}
