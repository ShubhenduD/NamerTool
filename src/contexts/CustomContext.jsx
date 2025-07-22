import { createContext, useContext, useState } from "react";

const namerToolContext = createContext();

function useValue() {
    const value = useContext(namerToolContext);
    return value;
}

const CustomContext = ({children}) => {

    const [ministryList, setMinistryList] = useState([]);
    const [interfaces, setInterfaces] = useState([]);
    const nodes = [];
    const edges = [];

    const componentList = {
        'sourceMessageType':"",
        'destinationMessageType':"",
        'sourceDTLMessageType':"",
        'destinationDTLMessageType':"",
        'sourceApplication':"",
        'isSourceExisting':"",
        'destinationApplication':"",
        'isDestinationExisting':"",
        'sourceMinistry':"",
        'destinationMinistry':"",
        'sourceDifferentiator':"",
        'destinationDifferentiator':"",
        'isDTLNeeded':"",
        'isDTLShared':"",
        'isDelegateNeeded':""
    }

    const connections = [
        "New", "Existing", "Decomm"
    ]

    const ministries = [
        "AHLIB","AHNAT","AHNATBAT","AHMKTBAT","AHRTHE","ALBIR","ALBIRBAT","ALMKTBAT","ALMOB","ALMOBBAT",
        "DCWAS","DCWASBAT","FLJAC","FLJACBAT","FLPEN","FLPENBAT","FLMKTBAT",
        "GCMKT","ININD","ININDBAT","INMKTBAT","ILARL","ILARLBAT","ILMKTBAT",
        "KSMKTBAT","KSWIC","KSWICBAT",
        "MDBAL","MDBALBAT","MDMKTBAT","MIDET","MIDETBAT","MIGRA","MIGRABAT",
        "MIKAL","MIKALBAT","MIMKTBAT","MIROC","MIROCBAT","MISAG","MISAGBAT","MITAWBAT",
        "NYBIN","NYBINBAT","OKMKTBAT","OKTUL","OKTULBAT",
        "SANDBOX","TNMKTBAT","TNNAS","TNNASBAT","TXAUS","TXAUSBAT",
        "TXMKTBAT","TXWAC","TXWACBAT","WIAPP","WIAPPBAT","WIGLE","WIGLEBAT",
        "WIMIL","WIMILBAT","WIMKT","WIMKTBAT"];

    const messageType = ["ADT","BAR","DFT","File","FilePDF","MDM","MFN","ORM","ORU","OSU","OQY","PPR","RAS","RDE","RDS","RGV","SIU","VXU"];

    const dtlMessageType = ["ADT","ADT1PID","ADT2PID","BAR","DFT","File","FilePDF","MDM","MFN","ORM","ORU","OSU","OQY","PPR","RAS","RDE","RDS","RGV","SIU","VXU"];

    const yesNo = ["Yes","No"];

    const [showFlowChart, setShowFlowChart] = useState(false);

    const [components,setComponents] = useState(componentList);

    return(
        <namerToolContext.Provider value={
            {
                ministries,
                components,setComponents,
                messageType,
                yesNo,
                showFlowChart,setShowFlowChart,
                componentList,
                interfaces, setInterfaces,
                nodes,edges, connections
            }
        }>
            {children}
        </namerToolContext.Provider>
    )
}

export {namerToolContext, useValue};
export default CustomContext;

