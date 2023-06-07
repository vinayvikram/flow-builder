import React, { useCallback, useEffect, useState } from "react";
import { useEdges, useNodes } from "reactflow";

const Header = () => {
  const nodes = useNodes();

  const [saveMessage, setSaveMessage] = useState({ type: "", message: "" });

  const edges = useEdges();

  const checkAndSaveFlow = useCallback(() => {
    if (nodes.length > 1) {
      const targets = edges.map((e) => e.target);

      console.log(targets);

      const targetsSet = new Set(targets);

      console.log(targetsSet);

      console.log(nodes);

      if (targetsSet.size < nodes.length - 1) {
        setSaveMessage({
          type: "error",
          message: "Cannot save flow"
        });

        return;
      }
    }

    setSaveMessage({
      type: "success",
      message: "Saved Successfully!"
    });
  }, [nodes, edges, setSaveMessage]);

  useEffect(() => {
    setTimeout(() => {
      setSaveMessage({ type: "", message: ""})
    }, 2000)
  },[saveMessage])

  return (
    <div className="header">
      <div className="save-message-container">
        {saveMessage.message && (
          <div className={`save-message ${saveMessage.type}`}>
            {saveMessage.message}{" "}
          </div>
        )}
      </div>
      <button onClick={checkAndSaveFlow} className="save-button">
        {" "}
        Save Changes{" "}
      </button>
    </div>
  );
};

export default Header;
