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
    },
    {
        id: '5',
        name: 'repeatPassword',
        type: 'password',
        label: 'Pakartokite slaptažodį',
    }

]
const formFieldTwo = [
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
        repeatPassword: '',
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
            name: Yup.string().min(3, 'Vartotojo vardą turi sudaryti bent 3 simboliai')
                .max(50, 'Vartotojo vardą turi sudaryti ne daugiau, kaip 50 simbolių')
                .required('Lauką būtina užpildyti'),
            age: Yup.number().positive('Turi būti teigiamas skaičius').required('Lauką būtina užpildyti'),
            email: Yup.string().email('Neteisingas el. pašto adresas').required('Lauką būtina užpildyti'),
            password: Yup.string()
                .concat( !id ? Yup.string().required('Lauką būtina užpildyti') : null)
                .min(6, 'Per trumpas vartotojo slaptažodis'),
            repeatPassword: Yup.string()
                .concat( !id ? Yup.string().required('Lauką būtina užpildyti') : null)
                .oneOf([Yup.ref('password')], 'Slaptažodžiai turi sutapti'),
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
            {/*{formField.map(item =>(*/}
            {/*        <Input*/}
            {/*            key={item.id}*/}
            {/*            name={item.name}*/}
            {/*            type={item.type}*/}
            {/*            label={item.label}*/}
            {/*            formik={formik}*/}
            {/*            errors={item.name}*/}
            {/*        />*/}
            {/*))}*/}
            {!id ?
                formField.map(item => (
                    <Input
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        formik={formik}
                        errors={item.name}
                    />
                ))
             :
                formFieldTwo.map(item => (
                    <Input
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        formik={formik}
                        errors={item.name}
                    />
                ))

            }

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