import { useValue } from "../../contexts/CustomContext";
import './InterfaceDetails.css';

const DestinationTableComponent = ({components}) => {
    //const {components} = useValue()
    const serviceName = components.destinationDifferentiator == ""
                        ?`${components.destinationMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_from${components.sourceMinistry}`
                        :`${components.sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_${components.sourceDifferentiator}`

    const masterRuleName = `AH.${components.destinationMinistry}.Rules.${components.sourceMinistry}in${components.sourceApplication}${components.sourceMessageType}${components.sourceDifferentiator}`
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
                    components.destinationMinistry !== "" &&
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
                        <td>{components.destinationDTLMessageType} to {components.destinationApplication}</td>
                    </tr>
                    {
                        components.isDelegateNeeded === "Yes" &&
                        <tr>
                            <td>Delegate Rule</td>
                            <td>{masterRuleName}Delegate{components.destinationApplication}{components.destinationDifferentiator}</td>
                        </tr>
                    }
                    </>
                }
                <tr>
                    <td>Operation</td>
                    <td>
                        {
                            components.destinationDifferentiator == ""
                            ?`${components.destinationMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}`
                            :`${components.destinationMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}_${components.destinationDifferentiator}`
                        }
                    </td>
                </tr>
                {
                    components.isDTLNeeded === "Yes" &&
                    <tr>
                        <td>Transform</td>
                            <td>
                                {
                                    (components.sourceDTLMessageType!== "" && components.destinationDTLMessageType !== "") && (components.sourceDTLMessageType === components.destinationDTLMessageType)
                                    ? 
                                        components.isDTLShared === "Yes" 
                                        ?
                                            `AH.${components.destinationMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.destinationDTLMessageType}Shared`
                                            : `AH.${components.destinationMinistry}.Transforms.${components.sourceApplication}To${components.destinationApplication}${components.destinationDTLMessageType}`
                                    : `AH.${components.destinationMinistry}.Transforms.${components.sourceApplication}${components.destinationDTLMessageType}To${components.destinationApplication}${components.destinationDTLMessageType}`
                                }
                            </td>
                    </tr>
                }
                </tbody>
        </table>
    )
}

export default DestinationTableComponent;