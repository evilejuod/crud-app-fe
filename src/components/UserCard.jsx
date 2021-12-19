import css from './UserCard.module.css'
import Button from "./UI/Button";
import userService from "../utils/userService";
import {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function UserCard(){
    const history = useHistory();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(undefined);

    const fetchUserById = async () => {
        setIsLoading(true);
        try {
            const fetcdUser = await userService.getUserById(id);
            setUser(fetcdUser);
        } catch (err) {
            console.log({ err })
            // toast.error(err)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchUserById();
    }, [setUser]);

    const handleGoBack = () => {
        history.push('/')
    }

    if(isLoading) {
        return "Kraunasi..."
    }

    if(!user) {
        return "Tokio vartotojo nėra..."
    }

    return(
        <div className={css.card}>
            <h1 className='title'>Vartotojo {user.id} duomenys</h1>
            <div className={css.wrapper}>
                <p >Vartotojo vardas:</p>
                <h3>{user.name}</h3>
                <p>Vartotojo amžius:</p>
                <h3>{user.age}</h3>
                <p>Vartotojo el. paštas:</p>
                <h3>{user.email}</h3>
                <p>Vartotojo slaptažodis:</p>
                <h3>{user.password}</h3>
            </div>


            <Button type='button' onClick={handleGoBack} main>Grįžti atgal</Button>
        </div>
    )
}

export default UserCard;