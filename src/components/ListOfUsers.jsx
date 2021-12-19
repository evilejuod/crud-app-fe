import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Icon from "./UI/Icon";
import {toast} from "react-hot-toast";
import userService from '../utils/userService';
import css from './ListOfUsers.module.css'
import UserCard from "./UserCard";

function ListOfUsers(){

    const [users, setUsers] = useState([])

    const fetchAllUsers = async () => {
        try {
            const users = await userService.getAllUsers();
            setUsers(users);
        } catch (err) {
            console.log({ err })
            //toast
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [setUsers]);


    const handleDelete = async (id) => {
        try {
            await userService.deleteUser(id);
            const usersToUpdate = [...users];
            const filteredUsers = usersToUpdate.filter(u => u.id !== id);
            setUsers(filteredUsers);
        } catch (e) {
            console.log({ e })
            //toast
        }

    }

    return(
        <table className={css.table}>
            <thead>
            <tr className={css.table}>
                <th>Vardas</th>
                <th>Amžius</th>
                <th>El. paštas</th>
                <th>Slaptažodis</th>
                <th>Veiksmai</th>
            </tr>
            </thead>
            <tbody className={css.tbody}>
            {users && users.map(user => (
                <tr key={user.id} >
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td className={css.actions}>
                        <Link to={`/edit/${user.id}`}>
                            <Icon icon='fa-pencil' green/>
                        </Link>
                        <Icon icon='fa-times' red onClick={() => { handleDelete(user.id) }}/>
                        <Link to={`/user/${user.id}`}>
                            <Icon icon='fa-eye' yellow/>
                        </Link>

                    </td>
                </tr>
            ))}
            {users && !users.length &&
                <tr>
                    <td >
                        <p >No Users To Display</p>
                    </td>
                </tr>
            }
            </tbody>

        </table>
    )
}
export default ListOfUsers;