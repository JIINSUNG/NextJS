"use client";
import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🏠" : ""}
        </li>
        <li>
          <Link href="/about">About</Link>
          {path === "/about" ? "📖" : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
