import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { signOut } from "../../../redux/actions/user.ac";

const SignOut = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const signOutFunc = () => dispatch(signOut());

  useEffect(() => {
    signOutFunc();
    // history.push("/");
  }, []);

  return null;
};

export default SignOut;
