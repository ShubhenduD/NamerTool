import { useValue } from "../../contexts/CustomContext";
import './InterfaceDetails.css';

const SourceTableComponent = ({components}) => {

    const sourceMinistry = components.sourceMinistry === "Source Ministry" ? "" : components.sourceMinistry;
    const destinationMinistry = components.destinationMinistry === "Destination Ministry" ? "" : components.destinationMinistry;

    const serviceName = components.sourceDifferentiator == ""
                        ?`${sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}`
                        :`${sourceMinistry}_in_${components.sourceApplication}_${components.sourceMessageType}_${components.sourceDifferentiator}`

    const masterRuleName = `AH.${sourceMinistry}.Rules.${sourceMinistry}in${components.sourceApplication}${components.sourceMessageType}${components.sourceDifferentiator}`

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
                    (components.sourceApplication !== "" || sourceMinistry !== "") &&
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
                                    sourceMinistry !== destinationMinistry
                                    ?
                                        components.isDTLNeeded === "Yes" 
                                        ?
                                        `${components.destinationDTLMessageType} to ${destinationMinistry}` 
                                        :
                                        `${components.destinationMessageType} to ${destinationMinistry}` 
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
                                    sourceMinistry !== destinationMinistry
                                    ?
                                        `${masterRuleName}Delegate${destinationMinistry}${components.destinationDifferentiator}`
                                    :
                                        `${masterRuleName}Delegate${components.destinationApplication}${components.destinationDifferentiator}`
                                }
                            </td>
                            </tr>
                        }
                    </>
                }
                {
                    (components.destinationApplication !== "" || destinationMinistry !== "") &&
                    <tr>
                        <td>Operation</td>
                        <td>
                            {
                                sourceMinistry !== destinationMinistry 
                                ?
                                    components.destinationDifferentiator == ""
                                    ? components.isDTLNeeded === "Yes"
                                        ? `${sourceMinistry}_out_${destinationMinistry}_${components.destinationDTLMessageType}`
                                        : `${sourceMinistry}_out_${destinationMinistry}_${components.destinationMessageType}`
                                    : components.isDTLNeeded === "Yes"
                                        ? `${sourceMinistry}_out_${destinationMinistry}_${components.destinationDTLMessageType}_${components.destinationDifferentiator}`
                                        : `${sourceMinistry}_out_${destinationMinistry}_${components.destinationMessageType}_${components.destinationDifferentiator}`
                                :
                                    components.destinationDifferentiator == ""
                                    ? components.isDTLNeeded === "Yes"
                                        ? `${sourceMinistry}_out_${components.destinationApplication}_${components.destinationDTLMessageType}`
                                        : `${sourceMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}`
                                    : components.isDTLNeeded === "Yes"
                                        ? `${sourceMinistry}_out_${components.destinationApplication}_${components.destinationDTLMessageType}_${components.destinationDifferentiator}`
                                        : `${sourceMinistry}_out_${components.destinationApplication}_${components.destinationMessageType}_${components.destinationDifferentiator}`
                            }
                        </td>
                    </tr>
                }
                {
                    components.isDTLNeeded === "Yes" && (components.sourceMinistry === components.destinationMinistry) &&
                    <tr>
                        <td>Transform</td>
                            <td>
                                {
                                    (components.sourceDTLMessageType!== "") && (components.sourceDTLMessageType === components.destinationDTLMessageType)
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