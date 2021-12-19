import css from './Input.module.css'

function Input({id, type, name, placeholder, formik}){

    return (
        <>
            <label className={css.label}>
                {placeholder}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                // placeholder={placeholder}
                defaultValue={formik.values[`${name}`]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={css.input}
            />
            {
                formik.touched[name] && formik.errors[name] &&
                <span>
                    {formik.errors[name]}
                </span>
            }

        </>

    )
}

export default Input;