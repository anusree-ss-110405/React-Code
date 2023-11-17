import React from 'react'
export default class ClassComponent extends React.Component
{
    render(){
        const listItemStyles = {
            listStyleType: 'decimal',   // Use decimal numbering
            listStylePosition: 'inside',  // Display numbers inside the list item
            padding: 0,  // Remove padding
          };
        return (
            <div
            style = {{
                width: "500px",
            }}>
                <ol style={listItemStyles}>
                    <li>Lion</li>
                    <li>Tiger</li>
                    <li>Dog</li>
                </ol>
            </div>
        )
    }
}