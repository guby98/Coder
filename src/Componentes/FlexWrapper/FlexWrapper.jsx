import './FlexWrapper.css'

export default function FlexWrapper(props) {
    return(
        <div className="flex">
            {props.children}
        </div>
    )
}