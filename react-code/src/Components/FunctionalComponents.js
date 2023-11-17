import React from 'react';
function FunctionalEx1()
{
    const paragraphStyle = {
        color: 'black',
        backgroundColor: 'lightblue',
    };
    return(
        <div
        style = {{
            width: "500px",
        }}>
            <p style={paragraphStyle}>
            <h1>Hi Students</h1>
            <h1>Welcome to the class</h1>
            </p>
            <form>
                <label for="name">Name  </label>
                <input type="text" id="name" name="name"></input><br/><br/>
                <label for="regno">Reg No </label>
                <input type="text" id="regno" name="name"></input><br/><br/>
                <label for="dob">DOB  </label>
                <input type="date" id="dob"></input><br/><br/>
                <label for="Address">Address   </label>
                <textarea></textarea>
            </form>
        </div>
    );
}
export default FunctionalEx1;