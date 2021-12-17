import Input from "./UI/Input";
import css from './UserForm.module.css'
import { useFormik } from 'formik';
import Button from "./UI/Button";

const formField = [
    {
        id: '1',
        name: 'name',
        type: 'text',
        placeholder: 'Vartotojo vardas',
    },
    {
        id: '2',
        name: 'age',
        type: 'number',
        placeholder: 'Vartotojo amžius',
    },
    {
        id: '4',
        name: 'email',
        type: 'email',
        placeholder: 'Vartotojo paštas',
    },
    {
        id: '4',
        name: 'password',
        type: 'password',
        placeholder: 'Vartotojo slaptažodis',
    }
]

function UserForm(){

    const formik = useFormik({
        initialValues: {
            name: '',
            age: 0,
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            handleSubmit(values)
        }
    });

    const handleSubmit = async (values) => {
        // const resp = await fetch('http://localhost:5000/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(values),
        // });
        // const data = await resp.json();

    }

    return(
        <form onSubmit={formik.handleSubmit} className={css.form}>
            {formField.map(item =>(
                <Input
                    key={item.id}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                />
            ))}

            <Button type='submit' >Pridėti vartotoją</Button>

        </form>
    )
}

export default UserForm;