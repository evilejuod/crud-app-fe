import css from './Button.module.css'

function Button(props){

    return(
        <button type={props.type} className={props.inverted ? css.button : css.buttonMain}>{props.children}</button>
    )
}
export default Button;