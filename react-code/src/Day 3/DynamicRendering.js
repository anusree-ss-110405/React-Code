import REACT from 'react'
export default function DynamicRenderingExample({isLoggedIn})
{
    return(
        <div>
            {isLoggedIn?<p>Welcome,user!</p>:<p>Please log in.</p>}
        </div>
    );
}
