import { Header } from "./components/Header/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium"
          />

          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium"
          />
        </main>
      </div>
    </>
  );
}
