import css from "./AddUserPgae.module.css";
import UserForm from "../components/UserForm";


function AddUserPage(){

    return (
        <main className={css.container}>
            <h2>Pridėti naują vartotoją</h2>
            <UserForm />
        </main>
    )
}
export default AddUserPage;