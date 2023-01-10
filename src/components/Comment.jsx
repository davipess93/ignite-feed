import { ThumbsUp, Trash } from 'phosphor-react';
import sytles from './Comment.module.css';

export function Comment() {
  return(
    <div className={sytles.comment}>
      <img src="https://github.com/davipess93.png" />

      <div className={sytles.commentBox}>
        <div className={sytles.commentContent}>
          <header>
            <div className={sytles.authorAndTime}>
              <strong>Davi Pessoa</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-11-09 16:49:21">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Devon, parabens!!</p>
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