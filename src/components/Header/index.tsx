import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import logo from "../../../public/imagens/images/logo.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
