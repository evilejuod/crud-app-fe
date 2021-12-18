import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Icon from "./UI/Icon";

function ListOfUsers(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchAllUsers();
    }, [setUsers]);

    const fetchAllUsers = async () => {

    }


    const handleDelete = async () => {


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
                {users && users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <Link to={`/edit/${user.id}`}>
                                <Icon icon='fa-pencil' green/>
                            </Link>
                            <Icon icon='fa-times' red onClick={() => { handleDelete() }}/>
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