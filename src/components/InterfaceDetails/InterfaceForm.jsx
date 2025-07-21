import { useValue } from "../../contexts/CustomContext"
import DropdownComponent from "./DropdownComponent"
import './InterfaceDetails.css'
import { useState } from "react"

const InterfaceForm = () => {
    const [resetCounter, setResetCounter] = useState(0);
    const {components, setComponents, ministries, messageType, yesNo, componentList, interfaces, setInterfaces, connections} = useValue();

    const handleChange = (e) => {
        if(typeof(e.target.value) === "object")
        {
            setComponents({...components,[e.target.name]: e.target.value.sort().join("")});
        }else{
            setComponents({...components,[e.target.name]: e.target.value});
        }
    }

    const handleSave = (e) => {
        setInterfaces([...interfaces, components])
        setComponents(componentList);
        console.log(interfaces);
        setResetCounter(c => c+1);
    }

    // const resetHandler = () => {
    //     setResetCounter(c => c+1);
    // }

    return(
        <form className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><DropdownComponent componentName="sourceMinistry" data={ministries} handleChange={handleChange} multiple="false" placeholder="Source Ministry"/></td>
                        <td><DropdownComponent componentName="destinationMinistry" data={ministries} handleChange={handleChange} multiple="false" placeholder="Destination Ministry"/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Source Application" name="sourceApplication" value={components.sourceApplication || ""} onChange={handleChange}/></td>
                        <td><input type="text" placeholder="Destination Application" name="destinationApplication" value={components.destinationApplication || ""} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td><DropdownComponent componentName="isSourceExisting" data={connections} handleChange={handleChange} multiple="false" placeholder="Source Connection"/></td>
                        <td><DropdownComponent componentName="isDestinationExisting" data={connections} handleChange={handleChange} multiple="false" placeholder="Destination Connection"/></td>
                    </tr>
                    <tr>
                        <td><DropdownComponent componentName="sourceMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter} placeholder="Source Message Type"/></td>
                        <td><DropdownComponent componentName="destinationMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter} placeholder="Destination Message Type"/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Source Differentiator" name="sourceDifferentiator" value={components.sourceDifferentiator || ""} onChange={handleChange}/></td>
                        <td><input type="text" placeholder="Destination Differentiator" name="destinationDifferentiator" value={components.destinationDifferentiator || ""} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><DropdownComponent componentName="isDTLNeeded" data={yesNo} handleChange={handleChange} multiple="false" placeholder="DTL Needed"/></td>
                    </tr>
                    {components.isDTLNeeded === "Yes" &&
                    <>
                    <tr>
                        <td><DropdownComponent componentName="sourceDTLMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter} placeholder="Source DTL Message Type"/></td>
                        <td><DropdownComponent componentName="destinationDTLMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter} placeholder="Destination DTL Message Type"/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><DropdownComponent componentName="isDTLShared" data={yesNo} handleChange={handleChange} multiple="false" placeholder="DTL Shared"/></td>
                    </tr>
                    </> 
                    }
                    
                    <tr>
                        <td colSpan={2}><DropdownComponent componentName="isDelegateNeeded" data={yesNo} handleChange={handleChange} multiple="false" placeholder="Delegate Needed"/></td>
                    </tr>
                </tbody>
            </table>
            <button type="reset" onClick={handleSave} className="btn btn-primary" style={{width: "100%"}}>Save Interface</button>
                {/* <button type="reset" onClick={resetHandler} className="btn btn-danger">Reset</button> */}
        </form>
        
    )
}

export default InterfaceForm;