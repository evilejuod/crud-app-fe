import css from './Input.module.css'

function Input({id, type, name, placeholder, formik}){

    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            // defaultValue={formik.values[`${name}`]}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            className={css.input}
        />

    )
}

export default Input;