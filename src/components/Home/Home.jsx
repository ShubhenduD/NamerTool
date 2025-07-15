import { useValue } from "../../contexts/CustomContext";
import InterfaceForm  from "../InterfaceDetails/InterfaceForm";
import InterfaceTable from "../InterfaceDetails/InterfaceTable";
import NewCustomFlowChart from "../flowchart/NewCustomFlowChart";
import ascensionLogo from '../../assets/images/ascension-logo.svg';
import deloitteLogo from '../../assets/images/deloitte-logo.svg'
import './Home.css';

export const Home = () => {
    const {components, interfaces,nodes, messageType} = useValue();
    return(
        <div className="gradient-overlay">
            <div className="container d-flex flex-row mb-2 ">
                <img src={ascensionLogo} width="200" height="100"/>
                <h1 className="m-auto">Ascension Interface Naming Tool</h1>
                <img src={deloitteLogo} width="200" height="100"/>
            </div>
            <div className="container d-flex flex-row justify-content-around">
                <div className="border border-secondary rounded" style={{width:"49%", padding:"10px"}}>
                    <div className="">
                        <h3>Component Naming</h3>
                        <InterfaceForm />
                    </div>
                </div>
                <div className="border border-secondary rounded " style={{width:"49%", padding:"10px"}}>
                    <div className="">
                        <h3>Interface Naming</h3>
                        <InterfaceTable/>
                    </div>
                    
                </div>
            </div>
            <div className="container mt-4 d-flex flex-column justify-content-between">
                <NewCustomFlowChart />
            </div>
        </div>
    );
}