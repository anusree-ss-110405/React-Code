import React from "react";

export default class HelloWorld extends React.Component{
     render()
     {
         return(
             <div>
                <img style={{width:"250px", height:"200px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfVAdYXScXS2k8lLEkz9L7bArLZ45HJ5YXr3QGBZ2lA&s" alt="My Image" />
                <h1>Picture 1</h1>
                <img style={{width:"250px", height:"200px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMv1pwwe9oVALyh_uxZgHCUrZVwCd1jlp0SLaE4DGjvQ&s" alt="My Image" />
                <h1>Picture 2</h1>
             </div>
         )
     }
 }