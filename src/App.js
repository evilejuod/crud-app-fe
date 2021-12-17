import './App.css';
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import {Switch, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="App">
        <Toaster />
        <Switch>
            <Route path='/edit'>

            </Route>
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
