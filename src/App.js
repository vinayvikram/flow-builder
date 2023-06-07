import React from "react";
import PlayGround from "./components/PlayGround";
import "./styles.css";
import "reactflow/dist/style.css";
import { ReactFlowProvider } from "reactflow";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Header from "./components/Header";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
      <div className="flex column">
        <Header />
        <PlayGround />
      </div>
      </ReactFlowProvider>
    </DndProvider>
  );
};

export default App;
