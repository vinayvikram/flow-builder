import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useViewport,
  MarkerType
} from "reactflow";
import { useDrop } from "react-dnd";

import "reactflow/dist/style.css";
import MessageNode from "./MessageNode";
import { v4 as uuid } from 'uuid';

import RightPanel from "../RightPanel";

const PlayGround = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);

  const nodeTypes = useMemo(() => ({ messageNode: MessageNode }), []);

  const { x, y, zoom } = useViewport();

  const addNewNode = useCallback(
    (offset) => {
      const newNodes = nodes.concat([
        {
          id: uuid(),
          type: "messageNode",
          position: {
            x: (offset.x - x) / zoom,
            y: (offset.y - y) / zoom
          },
          data: { label: `text message ${nodes.length + 1}` }
        }
      ]);
      setNodes(newNodes);
    },
    [nodes, setNodes, x, y, zoom]
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed
            }
          },
          eds
        )
      ),
    [setEdges]
  );

  const [_, drop] = useDrop(
    () => ({
      accept: ["NODE"],
      drop: (_, monitor) => {
        addNewNode(monitor.getClientOffset());
      }
    }),
    [addNewNode]
  );

  return (
    <React.Fragment>
        <div className="flex">
          <ReactFlow
            ref={drop}
            className="playground"
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          />
          <RightPanel setNodes={setNodes} />
        </div>
    </React.Fragment>
  );
};

export default PlayGround;
