import { useValue } from "../../contexts/CustomContext";
import './InterfaceDetails.css';

const SourceTableComponent = ({components}) => {

    const serviceName = components.sourceDifferentiator == ""
                        ?`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}`
                        :`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_${components.sourceDifferentiator}`

    const masterRuleName = `AH.${components.sourceMinistry}.Rules.${components.sourceMinistry}in${components.sourceApplication}${components.sourceMessageType}${components.sourceDifferentiator}`

    return(
        <table className="container table table-striped overflow-scroll">
                <thead>
                    <tr>
                        <th>Components</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (components.sourceApplication !== "" || components.sourceMinistry !== "") &&
                    <>
                        <tr>
                            <td>Service</td>
                            <td>
                                {serviceName}
                            </td>
                        </tr>
                        <tr>
                            <td>Process</td>
                            <td>
                                {`${serviceName}_Router`}
                            </td>
                        </tr>
                        <tr>
                        <td>Business Rule Name</td>
                        <td>{masterRuleName}</td>
                        </tr>
                        <tr>
                        <td>Rule Name</td>
                        <td>
                            {
                                components.sourceMinistry !== components.destinationMinistry 
                                ?
                                    components.isDTLNeeded === "Yes" 
                                    ?
                                    `${components.destinationDTLMessageType} to ${components.destinationMinistry}` 
                                    :
                                    `${components.destinationMessageType} to ${components.destinationMinistry}` 
                                :
                                    components.isDTLNeeded === "Yes" 
                                    ?
                                    `${components.destinationDTLMessageType} to ${components.destinationApplication}` 
                                    :
                                    `${components.destinationMessageType} to ${components.destinationApplication}`
                            }
                        </td>
                        </tr>
                        {
                            components.isDelegateNeeded === "Yes" &&
                            <tr>
                                <td>Delegate Rule</td>
                                <td>
                                {
                                    components.sourceMinistry !== components.destinationMinistry 
                                    ?
                                        `${masterRuleName}Delegate${components.destinationMinistry}${components.destinationDifferentiator}`
                                    :
                                        `${masterRuleName}Delegate${components.destinationApplication}${components.destinationDifferentiator}`
                                }
                            </td>
                            </tr>
                        }
                    </>
                }
                {
                    (components.destinationApplication !== "" || components.destinationMinistry !== "") &&
                    <tr>
                        <td>Operation</td>
                        <td>
                            {
                                components.sourceMinistry !== components.destinationMinistry 
                                ?
                                    components.destinationDifferentiator == ""
                                    ?`${components.sourceMinistry}_out_${components.destinationMinistry}_${components.destinationDTLMessageType}`
                                    :`${components.destinationMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}_${components.destinationDifferentiator}`
                                :
                                    components.destinationDifferentiator == ""
                                    ?`${components.sourceMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}`
                                    :`${components.sourceMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}_${components.destinationDifferentiator}`    
                            }
                        </td>
                    </tr>
                }
                {
                    components.isDTLNeeded === "Yes" &&
                    <tr>
                        <td>Transform</td>
                            <td>
                                {
                                    (components.sourceDTLMessageType === components.destinationDTLMessageType) && (components.sourceDTLMessageType!== "")
                                    ? 
                                        components.isDTLShared === "Yes" 
                                        ?
                                            `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.sourceDTLMessageType}Shared`
                                            : `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.sourceDTLMessageType}`
                                    : `AH.${components.sourceMinistry}.Transforms.${components.sourceApplication}${components.sourceDTLMessageType}To${components.destinationApplication}${components.destinationDTLMessageType}`
                                }
                            </td>
                    </tr>
                }
                </tbody>
        </table>
    )
}

export default SourceTableComponent;