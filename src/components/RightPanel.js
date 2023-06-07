import React from "react";
import { useNodes } from "reactflow";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";

const RightPanel = ({ setNodes }) => {
  const nodes = useNodes();

  const selectedNode = nodes.find((n) => n.selected);

  if (selectedNode) {
    return <SettingsPanel selectedNode={selectedNode} setNodes={setNodes} />;
  }

  return <NodesPanel />;
};

export default RightPanel;
