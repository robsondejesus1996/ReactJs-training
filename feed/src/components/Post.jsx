import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/robsondejesus1996.png" />
          <div className={styles.authorInfo}>
            <strong>Robson de jesus</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="1 de janeiro as 13:34" dateTime="2025-01-09 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa</p>
          <p>👋 Acabei de subir mais um projeto no meu portifa. É um</p>
          <p>
            projeto que fiz no NLW Return, evento da Rocketseat. O nome do
            projeto
          </p>
          é DoctorCare 🚀
          <p>
            👉 <a href="">jane.design/doctorcare</a>{" "}
          </p>
          <p>
            <a href=""> #novoprojeto </a> <a href=""> #nlw </a>{" "}
            <a href=""> #rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um cometário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
