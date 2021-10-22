import { useAuth } from "./context/AuthContext";
import "./styles/output.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import Boards from "./components/Boards";
import { PrivateRoute } from "./helper/PrivateRoute";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      <Switch>
        {/* dynamic routes */}
        {/* {boards
          ? boards.map((board) => (
              <PrivateRoute exact path={"/" + board} component={Board} />
            ))
          : null} */}

        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signout" component={SignOut} />

        <PrivateRoute exact path="/boards" component={Boards} />
        <Route
          path="/"
          render={() =>
            currentUser === null ? (
              <Redirect to="/login" />
            ) : (
              <Redirect to="/boards" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
