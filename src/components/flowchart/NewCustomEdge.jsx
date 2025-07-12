import React from 'react';
import { getBezierPath, EdgeLabelRenderer } from 'reactflow';

const NewCustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all',
              padding: '4px 8px',
              background: '#fff',
              border: `1px solid ${data.edgeColor}`,
              borderRadius: 4,
              fontSize: 10,
              color: data.edgeColor,
              fontWeight: 500,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

export default NewCustomEdge;