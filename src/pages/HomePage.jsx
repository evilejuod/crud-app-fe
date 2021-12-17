import css from './HomePage.module.css'
import Header from "../components/header/Header";
import ListOfUsers from "../components/ListOfUsers";

function HomePage() {

    return(
        <main className={css.container}>
            <Header/>
            <h2>homepage</h2>
            <ListOfUsers />
        </main>
    )
}

export default HomePage;