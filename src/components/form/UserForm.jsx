import Input from "../UI/Input";
import css from './UserForm.module.css'
import { useFormik } from 'formik';
import Button from "../UI/Button";
import {toast} from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import userService from "../../utils/userService";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const formField = [
    {
        id: '1',
        name: 'name',
        type: 'text',
        label: 'Vardas',
    },
    {
        id: '2',
        name: 'age',
        type: 'number',
        label: 'Amžius',
    },
    {
        id: '3',
        name: 'email',
        type: 'email',
        label: 'El. paštas',
    },
    {
        id: '4',
        name: 'password',
        type: 'password',
        label: 'Slaptažodis',
    }

]

function UserForm() {
    const history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
    });

    const fetchUser = async () => {
        const fetchedUser = await userService.getUserById(id);
        fetchedUser.password = '';
        setUser(fetchedUser);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: user,
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'Per trumpas vartotojo vardas').max(50, 'Per ilgas vartotojo vardas').required('Lauką būtina užpildyti'),
            age: Yup.number().positive('Turi būti teigiamas skaičius').required('Lauką būtina užpildyti'),
            email: Yup.string().email('Neteisingas el. pašto adresas').required('Lauką būtina užpildyti'),
            password: Yup.string().min(3, 'Per trumpas vartotojo slaptažodis'),
        }),
        onSubmit: (values) => {
            handleSubmit(values);
            handleGoBack();
        }

    });

    const handleSubmit = async (values) => {
        try {
            let message = '';
            if(id) {
                await userService.updateUser(id, values);
                message = 'Vartotojo duomenys atnaujinti';
            } else {
                await userService.createUser(values);
                message = 'Vartotojas sukurtas';
            }
            toast.success(message);
        } catch (e) {
            toast.error( 'Veiksmo atlikti nepavyko')
            console.log(e)
        }

    };

    const handleGoBack = () => {
        history.push('/')
    }

    useEffect(() => {
        if(id) {
            fetchUser();
        }
    }, [id]);

    return(
        <form onSubmit={formik.handleSubmit} className={css.form} >
            <h1 className='title'>{ id ? 'Atnaujinti vartotojo duomenis' : 'Naujas vartotojas'}</h1>
            {formField.map(item =>(
                    <Input
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        formik={formik}
                        errors={item.name}
                    />
            ))}
            <div className={css.btnWrapper}>
                <Button type='submit' >
                    { id ? 'Atnaujinti' : 'Pridėti' }
                </Button>
                <Button type="button" onClick={handleGoBack} inverted>Atšaukti</Button>
            </div>

        </form>
    )
}

export default UserForm;