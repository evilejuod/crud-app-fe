import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Icon from "./UI/Icon";

const url = 'http://localhost:8000'

function ListOfUsers(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [setUsers]);


    const fetchUsers = async () => {
        const response = await fetch(`${url}/users`);
        const result = await response.json();
        setUsers(result)
    }

    const handleDelete = async (id) => {
        // const response = await fetch(`${url}/users/${id}`, {method: 'DELETE'})
        // const result = await response.json()
        // .then((result) => {
        //     setUsers(users.filter((user) => user.id !== id))
        // })

    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Vardas</th>
                    <th>Amžius</th>
                    <th>El. paštas</th>
                    <th>Slaptažodis</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <Link to={'/edit'}>
                                <Icon icon='fa-pencil' green/>
                            </Link>
                            <Icon icon='fa-times' red onClick={handleDelete}/>
                            {/*<Icon icon='fa-eye' yellow/>*/}
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>
    )
}
export default ListOfUsers;