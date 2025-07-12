import { useValue } from "../../contexts/CustomContext";
import InterfaceForm  from "../InterfaceDetails/InterfaceForm";
import InterfaceTable from "../InterfaceDetails/InterfaceTable";
import MultiSelectDropdown from "../InterfaceDetails/MultiSelectComponent";
import NewCustomFlowChart from "../flowchart/NewCustomFlowChart";
import './Home.css'

export const Home = () => {
    const {components, interfaces,nodes, messageType} = useValue();
    return(
        <>
            <div className="container d-flex flex-row justify-content-between">
                <div className="border border-dark" style={{width:"47%", padding:"10px"}}>
                    <h2>Ascension Interface Naming Tool</h2>
                    <InterfaceForm />
                </div>
                <div className="border border-dark" style={{width:"47%", padding:"10px"}}>
                    <h2>Generated Naming Convention</h2>
                    <InterfaceTable/>
                </div>
            </div>
            <div className="container mt-5 border border-dark d-flex flex-column justify-content-between">
                <NewCustomFlowChart />
            </div>
            {console.log(interfaces)}
        </>
    );
}