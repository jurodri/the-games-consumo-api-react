import styles from "@/components/Menu/Menu.module.css";
import Link from 'next/link'; 

const Menu = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">
            <img src="images/thegames_symbol.png" alt="The Games" />
          </a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuItems} id="menuItems">
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/create">Cadastrar jogos</Link>
            </li>
            <li>
            <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
