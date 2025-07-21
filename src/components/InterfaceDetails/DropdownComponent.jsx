import MultiSelectComponent from "./MultiSelectComponent"
import SelectComponent from "./SelectComponent"

const DropdownComponent = (props) => {
    if(props.multiple === "false")
        return<SelectComponent data={props.data} componentName={props.componentName} handleChange={props.handleChange} resetCounter={props.resetCounter} placeholder={props.placeholder}/>
    else
        return <MultiSelectComponent data={props.data} componentName={props.componentName} handleChange={props.handleChange} resetCounter={props.resetCounter} placeholder={props.placeholder}/>
}

export default DropdownComponent;