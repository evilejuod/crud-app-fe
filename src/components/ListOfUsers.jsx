import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Icon from "./UI/Icon";
import {toast} from "react-hot-toast";
import userService from '../utils/userService';
import css from './ListOfUsers.module.css'

function ListOfUsers(){

    const [users, setUsers] = useState([])

    const fetchAllUsers = async () => {
        try {
            const users = await userService.getAllUsers();
            setUsers(users);
        } catch (err) {
            console.log({ err })

        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [setUsers]);


    const handleDelete = async (id) => {
        try {
            await userService.deleteUser(id);
            const usersToUpdate = [...users];
            const filteredUsers = usersToUpdate.filter(item => item.id !== id);
            setUsers(filteredUsers);
            toast.success('Vartotojas sėkmingai ištrintas')
        } catch (e) {
            toast.error('Vartotojo ištrinti nepavyko')
        }

    }

    return(
        <table className={css.table}>
            <thead>
            <tr className={css.table}>
                <th>Vardas</th>
                <th>Amžius</th>
                <th>El. paštas</th>
                <th>Veiksmai</th>
            </tr>
            </thead>
            <tbody>
            {users && users.map(user => (
                <tr key={user.id} >
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    {/*<td>{user.password}</td>*/}
                    <td className={css.actions}>
                        <Link to={`/user/${user.id}`}>
                            <Icon icon='fa-eye' yellow/>
                        </Link>
                        <Link to={`/edit/${user.id}`}>
                            <Icon icon='fa-pencil' green/>
                        </Link>
                        <Icon icon='fa-times' red onClick={() => {handleDelete(user.id) }}/>
                    </td>
                </tr>
            ))}
            {users && !users.length &&
                <tr>
                    <td colSpan='4'>
                        Nėra nei vieno vartotojo
                    </td>
                </tr>
            }
            </tbody>

        </table>
    )
}
export default ListOfUsers;