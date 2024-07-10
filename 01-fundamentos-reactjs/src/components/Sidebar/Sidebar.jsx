import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1024,q_auto"
        alt=""
      />

      <div className={styles.profile}>
        <span>Robson de Jesus</span>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
