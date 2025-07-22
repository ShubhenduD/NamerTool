import './InterfaceDetails.css';

const DestinationTableComponent = ({components}) => {
    const sourceMinistry = components.sourceMinistry === "Source Ministry" ? "" : components.sourceMinistry;
    const destinationMinistry = components.destinationMinistry === "Destination Ministry" ? "" : components.destinationMinistry;
    const destinationMessageType = components.isDTLNeeded === "Yes" ? components.destinationDTLMessageType : components.destinationMessageType

    const serviceName = components.destinationDifferentiator == ""
                        ?`${destinationMinistry}_in_${components.sourceApplication}_${destinationMessageType}_from${components.sourceMinistry}`
                        :`${destinationMinistry}_in_${components.sourceApplication}_${destinationMessageType}_from${components.sourceMinistry}_${components.destinationDifferentiator}`

    const masterRuleName = `AH.${destinationMinistry}.Rules.${destinationMinistry}in${components.sourceApplication}${destinationMessageType}from${components.sourceMinistry}`
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
                        <td>{destinationMessageType} to {components.destinationApplication}</td>
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
                            ?`${components.destinationMinistry}_out_${components.destinationApplication}_${destinationMessageType}`
                            :`${components.destinationMinistry}_out_${components.destinationApplication}_${destinationMessageType}_${components.destinationDifferentiator}`
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