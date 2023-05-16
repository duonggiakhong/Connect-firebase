import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import { Fragment, useEffect, useState } from "react";
import Home from "./pages/Home";
import { app } from "./fireBase";
import { getDatabase, ref, set } from "firebase/database";
import Signup from "./pages/Signup/Signup";
import { getAuth, } from "firebase/auth";
import Login from "./pages/Login/Login";
import ListingPage from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "./pages/Logout/Logout";

const auth = getAuth(app);
const db = getDatabase(app);



function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  const putData = () => {
    set(ref(db, 'users/piyush'), {
      id: 1,
      username: "GIaCat",
      email: "giacatts",
      profile_picture: "1"
    });
  }

  return (
    <Fragment>
      <Router>
        <div>
          <button onClick={putData}>Put data</button>
        </div>

        <div className="App">
          <span>
            <Link to="/">welcomto Gia Cat</Link>
          </span>
        </div>

        <div>
          <hr />
          <Switch>
            <Route exact path="/" element={<Home name={userName} />}>
              <Home name={userName} />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/Logout">
              <Logout />
            </Route>
            <Route path="/listingpage">
              <ListingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
