import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Post
        author="Robson "
        content="Lorem ipsum dolor sit amet, consecte Blanditiis error eos dicta, veritatis in atque incidunt quo suscipit non officia!"
      />

      <Post author="Marcela " content="Lorem  suscipit non officia!" />
    </>
  );
}
