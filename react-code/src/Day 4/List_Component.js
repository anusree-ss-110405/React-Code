import React from "react";
export default function ListComponent()
{
    const myList = [
        {id:'a',value:'apple'},
        {id:'b',value:'orange'},
        {id:'c',value:'strawberry'},
        {id:'d',value:'blueberry'},
        {id:'e',value:'avocado'}
    ];
    const ListItems=myList.map((items)=>
    <li key={items.id}>
        {items.value}
        </li>
    );
    return(
        <ul>{ListItems}</ul>
    );
}