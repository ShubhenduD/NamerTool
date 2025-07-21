import React from "react"
export const RowColComponent = ({children}) => {
    return(
        <div className="row mb-4">
            {React.Children.map(children,(child, index)=>{
                return (
                    <div className="col">
                        {child}
                    </div>
                )
            })} 
        </div>
    )
}