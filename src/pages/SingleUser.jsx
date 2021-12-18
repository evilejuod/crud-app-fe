import {useState} from "react";


function SingleUser(){

    const [user, setUser] = useState([])

    const fetchUser = async () => {

    }

    return (
        <div >
            <h2>Vartotojo informacija</h2>

            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>

        </div>
    )
}
export default SingleUser;