import React, { useState, useRef, useEffect } from 'react';
import './MultiSelectDropDown.css'
import { useValue } from '../../contexts/CustomContext';
 
function MultiSelectComponent(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  
  const toggleDropdown = () => setIsOpen(!isOpen);
 
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
  if (props.handleChange) {
    props.handleChange({
      target: {
        name: props.componentName,
        value: selectedOptions
      }
    });
  }
}, [selectedOptions]);

useEffect(() => {
  setSelectedOptions([]);
},[props.resetCounter])

 
  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block", width: "100%" }}>
      <div
        id='dropdown-btn'
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : '--Select--'}
      </div>
 
      {isOpen && (
        <div
          style={{
            border: '1px solid gray',
            borderRadius: '10px',
            position: 'absolute',
            left: 0,
            top: '100%',
            zIndex: 1,
            maxHeight: '300px',
            overflowY: 'auto',
            padding: "10px",
            width: "100%",
            backgroundColor: "white",
            boxSizing: 'border-box',
            marginTop: '4px'
          }}
        >
          {props.data.map((option,key) => (
            <div className='dropdown' key={key}>
                    <input
                      className='option'
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label className="option" key={option} >{option}</label>
                 </div>
          ))}
        </div>
        
      )}
    </div>
  );
}
 
export default MultiSelectComponent;