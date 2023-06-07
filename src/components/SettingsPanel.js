import React, { useCallback, useEffect, useState } from "react";
import { useNodes } from "reactflow";

const SettingsPanel = ({ selectedNode, setNodes }) => {
  const nodes = useNodes();

  const changeNodeMessage = useCallback(
    (messageText) => {
      const otherNodes = nodes.filter((n) => n.id !== selectedNode.id);

      const updatedSelectedNodes = {
        ...selectedNode,
        data: { label: messageText }
      };

      setNodes(otherNodes.concat(updatedSelectedNodes));
    },
    [selectedNode, nodes, setNodes]
  );

  const unSelectNode = useCallback(() => {
    const unSelectedNodes = nodes.map((n) => ({ ...n, selected: false }));

    setNodes(unSelectedNodes);
  }, [setNodes, nodes]);

  return (
    <div className="settings-panel">
      <div className="settings-panel-header">
        <span className="settings-back-button" onClick={unSelectNode}>
          &larr;
        </span>
        Message
      </div>
      <div className="settings-panel-body">
        Text
        <textarea
          defaultValue={nodes.find((n) => n.id === selectedNode.id).data.label}
          onChange={(e) => changeNodeMessage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
