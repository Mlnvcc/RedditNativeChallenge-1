import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import SignUp from "../Forms/SignUp/SignUp";
import SignOut from "../Forms/SignOut/SignOut";
import SignIn from "../Forms/SignIn/SignIn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../redux/actions/user.ac";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);
  // return (
  // <Router>
  //   <Nav />
  //   <div className="container py-5">
  //     <Switch>
  //       <Route path="/auth/signup">
  //         <SignUp />
  //       </Route>
  //       <Route path="/auth/signin">
  //         <SignIn />
  //       </Route>
  //       <Route path="/auth/signout">
  //         <SignOut />
  //       </Route>
  //       <Route path="/">
  //         <Main />
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
  // );
};

export default App;
