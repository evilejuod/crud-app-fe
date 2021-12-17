import Input from "../UI/Input";
import css from './UserForm.module.css'
import { useFormik } from 'formik';
import Button from "../UI/Button";
import {toast} from "react-hot-toast";
import { useHistory } from "react-router-dom";

const formField = [
    {
        id: '1',
        name: 'name',
        type: 'text',
        placeholder: 'Vardas',
    },
    {
        id: '2',
        name: 'age',
        type: 'number',
        placeholder: 'Amžius',
    },
    {
        id: '3',
        name: 'email',
        type: 'email',
        placeholder: 'El. paštas',
    },
    {
        id: '4',
        name: 'password',
        type: 'password',
        placeholder: 'Slaptažodis',
    },
    {
        id: '5',
        name: 'repeatPassword',
        type: 'text',
        placeholder: 'Pakartoti slaptažodį',
    }
]

function UserForm(){
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: '',
            age: 0,
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: (values) => {
            handleSubmit(values)
        }
    });

    const handleSubmit = async (value) => {
        const resp = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        });
        const data = await resp.json();
        if (data) {
            toast.success('success')
            history.push('/')
        }

    };

    console.log(formik.values)

    return(
        <form onSubmit={formik.handleSubmit} className={css.form} >
            {formField.map(item =>(
                <Input
                    key={item.id}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    formik={formik}
                />
            ))}

            <Button type='submit' >Pridėti</Button>
            {/*<Button type='submit' >Atšaukti</Button>*/}

        </form>
    )
}

export default UserForm;