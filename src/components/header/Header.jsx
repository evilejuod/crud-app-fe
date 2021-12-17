import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import css from './Header.module.css'

function Header({title, buttonText}){

    return(
        <nav className={css.container}>
            <h1>Vartotojų tvarkyklė</h1>
            <NavLink to={'/add-user'} >
                <Button>Pridėti vartotoją</Button>
            </NavLink>

        </nav>
    )
}
export default Header;