import React, { useMemo } from "react";
import {
  getConnectedEdges,
  Handle,
  Position,
  useNodeId,
  useStore
} from "reactflow";
import MessageIcon from "../Icons/MessageIcon";

const MessageNode = ({ data, isConnectable }) => {
  const selector = (s) => ({
    nodeInternals: s.nodeInternals,
    edges: s.edges
  });

  const { nodeInternals, edges } = useStore(selector);
  const nodeId = useNodeId();

  const isSourceConnectable = useMemo(() => {
    const node = nodeInternals.get(nodeId);
    const connectedEdges = getConnectedEdges([node], edges);

    const sources = connectedEdges.filter((edge) => edge.source === node.id);

    return sources.length < 1;
  }, [nodeInternals, edges, nodeId]);

  return (
    <React.Fragment>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      <div className="message-node">
        <div className="message-node-header">
          <MessageIcon size={16} />
          Send Message
        </div>
        <div className="message-node-body">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
        isConnectable={isSourceConnectable}
      />
    </React.Fragment>
  );
};

export default MessageNode;
