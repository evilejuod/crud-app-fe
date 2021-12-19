import css from "./AddUserPgae.module.css";
import UserForm from "../components/form/UserForm";


function AddUserPage(){

    return (
        <main className={css.container}>
            <UserForm />
        </main>
    )
}
export default AddUserPage;