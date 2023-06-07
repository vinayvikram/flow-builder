import React, { useCallback, useEffect, useState } from "react";
import { useEdges, useNodes } from "reactflow";

const Header = () => {
  const nodes = useNodes();

  const [saveMessage, setSaveMessage] = useState({ type: "", message: "" });

  const edges = useEdges();

  const checkAndSaveFlow = useCallback(() => {
    if (nodes.length > 1) {
      const targets = edges.map((e) => e.target);

      const targetsSet = new Set(targets);

      if (targetsSet.size < nodes.length - 1) {
        setSaveMessage({
          type: "error",
          message: "Cannot save flow"
        });

        setTimeout(() => {
          setSaveMessage({ type: "", message: ""})
        }, 2000)

        return;
      }
    }

    setSaveMessage({
      type: "success",
      message: "Saved Successfully!"
    });

    setTimeout(() => {
      setSaveMessage({ type: "", message: ""})
    }, 2000)

  }, [nodes, edges, setSaveMessage]);


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
