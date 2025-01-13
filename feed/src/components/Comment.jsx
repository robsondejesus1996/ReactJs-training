import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({content, onDeleteComment}) {


  function handleDeleteComment(){
    console.log('Deletando')

    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/robsondejesus1996.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson de Jesus</strong>
              <time title="9 de Janeiro de 2025" dateTime="2025-01-09 8:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
