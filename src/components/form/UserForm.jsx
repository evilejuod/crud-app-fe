import Input from "../UI/Input";
import css from './UserForm.module.css'
import { useFormik } from 'formik';
import Button from "../UI/Button";
import {toast} from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import userService from "../../utils/userService";
import { useEffect, useState } from "react";

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
    }

]

function UserForm() {
    const history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        age: 0,
        email: '',
        password: '',
    });

    const fetchUser = async () => {
        const user = await userService.getUserById(id);
        setUser(user);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: user,
        onSubmit: (values) => {
            handleSubmit(values);
            handleReset();
        }
    });

    const handleSubmit = async (values) => {
        let data;
        if(id) {
            data = await userService.updateUser(id, values);
        } else {
            data = await userService.createUser(values);
        }

        if (data) {
            toast.success('vartotojas pridetas')
            history.push('/')
        }

    };

    const handleReset = () => {
        history.push('/')
    }

    useEffect(() => {
        if(id) {
            fetchUser();
        }
    }, [id]);

    console.log({ id, user })

    return(
        <form onSubmit={formik.handleSubmit} className={css.form} >
            <h1>{ id ? 'Pakoreguoti' : 'Naujas vartotojas'}</h1>
            {formField.map(item =>(
                <Input
                    key={item.id}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    formik={formik}
                />
            ))}
            <div className={css.btnWrapper}>
                <Button type='submit' >
                    { id ? 'Atnaujinti' : 'Pridėti' }
                </Button>
                <Button type="reset" onClick={handleReset} inverted>Atšaukti</Button>
            </div>



        </form>
    )
}

export default UserForm;