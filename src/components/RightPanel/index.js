import React from "react";
import { useNodes } from "reactflow";
import SettingsPanel from "./SettingsPanel";
import NodesPanel from "./NodesPanel";

const RightPanel = ({ setNodes }) => {
  const nodes = useNodes();

  const selectedNode = nodes.find((n) => n.selected);

  if (selectedNode) {
    return <SettingsPanel selectedNode={selectedNode} setNodes={setNodes} />;
  }

  return <NodesPanel />;
};

export default RightPanel;
