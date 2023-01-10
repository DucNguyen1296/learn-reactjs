// import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import TodoFeature from "./features/Todo";
// import AlbumFeature from "./features/Album";
import ColorBox from "./components/ColorBox";

import Counter from "./components/Counter";
import ColorBox2 from "./components/ColorBox2";
import TodoFeature2 from "./components/Todo2";
import List from "./components/PostList";
// import Clock from "./components/Clock";
import ShowClock from "./components/Clock/ShowClock";
import Clock2 from "./components/Clock2";
import MagicBox from "./components/MagicBox";
import HomePage from "./pages/HomePage";
import Example from "./components/Example";
// import Form from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoFeature />
      <TodoFeature2 />

      {/* <AlbumFeature /> */}
      <ColorBox />
      <ColorBox2 />
      <Counter />

      <List />

      <ShowClock />
      <Clock2 />

      <MagicBox />

      <HomePage />

      <Example />
    </div>
  );
}

export default App;
