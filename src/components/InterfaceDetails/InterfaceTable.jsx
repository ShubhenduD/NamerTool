import { useValue } from "../../contexts/CustomContext";
import './InterfaceDetails.css';
import SourceTableComponent from "./SourceTableComponent";
import DestinationTableComponent from "./DestinationTableComponent";

const InterfaceTable = () => {
    const {components} = useValue()
    return(
        // <table className="container table table-striped overflow-scroll">
        //         <thead>
        //             <tr>
        //                 <th>Components</th>
        //                 <th>Name</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //         {
        //             (components.sourceApplication !== "" || components.sourceMinistry !== "" 
        //                 || components.sourceMessageType !== ""
        //             ) &&
        //             <>
        //                 <tr>
        //                     <td>Service</td>
        //                     <td>
        //                         {
        //                             components.sourceDifferentiator == ""
        //                             ?`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}`
        //                             :`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_${components.sourceDifferentiator}`
        //                         }
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                     <td>Process</td>
        //                     <td>
        //                         {
        //                             components.sourceDifferentiator == ""
        //                             ?`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_Router`
        //                             :`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_${components.sourceDifferentiator}_Router`
        //                         }
        //                     </td>
        //                 </tr>
        //                 <tr>
        //                 <td>Business Rule Name</td>
        //                 <td>AH.{components.sourceMinistry}.Rules.{components.sourceMinistry}in{components.sourceApplication}{components.sourceMessageType}{components.sourceDifferentiator}</td>
        //             </tr>
        //             <tr>
        //                 <td>Rule Name</td>
        //                 <td>{components.destinationDTLMessageType} to {components.destinationApplication}</td>
        //             </tr>
        //             {
        //                 components.isDelegateNeeded === "Yes" &&
        //                 <tr>
        //                     <td>Delegate Rule</td>
        //                     <td>AH.{components.sourceMinistry}.Rules.{components.sourceMinistry}in{components.sourceApplication}{components.sourceMessageType}{components.sourceDifferentiator}Delegate{components.destinationApplication}{components.destinationDifferentiator}</td>
        //                 </tr>
        //             }
        //             </>
        //         }
        //         {
        //             (components.destinationApplication !== "" || components.destinationMinistry !== "" 
        //                 || components.destinationMessageType !== ""
        //             ) &&
        //             <tr>
        //                 <td>Operation</td>
        //                 <td>
        //                     {
        //                         components.destinationDifferentiator == ""
        //                         ?`${components.destinationMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}`
        //                         :`${components.destinationMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}_${components.destinationDifferentiator}`
        //                     }
        //                 </td>
        //             </tr>
        //         }
        //         {
        //             components.isDTLNeeded === "Yes" &&
        //             <tr>
        //                 <td>Transform</td>
        //                     <td>
        //                         {
        //                             (components.sourceDTLMessageType === components.destinationDTLMessageType) && (components.sourceDTLMessageType!== "" && components.sourceDTLMessageType !== "")
        //                             ? 
        //                                 components.isDTLShared === "Yes" 
        //                                 ?
        //                                     `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.sourceDTLMessageType}Shared`
        //                                     : `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.sourceDTLMessageType}`
        //                             : `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}${components.sourceDTLMessageType}To${components.destinationApplication}${components.destinationDTLMessageType}`
        //                         }
        //                     </td>
        //             </tr>
        //         }
        //         </tbody>
        // </table>
        <>
        {(components.sourceMinistry !== components.destinationMinistry && components.destinationMinistry !== "") && <h5>Source Ministry Components</h5>}
        <SourceTableComponent components={components}/>
        {(components.sourceMinistry !== components.destinationMinistry && components.destinationMinistry !== "") && <><h5>Destination Ministry Components</h5><DestinationTableComponent components={components} /></>}
        </>
    )
}

export default InterfaceTable;