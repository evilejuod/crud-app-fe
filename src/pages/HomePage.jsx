import Header from "../components/header/Header";
import ListOfUsers from "../components/ListOfUsers";

function HomePage() {

    return(
        <main className='container'>
            <Header/>
            <ListOfUsers />
        </main>
    )
}

export default HomePage;