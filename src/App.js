import React from "react";
import PlayGround from "./components/PlayGround";
import "./styles.css";
import "reactflow/dist/style.css";
import { ReactFlowProvider } from "reactflow";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
        <PlayGround />
      </ReactFlowProvider>
    </DndProvider>
  );
};

export default App;
