import {
  registerUserWithEmailPassword,
  singInwithGoogle,
} from "../../firebase/providers";
import { checkAuth, login, logout } from "./authSlice";

export const checkAuthenticated = (email, password) => {
  return async (dispatch) => {
    dispatch(checkAuth());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkAuth());

    const result = await singInwithGoogle();
    /* console.log({result}); */
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkAuth());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    console.log(result);

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
