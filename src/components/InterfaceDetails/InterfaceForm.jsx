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
            setComponents({...components,[e.target.name]: e.target.value.join("")});
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
                        <th></th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Ministry</label></td>
                        <td><DropdownComponent componentName="sourceMinistry" data={ministries} handleChange={handleChange} multiple="false"/></td>
                        <td><DropdownComponent componentName="destinationMinistry" data={ministries} handleChange={handleChange} multiple="false"/></td>
                    </tr>
                    <tr>
                        <td><label>Application</label></td>
                        <td><input type="text" placeholder="Source Application" name="sourceApplication" value={components.sourceApplication || ""} onChange={handleChange}/></td>
                        <td><input type="text" placeholder="Destination Application" name="destinationApplication" value={components.destinationApplication || ""} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>Connection</label></td>
                        <td><DropdownComponent componentName="isSourceExisting" data={connections} handleChange={handleChange} multiple="false"/></td>
                        <td><DropdownComponent componentName="isDestinationExisting" data={connections} handleChange={handleChange} multiple="false"/></td>
                    </tr>
                    <tr>
                        <td><label>Messsage Type</label></td>
                        <td><DropdownComponent componentName="sourceMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter}/></td>
                        <td><DropdownComponent componentName="destinationMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter}/></td>
                    </tr>
                    <tr>
                        <td><label>Differentiator</label></td>
                        <td><input type="text" placeholder="Source Differentiator" name="sourceDifferentiator" value={components.sourceDifferentiator || ""} onChange={handleChange}/></td>
                        <td><input type="text" placeholder="Destination Differentiator" name="destinationDifferentiator" value={components.destinationDifferentiator || ""} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>DTL Needed</label></td>
                        <td colSpan={2}><DropdownComponent componentName="isDTLNeeded" data={yesNo} handleChange={handleChange} multiple="false"/></td>
                    </tr>
                    {components.isDTLNeeded === "Yes" &&
                    <>
                    <tr>
                        <td><label>DTL Messsage Type</label></td>
                        <td><DropdownComponent componentName="sourceDTLMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter}/></td>
                        <td><DropdownComponent componentName="destinationDTLMessageType" data={messageType} handleChange={handleChange} multiple="true" resetCounter={resetCounter}/></td>
                    </tr>
                    <tr>
                        <td><label>DTL Shared</label></td>
                        <td colSpan={2}><DropdownComponent componentName="isDTLShared" data={yesNo} handleChange={handleChange} multiple="false"/></td>
                    </tr>
                    </> 
                    }
                    
                    <tr>
                        <td><label>Delegate Needed</label></td>
                        <td colSpan={2}><DropdownComponent componentName="isDelegateNeeded" data={yesNo} handleChange={handleChange} multiple="false"/></td>
                    </tr>
                </tbody>
            </table>
            <div className="container d-flex flex-row">
                <button type="reset" onClick={handleSave} className="btn btn-primary">Save Interface</button>
                {/* <button type="reset" onClick={resetHandler} className="btn btn-danger">Reset</button> */}
            </div>
        </form>
        
    )
}

export default InterfaceForm;