import { format, formatDistanceToNow } from 'date-fns';
import ptBR  from 'date-fns/locale/pt-BR'
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { useState } from 'react';



// eslint-disable-next-line react/prop-types
export function Post({ author, publishedAt, content}){
  const [comments, setComments] = useState([
    1,
    2,
    
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

  function handleCreatenewComment(){
    event.preventDefault()

    setComments([...comments, comments.length + 1]);

  }

  return(
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>

          {content.map(line =>{
            if(line.type === 'paragraph'){
              // eslint-disable-next-line react/jsx-key
              return <p>{line.content}</p>
            }else if (line.type === 'link'){
              // eslint-disable-next-line react/jsx-key
              return <p><a href="#">{line.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreatenewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            placeholder="Deixe um comentário"
            
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment =>{
            return <Comment/>
          })}          
        </div>

      </article>
    </>
  )
}
