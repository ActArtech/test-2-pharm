import React, { useState } from 'react';
import ReactFlow, { 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState,
  Node,
  Edge
} from 'react-flow-renderer';
import { initialNodes, initialEdges } from '../data/data';
import InfoPanel from './InfoPanel';
import ZoomControls from './ZoomControls';

const MapCanvas: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
        <ZoomControls />
      </ReactFlow>
      <InfoPanel 
        isOpen={!!selectedNode} 
        onClose={() => setSelectedNode(null)} 
        stageData={selectedNode?.data} 
      />
    </>
  );
};

export default MapCanvas;