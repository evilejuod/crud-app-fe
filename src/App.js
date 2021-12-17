import './App.css';
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/add-user'>
                <AddUserPage/>
            </Route>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Route path='*'>
                <h2>Oops page not found 404</h2>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
