import React from "react";
import { useDrag } from "react-dnd";
import MessageIcon from "./MessageIcon";

const NodesPanel = () => {
  const [_, drag] = useDrag(() => ({
    type: "NODE"
  }));

  return (
    <div className="nodes-panel">
      <div ref={drag} className="sample-message-node">
        <MessageIcon size={24} />
        <span>Message</span>
      </div>
    </div>
  );
};

export default NodesPanel;
