import css from 'Button.module.css'

function Button(props){

    return(
        <button type={props.type} className={css.button}>{props.children}</button>
    )
}
export default Button;