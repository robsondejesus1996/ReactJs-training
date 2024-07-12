import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1024,q_auto"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/robsondejesus1996.png"/>
        <strong> Robson de Jesus</strong>
        <span>Sofware Engineer</span>
      </div>

      <footer>
        <a href="#" className={styles.teste}>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
