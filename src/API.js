import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type : "LOGIN"});
    try {
        const res = await axios.post("auth/login", userCredential);
        dispatch({ type : "LOGIN_SUCCESS", payload: res.data });
    } catch(err) {
        dispatch({ type : "LOGIN_FAILURE", payload: err });
    }
}