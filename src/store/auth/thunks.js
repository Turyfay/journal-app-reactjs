import { singInwithGoogle } from "../../firebase/providers";
import { checkAuth } from "./authSlice";

export const checkAuthenticated = (email, password) => {
  return async (dispatch) => {
    dispatch(checkAuth());
  };
};

export const startGoogleSignIn = () => {
    return async(dispatch)=>{
        dispatch(checkAuth());

        const result = await singInwithGoogle();
    }
};
