import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Davi Pessoa"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, officia magni. Iusto eveniet quas, aspernatur deserunt dolor veritatis possimus eligendi laborum sunt veniam vel quis fugit dicta dolorum ratione repellendus?
            "
          />
          <Post
            author="Fulando de Tal"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, officia magni. Iusto eveniet quas, aspernatur deserunt dolor veritatis possimus eligendi laborum sunt veniam vel quis fugit dicta dolorum ratione repellendus?
            "
          />
        </main>
      </div>
    </div>
  )
}


export default App
