const SelectComponent = (props) => {
    return(
        <select name={props.componentName} id={props.componentName} onChange={props.handleChange}>
            <option value={props.placeholder}>{props.placeholder}</option>
            {
                props.data.map((item, key) => 
                <option key={key} value={item}>
                    {item}
                </option>)
            }
        </select>
    )
}

export default SelectComponent;