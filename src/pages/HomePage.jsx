import css from './HomePage.module.css'
import Header from "../components/Header";

function HomePage() {

    return(
        <main className={css.container}>
            <Header/>
            <h2>homepage</h2>
        </main>
    )
}

export default HomePage;