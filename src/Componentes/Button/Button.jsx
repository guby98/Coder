
import './button.css'

function Button(props) {
    
    return(
        <button className={props.estilo} onClick={props.onClick} >
            {props.children}
        </button>
    )
}

export default Button;