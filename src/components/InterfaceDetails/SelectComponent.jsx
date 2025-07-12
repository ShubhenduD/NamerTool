const SelectComponent = (props) => {
    return(
        <select name={props.componentName} id={props.componentName} onChange={props.handleChange}>
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