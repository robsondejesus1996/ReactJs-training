import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";


export function Post(){
  return(
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/robsondejesus1996.png" />
            <div className={styles.authorInfo}>
              <strong>Robson de Jesus</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="11 de Julho às 15:04" dateTime="2024-7-11 8:13:30">Publicado há 1</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="">jane.design/doctorcare </a></p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a> {''}
          <a href="">#rocketseat</a>{''}
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            placeholder="Deixe um comentário"
            
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment/>
          
        </div>

      </article>
    </>
  )
}
