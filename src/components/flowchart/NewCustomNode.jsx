import { Handle, Position } from 'reactflow';
import { useValue } from '../../contexts/CustomContext';
import { auto } from '@popperjs/core';

const NewCustomNode = ({data}) => {
    return(
        <div style={{
          padding: 10,
          border: '1px solid #bbb',
          borderRadius: 10,
          position: 'relative',
          backgroundColor: '#dbceb2ff',
          minWidth: 120,
          height: `${data.height}px`,
          textAlign: 'center',
        }}
        >
          {
            data.input==="source" ? 
            <Handle type="source" position={Position.Right}/> :
            data.input==="destination" ? 
            <Handle type="target" position={Position.Left} /> :
            <>
              {data.sourceIds.map((sourceId, i) =>
                <Handle type="target" position={Position.Left} id={sourceId} key={i} style={{position:"absolute",top:`${150*(i)+50}px`}}/>
              )}
              {data.destinationIds.map((destinationId, i) =>
                <Handle type="source" position={Position.Right} id={destinationId} key={i} style={{position:"absolute",top:`${150*(i)+50}px`}}/>
              )}
            </>
          } 
          <strong>{data.label}</strong>  
        </div>
    );

}

export default NewCustomNode;