import React from 'react';
import ReactFlow, { Background, Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import NewCustomNode from './NewCustomNode';
import NewCustomEdge from './NewCustomEdge';
import { useValue } from '../../contexts/CustomContext';
 
const NewCustomFlowChart = () => {
  const nodes = [];
  const edges = [];
  const uniqueNodes = new Map();
  let yOffset = 0;
  let intialHeight = 100;
  let sourceIds = [];
  let destinationIds = [];
  const {interfaces} = useValue();
  let srcEdgeColor = "";
  let dstEdgeColor = "";

  const addNode = (id, type, data, position) => {
    nodes.push({
      id: id,
      type: type,
      data: data,
      position: position
    })
    uniqueNodes.set(id,{height: data.height, sourceIds: data.sourceIds, destinationIds:data.destinationIds}); 
  }

  const addEdge = (id, source, target, type, data, sourceHandle, destinationHandle) => {
    edges.push({
      id: id,
      source: source,
      target: target,
      type: type,
      data: data,
      sourceHandle: sourceHandle,
      targetHandle: destinationHandle,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: data.edgeColor
      },
        style: {
          strokeWidth: 2,
          stroke: data.edgeColor,
        },
    });
  }
 
  interfaces.map((item,i) => {
    const y = yOffset;
    yOffset += 150;
    srcEdgeColor = item.isSourceExisting === "New" ? "#FF0072" : 
                   item.isSourceExisting === "Existing" ? "#07fa02" : "#0905f5";
    dstEdgeColor = item.isDestinationExisting === "New" ? "#FF0072" : 
                   item.isDestinationExisting === "Existing" ? "#07fa02" : "#0905f5";
    let sourceId = `src-${item.sourceApplication}-${i}`
    let destinationId = `dst-${item.destinationApplication}-${i}`
    let sourceMinistryId = `sm-${item.sourceMinistry}}`
    let destinationMinistryId = item.sourceMinistry !== item.destinationMinistry ? `dm-${item.destinationMinistry}`:null

    //Nodes Section
    addNode(sourceId, 'customNode', {id:sourceId, label: item.sourceApplication, input:"source", height: intialHeight},{x:0,y})

    if(destinationMinistryId !== null){
      if(uniqueNodes.has(sourceMinistryId)){
        addNode(sourceMinistryId, 'customNode',
          {
            label: item.sourceMinistry, 
            height: uniqueNodes.get(sourceMinistryId).height+150, 
            sourceIds:[...uniqueNodes.get(sourceMinistryId).sourceIds,`s-${sourceId}`],
            destinationIds:[...uniqueNodes.get(sourceMinistryId).destinationIds,`s-${destinationId}`]
          }
            ,{x:200,y:0})
      }else{
        addNode(sourceMinistryId, 'customNode', {label: item.sourceMinistry, height:intialHeight, sourceIds:[...sourceIds,`s-${sourceId}`], destinationIds:[...destinationIds,`s-${destinationId}`]},{x:200,y})
      }
      if(uniqueNodes.has(destinationMinistryId)){
        addNode(destinationMinistryId, 'customNode',
          {
            label: item.destinationMinistry, 
            height: uniqueNodes.get(destinationMinistryId).height+150, 
            sourceIds:[...uniqueNodes.get(destinationMinistryId).sourceIds,`d-${sourceId}`],
            destinationIds:[...uniqueNodes.get(destinationMinistryId).destinationIds,`d-${destinationId}`]
          },{x:400,y:0})
      }else{
        addNode(destinationMinistryId, 'customNode', {label: item.destinationMinistry, height:intialHeight, sourceIds:[...sourceIds,`d-${sourceId}`], destinationIds:[...destinationIds,`d-${destinationId}`]},{x:400,y})
      }
    }else{
      if(uniqueNodes.has(sourceMinistryId)){
        addNode(sourceMinistryId, 'customNode', 
          {
            label: item.sourceMinistry, 
            height: uniqueNodes.get(sourceMinistryId).height+150, 
            sourceIds:[...uniqueNodes.get(sourceMinistryId).sourceIds,`s-${sourceId}`],
            destinationIds:[...uniqueNodes.get(sourceMinistryId).destinationIds,`s-${destinationId}`]
          }
            ,{x:300,y:0})
      }else{
        addNode(sourceMinistryId, 'customNode', {label: item.sourceMinistry, height:intialHeight, sourceIds:[...sourceIds,`s-${sourceId}`], destinationIds:[...destinationIds,`s-${destinationId}`]},{x:300,y})
      }
    }
    addNode(destinationId, 'customNode', {label: item.destinationApplication, input:"destination",height:intialHeight},{x:600,y})


    //Edges Section
    //Edge from source application to source ministry
  addEdge(
    `e-sourceAppToMinistry-${i}`,
    sourceId,
    sourceMinistryId,
    'customEdge',
    { label: item.sourceMessageType, edgeColor: srcEdgeColor },
    undefined,
    `s-${sourceId}`
  );

  // If ministries are different, add edge between ministries
  if (destinationMinistryId) {
    addEdge(
      `e-ministryToMinistry-${i}`,
      sourceMinistryId,
      destinationMinistryId,
      'customEdge',
      { label: item.sourceMessageType, edgeColor: srcEdgeColor },
      `s-${destinationId}`,
      `d-${sourceId}`
    );
    // Edge from destination ministry to destination application
    addEdge(
      `e-destMinistryToApp-${i}`,
      destinationMinistryId,
      destinationId,
      'customEdge',
      { label: item.destinationMessageType, edgeColor: srcEdgeColor },
      `d-${sourceId}`,
      undefined
    );
  } else {
    // Ministries are the same, connect directly to destination application
    addEdge(
      `e-ministryToApp-${i}`,
      sourceMinistryId,
      destinationId,
      'customEdge',
      { label: item.destinationMessageType, edgeColor: dstEdgeColor },
      `s-${destinationId}`,
      undefined
    );
  }
  })
  
 
  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ customNode: NewCustomNode }}
        edgeTypes={{ customEdge: NewCustomEdge }}
        fitView
        style={{background: '#d2f5fa',}}
      >
        {console.log(uniqueNodes)}
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
 
export default NewCustomFlowChart;
