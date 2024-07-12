import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>


      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson de Jesus</strong>
              <time title="11 de Julho às 15:04" dateTime="2024-7-11 8:13:30">Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button> 
            <ThumbsUp/>
            Aplaudir <span> 20</span>
          </button>
        </footer>
      </div>
      

    </div>
  )
}