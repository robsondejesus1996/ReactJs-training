import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

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
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
