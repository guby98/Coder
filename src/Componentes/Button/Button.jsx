import  {useState} from 'react'
import './button.css'

function Button(props) {

    let [ colorState, setColorState  ] = useState ({ backgroundColor : props.color});

   function handleClick() {
    setColorState ({ backgroundColor : "white"});
    
   };

    return(
        <button className='btn' onClick={handleClick} style = {colorState}>
            {props.children}
        </button>
    )
}

export default Button;